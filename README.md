# NanoBanana Pro - AI Interior Design Generator

Transform your floor plan into stunning interior design renders using AI. Inspired by the Korean tutorial "📐평면도 한 장으로 나만의 인테리어 완성하는 법!" (How to Complete Your Own Interior Design with Just One Floor Plan!)

## 🌟 Overview

NanoBanana Pro is a revolutionary web application that leverages cutting-edge artificial intelligence to transform simple floor plan images into photorealistic, professional-grade interior design visualizations. Whether you're a homeowner planning a renovation, an interior designer seeking inspiration, or a real estate professional looking to showcase properties, NanoBanana Pro makes advanced interior design visualization accessible to everyone.

### What Makes NanoBanana Pro Special?

Unlike traditional interior design software that requires extensive training, expensive licenses, and hours of manual work, NanoBanana Pro delivers stunning results in minutes. Simply upload a floor plan, describe your vision, and watch as AI brings your dream space to life. The platform combines the power of state-of-the-art image generation models with an intuitive, user-friendly interface that requires no technical expertise.

## ✨ Features

### Core Functionality

- **📐 Single Image Upload**: Upload any floor plan image (PNG, JPG, JPEG, WEBP) and transform it into a fully rendered interior space
- **✨ Photorealistic Rendering**: Generate high-quality, professional interior design visualizations that rival traditional 3D rendering software
- **💬 Intelligent Chatbot Interface**: Interactive design assistant that understands your preferences and suggests optimal design prompts
- **🎨 Multiple Style Options**: Support for various interior design styles including modern, minimalist, Scandinavian, luxury, industrial, traditional, and more
- **🌙 Dark Mode Support**: Comfortable viewing experience in any lighting condition with automatic dark mode detection
- **📱 Fully Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **⬇️ High-Resolution Downloads**: Download your generated designs in full quality for presentations, portfolios, or printing
- **🔄 Real-Time Generation**: Watch as your design comes to life with progress indicators and status updates

### Advanced Capabilities

