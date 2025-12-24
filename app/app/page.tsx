'use client';

import { useState } from 'react';
import FloorPlanUpload from '@/components/FloorPlanUpload';
import ChatBot from '@/components/ChatBot';
import ResultsDisplay from '@/components/ResultsDisplay';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AppPage() {
  const [floorPlanImage, setFloorPlanImage] = useState<string | null>(null);
  const [designPrompt, setDesignPrompt] = useState<string>('');
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (prompt: string) => {
    if (!floorPlanImage) return;
    
    setIsGenerating(true);
    setDesignPrompt(prompt);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          floorPlanImage,
          prompt,
        }),
      });

      if (!response.ok) throw new Error('Generation failed');

      const data = await response.json();
      setGeneratedImages(data.images || []);
    } catch (error) {
      console.error('Error generating design:', error);
      alert('Failed to generate design. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header with back link */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              NanoBanana Pro
            </h1>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Transform your floor plan into stunning interior design renders with AI
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            📐 평면도 한 장으로 나만의 인테리어 완성하는 법
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Upload & Chat */}
          <div className="space-y-6">
            <FloorPlanUpload
              onImageUpload={setFloorPlanImage}
              currentImage={floorPlanImage}
            />
            
            {floorPlanImage && (
              <ChatBot
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
              />
            )}
          </div>

          {/* Right Column - Results */}
          <div>
            <ResultsDisplay
              images={generatedImages}
              prompt={designPrompt}
              isGenerating={isGenerating}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

