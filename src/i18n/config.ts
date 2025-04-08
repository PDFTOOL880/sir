import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  common: {
    tools: 'Tools',
    pricing: 'Pricing',
    about: 'About',
    dashboard: 'Dashboard',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signOut: 'Sign Out',
    comingSoon: 'Coming Soon',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved'
  },
  home: {
    title: 'Transform Your PDFs with Ease',
    subtitle: 'Professional PDF tools for everyone. Convert, compress, merge and more.',
    aboutSection: 'Professional PDF processing tools to help you work more efficiently.',
    features: 'Features',
    getStarted: 'Get Started'
  },
  tools: {
    pageTitle: 'PDF Tools',
    pageDescription: 'Professional tools to work with your PDF files',
    active: 'Active',
    tryNow: 'Try Now',
    notifyMe: 'Notify me when available',
    unlockPremium: 'Unlock Premium Features',
    premiumDescription: 'Get access to all tools and advanced features with our premium plans',
    viewPlans: 'View Plans',
    merge: {
      title: 'Merge PDFs',
      description: 'Combine multiple PDF files into a single document'
    },
    split: {
      title: 'Split PDF',
      description: 'Split your PDF into separate documents'
    },
    compress: {
      title: 'Compress PDF',
      description: 'Reduce PDF file size while maintaining quality'
    },
    convert: {
      title: 'Convert PDF',
      description: 'Convert between PDF and other formats'
    }
  },
  docs: {
    title: 'Technical Documentation',
    gettingStarted: 'Getting Started',
    gettingStartedDesc: 'Welcome to PDF Processor technical documentation. This guide will help you understand how to use the API and processing tools.',
    prerequisites: 'Prerequisites',
    apiDocumentation: 'API Documentation',
    wordToPdfTitle: 'Word to PDF Conversion',
    wordToPdfDesc: 'Convert Word files to PDF while maintaining original formatting.',
    mergePdfTitle: 'Merge PDFs',
    mergePdfDesc: 'Merge multiple PDF files into one document.',
    compressPdfTitle: 'Compress PDF',
    compressPdfDesc: 'Compress PDF file size while maintaining quality.',
    sdkExamples: 'SDK Examples',
    jsExample: 'JavaScript Example'
  },
  help: {
    title: 'Help Center',
    quickStartGuides: 'Quick Start Guides',
    fileConversion: 'File Conversion',
    fileMerging: 'File Merging',
    commonIssues: 'Common Issues',
    uploadError: 'Upload Error',
    conversionError: 'Conversion Issues',
    contactSupport: 'Contact Support',
    email: 'Email',
    liveChat: 'Live Chat',
    availableHours: 'Available 9 AM - 5 PM'
  },
  faqs: {
    title: 'Frequently Asked Questions',
    questions: {
      q1: 'How do I convert Word to PDF?',
      a1: 'Visit our "Word to PDF" tool page, then drag and drop your file or click to choose a file. The conversion will start automatically and your file will be ready to download.',
      q2: 'Is the service free?',
      a2: 'Yes, the basic service is free. We also offer a premium plan for users who need advanced features and larger file processing.',
      q3: 'Are my files secure?',
      a3: 'Yes, we take data security seriously. All files are encrypted during processing and automatically deleted after processing is complete.',
      q4: 'What is the maximum file size?',
      a4: 'The maximum file size for the free plan is 10MB. For larger files, you can upgrade to the premium plan.',
      q5: 'How do I merge multiple PDFs?',
      a5: 'Go to the "Merge PDF" tool, select the files you want to merge in your desired order, then click "Merge Files". A unified PDF file will be created for you to download.'
    }
  },
  subscription: {
    choosePlan: 'Choose Your Plan',
    choosePlanDescription: 'Select the plan that best fits your needs',
    monthly: 'Monthly',
    yearly: 'Yearly',
    mo: 'mo',
    yr: 'yr',
    free: 'Free',
    premium: 'Premium',
    enterprise: 'Enterprise',
    popular: 'Most Popular',
    startFree: 'Start Free',
    subscribe: 'Subscribe Now',
    contactUs: 'Contact Us'
  },
  about: {
    title: 'About PDF Processor',
    description: 'Professional PDF processing tools to help you work more efficiently',
    trust: 'Trusted by Users Worldwide',
    trustDescription: 'Join thousands of satisfied users who trust our tools for their PDF needs',
    tools: 'Our Tools',
    monthlyUsers: 'Monthly Users',
    filesProcessed: 'Files Processed',
    uptime: 'Uptime'
  }
};

