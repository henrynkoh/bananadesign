import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';

// Initialize Replicate client
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || '',
});

export async function POST(request: NextRequest) {
  try {
    const { floorPlanImage, prompt } = await request.json();

    if (!floorPlanImage) {
      return NextResponse.json(
        { error: 'Floor plan image is required' },
        { status: 400 }
      );
    }

    if (!prompt) {
      return NextResponse.json(
        { error: 'Design prompt is required' },
        { status: 400 }
      );
    }

    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json(
        { error: 'REPLICATE_API_TOKEN is not configured' },
        { status: 500 }
      );
    }

    // Enhanced prompt for interior design generation
    const enhancedPrompt = `A photorealistic interior design render of a room based on this floor plan. ${prompt}. High quality, professional interior design, detailed furniture, proper lighting, realistic materials, 4K resolution, architectural visualization, modern rendering.`;

    // Convert base64 to a format Replicate can use
    // Replicate accepts data URLs directly for some models
    let imageInput = floorPlanImage;
    
    // If it's a base64 data URL, use it directly (Replicate supports this)
    // Otherwise, ensure it's properly formatted
    if (!imageInput.startsWith('http') && !imageInput.startsWith('data:')) {
      // If it's just base64 without prefix, add the data URL prefix
      if (imageInput.includes(',')) {
        // Already has data URL prefix
      } else {
        imageInput = `data:image/png;base64,${imageInput}`;
      }
    }

    // Use a suitable image-to-image model for interior design
    // Alternative models you can try:
    // - "fofr/controlnet-interior-design" (if available)
    // - "lucataco/realistic-vision-v5-img2img"
    const output = await replicate.run(
      "stability-ai/stable-diffusion-img2img:15a3689ee13b0d2616e98820eca31d4c3abcd36672df6afce5cb6feb1d66087d",
      {
        input: {
          image: imageInput,
          prompt: enhancedPrompt,
          strength: 0.75, // How much to transform the image (0-1), higher = more transformation
          num_outputs: 1,
          guidance_scale: 7.5,
          num_inference_steps: 50,
        }
      }
    );

    // Handle different output formats from Replicate
    let imageUrls: string[] = [];
    if (Array.isArray(output)) {
      imageUrls = output.filter((url): url is string => typeof url === 'string');
    } else if (typeof output === 'string') {
      imageUrls = [output];
    } else if (output && typeof output === 'object') {
      // Handle object responses
      if ('url' in output && typeof (output as any).url === 'string') {
        imageUrls = [(output as any).url];
      } else if ('output' in output) {
        const nestedOutput = (output as any).output;
        if (Array.isArray(nestedOutput)) {
          imageUrls = nestedOutput.filter((url): url is string => typeof url === 'string');
        }
      }
    }

    if (imageUrls.length === 0) {
      throw new Error('No images were generated');
    }

    return NextResponse.json({ images: imageUrls });
  } catch (error: any) {
    console.error('Error generating design:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to generate design',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

