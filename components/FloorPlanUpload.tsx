'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface FloorPlanUploadProps {
  onImageUpload: (imageUrl: string) => void;
  currentImage: string | null;
}

export default function FloorPlanUpload({ onImageUpload, currentImage }: FloorPlanUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentImage);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onImageUpload(result);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    },
    maxFiles: 1,
  });

  const handleRemove = () => {
    setPreview(null);
    onImageUpload('');
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
        Upload Floor Plan
      </h2>
      
      {preview ? (
        <div className="relative group">
          <div className="relative rounded-lg overflow-hidden border-2 border-indigo-200 dark:border-indigo-800">
            <img
              src={preview}
              alt="Floor plan preview"
              className="w-full h-auto max-h-96 object-contain"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 text-center">
            Floor plan uploaded successfully
          </p>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-xl p-12 text-center cursor-pointer
            transition-all duration-200
            ${isDragActive
              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
              : 'border-slate-300 dark:border-slate-600 hover:border-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'
            }
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              <Upload className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            {isDragActive ? (
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                Drop your floor plan here...
              </p>
            ) : (
              <>
                <div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">
                    Drag & drop your floor plan
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    or click to browse
                  </p>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  Supports PNG, JPG, JPEG, WEBP
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

