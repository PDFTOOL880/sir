'use client';

import { useTranslation } from 'react-i18next';

export default function HelpCenterPage() {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 py-8 mt-16 text-gray-900 dark:text-white" dir="auto">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('help.title')}</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Quick Start Guides */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{t('help.quickStartGuides')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-2">{t('help.fileConversion')}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• {t('tools.convert.description')}</li>
                <li>• {t('tools.merge.description')}</li>
                <li>• {t('tools.compress.description')}</li>
                <li>• {t('tools.split.description')}</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-2">{t('help.fileMerging')}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• {t('tools.merge.description')}</li>
                <li>• {t('faqs.questions.a5')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{t('help.commonIssues')}</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="font-semibold mb-2">{t('help.uploadError')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                • {t('faqs.questions.a4')}<br />
                • {t('faqs.questions.a3')}
              </p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="font-semibold mb-2">{t('help.conversionError')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                • {t('faqs.questions.a1')}<br />
                • {t('faqs.questions.a2')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{t('help.contactSupport')}</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-500 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{t('help.email')}</h3>
                <p className="text-gray-600 dark:text-gray-300">support@pdfprocessor.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-500 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{t('help.liveChat')}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t('help.availableHours')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}