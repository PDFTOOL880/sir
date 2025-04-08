import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ar: {
    translation: {
      tools: {
        merge: {
          title: 'دمج ملفات PDF',
          description: 'قم بدمج عدة ملفات PDF في ملف واحد'
        },
        split: {
          title: 'تقسيم ملف PDF',
          description: 'قم بتقسيم ملف PDF إلى عدة ملفات'
        },
        compress: {
          title: 'ضغط ملف PDF',
          description: 'قم بتقليل حجم ملف PDF مع الحفاظ على الجودة'
        },
        convert: {
          title: 'تحويل PDF إلى DOCX',
          description: 'قم بتحويل ملفات PDF إلى مستندات Word'
        }
      },
      dropzone: {
        title: 'اسحب وأفلت الملف هنا',
        description: 'أو انقر للاختيار من جهازك'
      },
      fileList: {
        title: 'الملفات المحددة'
      },
      pagination: {
        previous: 'السابق',
        next: 'التالي'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // default language
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
