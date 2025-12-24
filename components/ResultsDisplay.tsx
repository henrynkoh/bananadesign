'use client';

import { Download, Loader2, Image as ImageIcon } from 'lucide-react';

interface ResultsDisplayProps {
  images: string[];
  prompt: string;
  isGenerating: boolean;
}

export default function ResultsDisplay({ images, prompt, isGenerating }: ResultsDisplayProps) {
  const handleDownload = (imageUrl: string, index: number) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `interior-design-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
        Generated Designs
      </h2>

      {prompt && (
        <div className="mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-1">Prompt:</p>
          <p className="text-sm text-slate-700 dark:text-slate-300">{prompt}</p>
        </div>
      )}

      {isGenerating && (
        <div className="flex flex-col items-center justify-center py-16">
          <Loader2 className="w-12 h-12 animate-spin text-indigo-600 dark:text-indigo-400 mb-4" />
          <p className="text-slate-600 dark:text-slate-400">
            Generating your interior design...
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            This may take 30-60 seconds
          </p>
        </div>
      )}

      {!isGenerating && images.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-full mb-4">
            <ImageIcon className="w-12 h-12 text-slate-400 dark:text-slate-500" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-1">
            No designs generated yet
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Upload a floor plan and describe your style to get started
          </p>
        </div>
      )}

      {images.length > 0 && (
        <div className="space-y-4">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
            >
              <div className="relative w-full aspect-square bg-slate-100 dark:bg-slate-900">
                <img
                  src={imageUrl}
                  alt={`Generated interior design ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => handleDownload(imageUrl, index)}
                className="absolute top-2 right-2 p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span className="text-xs">Download</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

