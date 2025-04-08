'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

export default function WordToPDFPage() {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [converting, setConverting] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === 'application/msword' || 
          selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(selectedFile);
        setError('');
      } else {
        setError(t('convert.invalidFileType'));
        setFile(null);
      }
    }
  };

  const handleConvert = async () => {
    if (!file) return;

    try {
      setConverting(true);
      setError('');

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/convert/word-to-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${file.name.split('.').slice(0, -1).join('.')}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

    } catch (err) {
      setError(t('convert.conversionError'));
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('convert.wordToPDF')}
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="space-y-6">
              {/* File Upload Area */}
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 transition-colors hover:border-blue-500 dark:hover:border-blue-400">
                <input
                  type="file"
                  accept=".doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <ArrowUpTrayIcon className="w-12 h-12 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {file ? file.name : t('convert.dragAndDrop')}
                  </span>
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-center text-sm">
                  {error}
                </div>
              )}

              {/* Convert Button */}
              <button
                onClick={handleConvert}
                disabled={!file || converting}
                className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${
                  !file || converting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {converting ? t('convert.converting') : t('convert.convertNow')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}