// Arabic translations
const arTranslations = {
  common: {
    tools: 'الأدوات',
    pricing: 'الأسعار',
    about: 'عن الموقع',
    dashboard: 'لوحة التحكم',
    signIn: 'تسجيل الدخول',
    signUp: 'إنشاء حساب',
    signOut: 'تسجيل الخروج',
    comingSoon: 'قريباً',
    followUs: 'تابعنا',
    allRightsReserved: 'جميع الحقوق محفوظة'
  },
  home: {
    title: 'حول ملفات PDF بسهولة',
    subtitle: 'أدوات PDF احترافية للجميع. حول، اضغط، ادمج والمزيد.',
    aboutSection: 'أدوات معالجة PDF احترافية لمساعدتك على العمل بكفاءة أكبر.',
    features: 'المميزات',
    getStarted: 'ابدأ الآن'
  },
  tools: {
    pageTitle: 'أدوات PDF',
    pageDescription: 'أدوات احترافية للعمل مع ملفات PDF',
    active: 'متاح',
    tryNow: 'جرب الآن',
    notifyMe: 'أخبرني عند التوفر',
    unlockPremium: 'احصل على المميزات المتقدمة',
    premiumDescription: 'احصل على وصول لجميع الأدوات والميزات المتقدمة مع خططنا المميزة',
    viewPlans: 'عرض الخطط',
    merge: {
      title: 'دمج ملفات PDF',
      description: 'دمج عدة ملفات PDF في مستند واحد'
    },
    split: {
      title: 'تقسيم PDF',
      description: 'تقسيم ملف PDF إلى مستندات منفصلة'
    },
    compress: {
      title: 'ضغط PDF',
      description: 'تقليل حجم ملف PDF مع الحفاظ على الجودة'
    },
    convert: {
      title: 'تحويل PDF',
      description: 'التحويل بين PDF والتنسيقات الأخرى'
    }
  },
  docs: {
    title: 'الدليل التقني',
    gettingStarted: 'البداية السريعة',
    gettingStartedDesc: 'مرحباً بك في الدليل التقني لخدمات معالجة ملفات PDF. هذا الدليل سيساعدك في فهم كيفية استخدام واجهة برمجة التطبيقات (API) وأدوات المعالجة المختلفة.',
    prerequisites: 'المتطلبات الأساسية',
    apiDocumentation: 'توثيق API',
    wordToPdfTitle: 'تحويل Word إلى PDF',
    wordToPdfDesc: 'تحويل ملفات Word إلى PDF مع الحفاظ على التنسيق الأصلي.',
    mergePdfTitle: 'دمج ملفات PDF',
    mergePdfDesc: 'دمج عدة ملفات PDF في ملف واحد.',
    compressPdfTitle: 'ضغط PDF',
    compressPdfDesc: 'ضغط حجم ملفات PDF مع الحفاظ على الجودة.',
    sdkExamples: 'أمثلة على الاستخدام',
    jsExample: 'مثال باستخدام JavaScript'
  },
  help: {
    title: 'مركز المساعدة',
    quickStartGuides: 'أدلة سريعة',
    fileConversion: 'تحويل الملفات',
    fileMerging: 'دمج الملفات',
    commonIssues: 'المشاكل الشائعة',
    uploadError: 'خطأ في التحميل',
    conversionError: 'مشاكل في التحويل',
    contactSupport: 'تواصل مع الدعم',
    email: 'البريد الإلكتروني',
    liveChat: 'الدردشة المباشرة',
    availableHours: 'متوفر من 9 صباحاً - 5 مساءً'
  },
  faqs: {
    title: 'الأسئلة الشائعة',
    questions: {
      q1: 'كيف يمكنني تحويل ملف Word إلى PDF؟',
      a1: 'قم بزيارة صفحة "تحويل Word إلى PDF" في موقعنا، ثم اسحب وأفلت الملف أو اضغط لاختيار الملف. سيتم تحويل الملف تلقائياً وسيكون جاهزاً للتحميل.',
      q2: 'هل الخدمة مجانية؟',
      a2: 'نعم، الخدمة الأساسية مجانية. نقدم أيضاً خطة مدفوعة للمستخدمين الذين يحتاجون إلى ميزات متقدمة ومعالجة ملفات أكبر.',
      q3: 'هل ملفاتي آمنة؟',
      a3: 'نعم، نحن نأخذ أمن البيانات بجدية. يتم تشفير جميع الملفات أثناء المعالجة ويتم حذفها تلقائياً بعد الانتهاء من المعالجة.',
      q4: 'ما هو الحد الأقصى لحجم الملف؟',
      a4: 'الحد الأقصى لحجم الملف في الخطة المجانية هو 10 ميجابايت. للملفات الأكبر، يمكنك الترقية إلى الخطة المدفوعة.',
      q5: 'كيف يمكنني دمج عدة ملفات PDF؟',
      a5: 'انتقل إلى أداة "دمج PDF"، حدد الملفات التي تريد دمجها بالترتيب المطلوب، ثم اضغط على "دمج الملفات". سيتم إنشاء ملف PDF موحد يمكنك تحميله.'
    }
  },
  subscription: {
    choosePlan: 'اختر خطتك',
    choosePlanDescription: 'اختر الخطة التي تناسب احتياجاتك',
    monthly: 'شهري',
    yearly: 'سنوي',
    mo: 'شهر',
    yr: 'سنة',
    free: 'مجاني',
    premium: 'بريميوم',
    enterprise: 'للشركات',
    popular: 'الأكثر طلباً',
    startFree: 'ابدأ مجاناً',
    subscribe: 'اشترك الآن',
    contactUs: 'اتصل بنا'
  },
  about: {
    title: 'عن موقعنا',
    description: 'أدوات معالجة PDF احترافية لمساعدتك على العمل بكفاءة أكبر',
    trust: 'موثوق به عالمياً',
    trustDescription: 'انضم إلى آلاف المستخدمين الراضين الذين يثقون بأدواتنا لاحتياجات PDF',
    tools: 'أدواتنا',
    monthlyUsers: 'مستخدم شهرياً',
    filesProcessed: 'ملف تمت معالجته',
    uptime: 'وقت التشغيل'
  }
};

