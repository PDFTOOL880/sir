'use client';

import { useTranslation } from 'react-i18next';

export default function DocumentationPage() {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 py-8 mt-16 text-gray-900 dark:text-white" dir="auto">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('docs.title')}</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Getting Started Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{t('docs.gettingStarted')}</h2>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('docs.gettingStartedDesc')}
            </p>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">{t('docs.prerequisites')}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>API Key</li>
                <li>Active Account</li>
                <li>Stable Internet Connection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{t('docs.apiDocumentation')}</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="font-semibold mb-2">{t('docs.wordToPdfTitle')}</h3>
              <code className="block bg-gray-800 dark:bg-black text-white p-3 rounded-md" dir="ltr">
                POST /api/convert/word-to-pdf
              </code>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{t('docs.wordToPdfDesc')}</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="font-semibold mb-2">{t('docs.mergePdfTitle')}</h3>
              <code className="block bg-gray-800 dark:bg-black text-white p-3 rounded-md" dir="ltr">
                POST /api/merge
              </code>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{t('docs.mergePdfDesc')}</p>
            </div>
            <div className="pb-4">
              <h3 className="font-semibold mb-2">{t('docs.compressPdfTitle')}</h3>
              <code className="block bg-gray-800 dark:bg-black text-white p-3 rounded-md" dir="ltr">
                POST /api/compress
              </code>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{t('docs.compressPdfDesc')}</p>
            </div>
          </div>
        </section>

        {/* SDK Examples */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{t('docs.sdkExamples')}</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">{t('docs.jsExample')}</h3>
              <pre className="bg-gray-800 dark:bg-black text-white p-3 rounded-md overflow-x-auto" dir="ltr">
{`const response = await fetch('/api/convert/word-to-pdf', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'multipart/form-data'
  },
  body: formData
});`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}