- **Smart Prompt Enhancement**: The system automatically enhances your design descriptions with professional terminology for optimal results
- **Batch Processing**: Generate multiple design variations from a single floor plan
- **Style Presets**: Quick-access buttons for popular design styles to speed up your workflow
- **Image Optimization**: Automatic image processing and optimization for best results
- **Error Handling**: Comprehensive error messages and troubleshooting guidance

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js 18.0 or higher**: Download from [nodejs.org](https://nodejs.org/)
- **npm 9.0 or higher** (comes with Node.js) or **yarn 1.22+**
- **Git** (optional, for version control)
- **A modern web browser** (Chrome, Firefox, Safari, or Edge)

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 500MB free space
- **Internet Connection**: Required for API calls and image generation

### Installation Steps

#### Step 1: Clone or Download the Repository

If you have Git installed:
```bash
git clone https://github.com/yourusername/nanobanana-pro.git
cd nanobanana-pro
```

Alternatively, download the ZIP file and extract it to your desired location.

#### Step 2: Install Dependencies

Navigate to the project directory and install all required packages:

```bash
npm install
```

This process may take a few minutes as it downloads all necessary dependencies including Next.js, React, TypeScript, Tailwind CSS, and other libraries.

**Troubleshooting Installation:**
- If you encounter permission errors, try using `sudo` (Linux/Mac) or running as Administrator (Windows)
- For network issues, consider using a different npm registry or clearing npm cache: `npm cache clean --force`
- If Node.js version conflicts occur, consider using `nvm` (Node Version Manager) to switch versions

#### Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory of the project:

```bash
touch .env.local  # Linux/Mac
# or create the file manually on Windows
```

Add your Replicate API token:

```env
REPLICATE_API_TOKEN=your_replicate_api_token_here
```

**Getting a Replicate API Token:**

1. Visit [replicate.com](https://replicate.com) and create a free account
2. Navigate to [Account Settings > API Tokens](https://replicate.com/account/api-tokens)
3. Click "Create Token" and give it a descriptive name (e.g., "NanoBanana Pro Development")
4. Copy the generated token immediately (it won't be shown again)
5. Paste it into your `.env.local` file

**Important Security Notes:**
- Never commit `.env.local` to version control (it's already in `.gitignore`)
- Keep your API token secure and don't share it publicly
- Replicate offers a free tier with credits to get started
- Monitor your usage at [replicate.com/account](https://replicate.com/account) to avoid unexpected charges

#### Step 4: Verify Installation

Run the development server to ensure everything is set up correctly:

```bash
npm run dev
```

You should see output similar to:
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- Ready in 2.3s
```

#### Step 5: Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser. You should see the NanoBanana Pro interface.

## 📖 How to Use

### Basic Workflow

#### 1. Upload Your Floor Plan

- **Drag and Drop**: Simply drag your floor plan image file onto the upload area
- **Click to Browse**: Click the upload area to open your file browser
- **Supported Formats**: PNG, JPG, JPEG, WEBP
- **Recommended Size**: Images between 500KB and 10MB work best
- **Aspect Ratio**: Any aspect ratio is supported, though square or 4:3 ratios often produce better results

**Tips for Best Results:**
- Use clear, high-contrast floor plans
- Ensure text and dimensions are readable
- Remove any unnecessary annotations or watermarks if possible
- For best results, use floor plans with room labels

#### 2. Describe Your Design Vision

The chatbot interface allows you to communicate your design preferences in natural language:

- **Use Suggested Prompts**: Click any of the suggested style buttons for quick options
- **Write Custom Descriptions**: Type your own detailed descriptions
- **Combine Multiple Elements**: Mention colors, furniture styles, lighting, materials, and mood
- **Be Specific**: More detailed descriptions often yield better results

**Example Prompts:**
- "Modern minimalist style with neutral colors, natural wood accents, and lots of natural light"
- "Cozy Scandinavian design with white walls, light wood floors, and green plants"
- "Luxury contemporary with marble countertops, gold fixtures, and velvet furniture"
- "Industrial loft style with exposed brick, metal fixtures, and vintage furniture"
- "Warm traditional with dark wood, classic furniture, and warm lighting"

#### 3. Generate Your Design

- Click the "Send" button or press Enter
- Wait 30-60 seconds for generation (progress indicator will show status)
- The system processes your floor plan and prompt through AI models
- Multiple variations may be generated depending on settings

**During Generation:**
- Don't close the browser tab
- Keep your internet connection stable
- The page will automatically update when generation completes

#### 4. Review and Download

- View your generated design in the results panel
- Compare different variations if multiple were generated
- Click the download button to save high-resolution images
- Images are saved with descriptive filenames like `interior-design-1.png`

### Advanced Usage

#### Customizing Generation Parameters

For developers, you can modify generation parameters in `app/api/generate/route.ts`:

- **Strength**: Controls how much the AI transforms the original image (0.0-1.0)
- **Guidance Scale**: How closely the AI follows your prompt (1-20)
- **Inference Steps**: Number of processing steps (more = better quality but slower)
- **Output Count**: Number of variations to generate

#### Batch Processing

To generate multiple designs from one floor plan:

1. Upload your floor plan
2. Generate with first style description
3. Wait for completion
4. Generate again with different style (same floor plan is reused)
5. Compare all results

## 🛠️ Technology Stack

### Frontend

- **Next.js 14.2.5**: React framework with App Router for optimal performance and SEO
- **React 18.3**: Latest React features including concurrent rendering
- **TypeScript 5.5**: Type-safe development with enhanced IDE support
- **Tailwind CSS 3.4**: Utility-first CSS framework for rapid UI development
- **React Dropzone 14.2**: Robust file upload handling with drag-and-drop support
- **Lucide React 0.378**: Beautiful, consistent icon library

### Backend & APIs

- **Next.js API Routes**: Serverless functions for backend logic
- **Replicate API**: AI model hosting and inference platform
- **Stable Diffusion**: State-of-the-art image generation model

### Development Tools

- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Automatic vendor prefixing

## 🔧 Configuration & Customization

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Required
REPLICATE_API_TOKEN=your_token_here

# Optional
NEXT_PUBLIC_APP_NAME=NanoBanana Pro
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Customizing AI Models

You can switch to different AI models by modifying `app/api/generate/route.ts`. Popular alternatives include:

- **Stable Diffusion XL**: Higher resolution outputs
- **ControlNet Models**: Better floor plan interpretation
- **Custom Fine-Tuned Models**: Trained specifically for interior design
- **OpenAI DALL-E**: Alternative image generation API
- **Midjourney API**: If available through third-party services

### Styling Customization

Modify `tailwind.config.ts` to customize:
- Color schemes
- Typography
- Spacing and sizing
- Breakpoints for responsive design

### Adding New Features

The modular component structure makes it easy to add features:

- New components go in `/components`
- API routes in `/app/api`
- Pages in `/app`
- Shared utilities can be added to `/lib` or `/utils`

## 🐛 Troubleshooting

### Common Issues and Solutions

#### "REPLICATE_API_TOKEN is not configured"

**Problem**: The API token is missing or incorrectly set.

**Solutions**:
1. Verify `.env.local` exists in the project root
2. Check the token is on a single line with no extra spaces
3. Restart the development server after adding the token
4. Ensure the file is named exactly `.env.local` (not `.env.local.txt`)

#### Generation Fails or Times Out

**Problem**: API calls fail or take too long.

**Solutions**:
1. Check your Replicate account has available credits
2. Verify your internet connection is stable
3. Check Replicate service status at [status.replicate.com](https://status.replicate.com)
4. Try reducing image size or complexity
5. Increase timeout settings if self-hosting

#### Images Not Displaying

**Problem**: Generated images don't appear in the results.

**Solutions**:
1. Check browser console for CORS errors
2. Verify image URLs are accessible
3. Check `next.config.mjs` has correct image domains configured
4. Try a different browser or clear cache
5. Check network tab for failed image requests

#### Upload Not Working

**Problem**: Can't upload floor plan images.

**Solutions**:
1. Verify file format is supported (PNG, JPG, JPEG, WEBP)
2. Check file size isn't too large (try under 10MB)
3. Check browser permissions for file access
4. Try a different browser
5. Check for JavaScript errors in console

#### Build Errors

**Problem**: `npm run build` fails.

**Solutions**:
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Check Node.js version matches requirements
4. Review error messages for specific package issues
5. Try `npm cache clean --force` and reinstall

### Getting Help

- **GitHub Issues**: Report bugs or request features
- **Documentation**: Check the Manual and Tutorial files
- **Community**: Join discussions in project forums
- **Email Support**: Contact the development team

## 📚 Additional Resources

### Documentation

- **USER_MANUAL.md**: Comprehensive user guide with detailed explanations
- **TUTORIAL.md**: Step-by-step tutorial with examples
- **QUICKSTARTER.md**: Quick reference guide for experienced users

### Learning Resources

- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **React Documentation**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Replicate API Docs**: [replicate.com/docs](https://replicate.com/docs)

### Related Projects

- Interior design inspiration galleries
- Floor plan creation tools
- 3D rendering software alternatives
- AI art generation communities

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [vercel.com](https://vercel.com)
3. Add `REPLICATE_API_TOKEN` in environment variables
4. Deploy automatically on every push

### Other Platforms

**Netlify**:
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `.next`
- Add environment variables in site settings

**Self-Hosting**:
- Build: `npm run build`
- Start: `npm start`
- Configure reverse proxy (nginx/Apache)
- Set up SSL certificate
- Configure environment variables on server

### Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure proper CORS settings
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure CDN for static assets
- [ ] Set up analytics
- [ ] Configure rate limiting
- [ ] Set up backup strategy
- [ ] Test all features in production environment

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits & Acknowledgments

- Inspired by the NanoBanana Pro tutorial video demonstrating AI-powered interior design generation
- Built with Next.js and the amazing open-source community
- Powered by Replicate and Stable Diffusion
- Icons provided by Lucide
- Design inspiration from modern interior design trends

## 🤝 Contributing

We welcome contributions! Please see CONTRIBUTING.md for guidelines on:
- Code style and standards
- Pull request process
- Issue reporting
- Feature requests

## 📞 Contact & Support

- **Website**: [Your website URL]
- **Email**: support@nanobanana-pro.com
- **GitHub**: [github.com/yourusername/nanobanana-pro](https://github.com/yourusername/nanobanana-pro)
- **Twitter**: [@nanobananapro](https://twitter.com/nanobananapro)

---

**Made with ❤️ for designers, homeowners, and dreamers everywhere.**