// Hindi translations
const hiTranslations = {
  common: {
    tools: 'टूल्स',
    pricing: 'कीमत',
    about: 'हमारे बारे में',
    dashboard: 'डैशबोर्ड',
    signIn: 'साइन इन',
    signUp: 'साइन अप',
    signOut: 'साइन आउट',
    comingSoon: 'जल्द आ रहा है',
    followUs: 'हमें फॉलो करें',
    allRightsReserved: 'सर्वाधिकार सुरक्षित'
  },
  home: {
    title: 'आसानी से PDF फ़ाइलें बदलें',
    subtitle: 'सभी के लिए पेशेवर PDF टूल्स। कन्वर्ट, कंप्रेस, मर्ज और बहुत कुछ।',
    aboutSection: 'अधिक कुशलता से काम करने में आपकी मदद के लिए पेशेवर PDF प्रोसेसिंग टूल्स।',
    features: 'विशेषताएं',
    getStarted: 'शुरू करें'
  },
  tools: {
    pageTitle: 'PDF टूल्स',
    pageDescription: 'PDF फ़ाइलों के साथ काम करने के लिए पेशेवर टूल्स',
    active: 'सक्रिय',
    tryNow: 'अभी आज़माएं',
    notifyMe: 'उपलब्ध होने पर सूचित करें',
    unlockPremium: 'प्रीमियम सुविधाएं खोलें',
    premiumDescription: 'हमारी प्रीमियम योजनाओं के साथ सभी टूल्स और उन्नत सुविधाओं तक पहुंच प्राप्त करें',
    viewPlans: 'योजनाएं देखें',
    merge: {
      title: 'PDF मर्ज',
      description: 'कई PDF फ़ाइलों को एक दस्तावेज़ में मिलाएं'
    },
    split: {
      title: 'PDF विभाजन',
      description: 'PDF को अलग-अलग दस्तावेज़ों में विभाजित करें'
    },
    compress: {
      title: 'PDF कंप्रेस',
      description: 'गुणवत्ता बनाए रखते हुए PDF फ़ाइल का आकार कम करें'
    },
    convert: {
      title: 'PDF कन्वर्ट',
      description: 'PDF और अन्य फॉर्मेट के बीच कन्वर्ट करें'
    }
  },
  docs: {
    title: 'तकनीकी दस्तावेज़ीकरण',
    gettingStarted: 'शुरुआत करें',
    gettingStartedDesc: 'PDF प्रोसेसर तकनीकी दस्तावेज़ीकरण में आपका स्वागत है। यह गाइड आपको API और प्रोसेसिंग टूल्स का उपयोग करने में मदद करेगी।',
    prerequisites: 'आवश्यक शर्तें',
    apiDocumentation: 'API दस्तावेज़ीकरण',
    wordToPdfTitle: 'Word से PDF कन्वर्जन',
    wordToPdfDesc: 'मूल फ़ॉर्मेटिंग को बनाए रखते हुए Word फ़ाइलों को PDF में बदलें।',
    mergePdfTitle: 'PDF मर्ज',
    mergePdfDesc: 'कई PDF फ़ाइलों को एक दस्तावेज़ में मिलाएं।',
    compressPdfTitle: 'PDF कंप्रेस',
    compressPdfDesc: 'गुणवत्ता बनाए रखते हुए PDF फ़ाइल का आकार कम करें।',
    sdkExamples: 'SDK उदाहरण',
    jsExample: 'JavaScript उदाहरण'
  },
  help: {
    title: 'सहायता केंद्र',
    quickStartGuides: 'त्वरित प्रारंभ गाइड',
    fileConversion: 'फ़ाइल कन्वर्जन',
    fileMerging: 'फ़ाइल मर्जिंग',
    commonIssues: 'सामान्य समस्याएं',
    uploadError: 'अपलोड त्रुटि',
    conversionError: 'कन्वर्जन समस्याएं',
    contactSupport: 'सहायता से संपर्क करें',
    email: 'ईमेल',
    liveChat: 'लाइव चैट',
    availableHours: 'सुबह 9 बजे - शाम 5 बजे तक उपलब्ध'
  },
  faqs: {
    title: 'अक्सर पूछे जाने वाले प्रश्न',
    questions: {
      q1: 'Word को PDF में कैसे कन्वर्ट करें?',
      a1: 'हमारे "Word से PDF" टूल पेज पर जाएं, फिर अपनी फ़ाइल को खींचकर छोड़ें या फ़ाइल चुनने के लिए क्लिक करें। कन्वर्जन स्वचालित रूप से शुरू हो जाएगा और आपकी फ़ाइल डाउनलोड के लिए तैयार हो जाएगी।',
      q2: 'क्या सेवा मुफ्त है?',
      a2: 'हाँ, बेसिक सेवा मुफ्त है। हम उन उपयोगकर्ताओं के लिए प्रीमियम प्लान भी प्रदान करते हैं जिन्हें उन्नत सुविधाओं और बड़ी फ़ाइल प्रोसेसिंग की आवश्यकता होती है।',
      q3: 'क्या मेरी फ़ाइलें सुरक्षित हैं?',
      a3: 'हाँ, हम डेटा सुरक्षा को गंभीरता से लेते हैं। सभी फ़ाइलें प्रोसेसिंग के दौरान एन्क्रिप्टेड होती हैं और प्रोसेसिंग पूरी होने के बाद स्वचालित रूप से हटा दी जाती हैं।',
      q4: 'अधिकतम फ़ाइल साइज क्या है?',
      a4: 'फ्री प्लान के लिए अधिकतम फ़ाइल साइज 10MB है। बड़ी फ़ाइलों के लिए, आप प्रीमियम प्लान में अपग्रेड कर सकते हैं।',
      q5: 'कई PDF को कैसे मर्ज करें?',
      a5: '"PDF मर्ज" टूल पर जाएं, अपनी इच्छित क्रम में मर्ज करने के लिए फ़ाइलें चुनें, फिर "फ़ाइलें मर्ज करें" पर क्लिक करें। एक एकीकृत PDF फ़ाइल बनाई जाएगी जिसे आप डाउनलोड कर सकते हैं।'
    }
  },
  subscription: {
    choosePlan: 'अपनी योजना चुनें',
    choosePlanDescription: 'अपनी जरूरतों के अनुसार सबसे उपयुक्त योजना चुनें',
    monthly: 'मासिक',
    yearly: 'वार्षिक',
    mo: 'माह',
    yr: 'वर्ष',
    free: 'मुफ्त',
    premium: 'प्रीमियम',
    enterprise: 'एंटरप्राइज',
    popular: 'सबसे लोकप्रिय',
    startFree: 'मुफ्त शुरू करें',
    subscribe: 'अभी सब्सक्राइब करें',
    contactUs: 'संपर्क करें'
  },
  about: {
    title: 'PDF प्रोसेसर के बारे में',
    description: 'अधिक कुशलता से काम करने में आपकी मदद के लिए पेशेवर PDF प्रोसेसिंग टूल्स',
    trust: 'दुनिया भर में विश्वसनीय',
    trustDescription: 'हजारों संतुष्ट उपयोगकर्ताओं से जुड़ें जो अपनी PDF जरूरतों के लिए हमारे टूल्स पर भरोसा करते हैं',
    tools: 'हमारे टूल्स',
    monthlyUsers: 'मासिक उपयोगकर्ता',
    filesProcessed: 'प्रोसेस की गई फ़ाइलें',
    uptime: 'अपटाइम'
  }
};

