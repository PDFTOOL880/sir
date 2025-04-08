'use client';

import { useTranslation } from 'react-i18next';
import FAQAccordion from './FAQAccordion';

export default function FAQPage() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faqs.questions.q1'),
      answer: t('faqs.questions.a1')
    },
    {
      question: t('faqs.questions.q2'),
      answer: t('faqs.questions.a2')
    },
    {
      question: t('faqs.questions.q3'),
      answer: t('faqs.questions.a3')
    },
    {
      question: t('faqs.questions.q4'),
      answer: t('faqs.questions.a4')
    },
    {
      question: t('faqs.questions.q5'),
      answer: t('faqs.questions.a5')
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('faqs.title')}</h1>
      <div className="max-w-3xl mx-auto">
        <FAQAccordion faqs={faqs} />
      </div>
    </main>
  );
}