// Chinese translations
const zhTranslations = {
  common: {
    tools: '工具',
    pricing: '价格',
    about: '关于',
    dashboard: '控制台',
    signIn: '登录',
    signUp: '注册',
    signOut: '退出',
    comingSoon: '即将推出',
    followUs: '关注我们',
    allRightsReserved: '版权所有'
  },
  home: {
    title: '轻松转换PDF文件',
    subtitle: '适合所有人的专业PDF工具。转换、压缩、合并等。',
    aboutSection: '专业的PDF处理工具，帮助您提高工作效率。',
    features: '功能特点',
    getStarted: '立即开始'
  },
  tools: {
    pageTitle: 'PDF工具',
    pageDescription: '专业的PDF文件处理工具',
    active: '可用',
    tryNow: '立即尝试',
    notifyMe: '开放时通知我',
    unlockPremium: '解锁高级功能',
    premiumDescription: '通过我们的高级计划获取所有工具和高级功能',
    viewPlans: '查看计划',
    merge: {
      title: '合并PDF',
      description: '将多个PDF文件合并为一个文档'
    },
    split: {
      title: '拆分PDF',
      description: '将PDF拆分为多个文档'
    },
    compress: {
      title: '压缩PDF',
      description: '在保持质量的同时减小PDF文件大小'
    },
    convert: {
      title: '转换PDF',
      description: 'PDF与其他格式之间的转换'
    }
  },
  docs: {
    title: '技术文档',
    gettingStarted: '入门指南',
    gettingStartedDesc: '欢迎使用PDF处理器技术文档。本指南将帮助您了解如何使用API和处理工具。',
    prerequisites: '前提条件',
    apiDocumentation: 'API文档',
    wordToPdfTitle: 'Word转PDF',
    wordToPdfDesc: '将Word文件转换为PDF，同时保持原始格式。',
    mergePdfTitle: '合并PDF',
    mergePdfDesc: '将多个PDF文件合并为一个文档。',
    compressPdfTitle: '压缩PDF',
    compressPdfDesc: '在保持质量的同时减小PDF文件大小。',
    sdkExamples: 'SDK示例',
    jsExample: 'JavaScript示例'
  },
  help: {
    title: '帮助中心',
    quickStartGuides: '快速入门指南',
    fileConversion: '文件转换',
    fileMerging: '文件合并',
    commonIssues: '常见问题',
    uploadError: '上传错误',
    conversionError: '转换问题',
    contactSupport: '联系支持',
    email: '电子邮件',
    liveChat: '在线聊天',
    availableHours: '上午9点 - 下午5点开放'
  },
  faqs: {
    title: '常见问题',
    questions: {
      q1: '如何将Word转换为PDF？',
      a1: '访问我们的"Word转PDF"工具页面，然后拖放文件或点击选择文件。转换将自动开始，您的文件将准备好下载。',
      q2: '服务是免费的吗？',
      a2: '是的，基础服务是免费的。我们还为需要高级功能和更大文件处理的用户提供付费计划。',
      q3: '我的文件安全吗？',
      a3: '是的，我们严格对待数据安全。所有文件在处理过程中都会加密，处理完成后会自动删除。',
      q4: '最大文件大小是多少？',
      a4: '免费计划的最大文件大小为10MB。对于更大的文件，您可以升级到付费计划。',
      q5: '如何合并多个PDF？',
      a5: '转到"合并PDF"工具，按所需顺序选择要合并的文件，然后点击"合并文件"。将为您创建一个统一的PDF文件供下载。'
    }
  },
  subscription: {
    choosePlan: '选择您的计划',
    choosePlanDescription: '选择最适合您需求的计划',
    monthly: '月付',
    yearly: '年付',
    mo: '月',
    yr: '年',
    free: '免费',
    premium: '高级',
    enterprise: '企业版',
    popular: '最受欢迎',
    startFree: '免费开始',
    subscribe: '立即订阅',
    contactUs: '联系我们'
  },
  about: {
    title: '关于PDF处理器',
    description: '专业的PDF处理工具，帮助您提高工作效率',
    trust: '全球用户信赖',
    trustDescription: '加入数千名信任我们工具的满意用户',
    tools: '我们的工具',
    monthlyUsers: '月活用户',
    filesProcessed: '已处理文件',
    uptime: '运行时间'
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations },
      hi: { translation: hiTranslations },
      zh: { translation: zhTranslations }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
