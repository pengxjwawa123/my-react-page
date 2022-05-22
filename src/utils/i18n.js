import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';
import LastUsed from 'locize-lastused';
import { locizePlugin } from 'locize';

const isProduction = process.env.NODE_ENV === 'production';

const locizeOptions = {
  projectId: process.env.REACT_APP_LOCIZE_PROJECTID,
  apiKey: process.env.REACT_APP_LOCIZE_APIKEY, // The API key should only be used in development, not in production. You should not =expose your apps API key to production!!!
  referenceLng: process.env.REACT_APP_LOCIZE_REFLNG,
  version: process.env.REACT_APP_LOCIZE_VERSION
};

if (!isProduction) {
  // locize-lastused
  // sets a timestamp of last access on every translation segment on locize
  // -> safely remove the ones not being touched for weeks/months
  // https://github.com/locize/locize-lastused
  i18n.use(LastUsed);
}

i18n
  // i18next-locize-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  .use(Backend)
  // locize-editor
  // InContext Editor of locize
  .use(locizePlugin)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: !isProduction,
    fallbackLng: 'en',
    saveMissing: !isProduction, // you should not use saveMissing in production
    // keySeparator: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: locizeOptions,
    locizeLastUsed: locizeOptions,
    react: {
      bindI18n: "languageChanged editorSaved",
    }
  });

export default i18n;

const resources = {
  en: {
    translation: {
      header: {
        home: 'Home',
        works: 'Works',
        sundry: 'Sundry',
        blogs: 'Blogs',
      },
      home: {
        welcome: 'Welcome to my channel!!',
        career: '( Frontend / Develpoer / Blockchain )',
        intro1: 'I am a front-end developer, keen on blockchain front-end development. What am I currently involved in?',
        intro2: ' Blockchain development ',
        intro3: 'Participating in community ecology, learning the front end,',
        intro4: 'Participating in community ecology, learning the front end,',
        intro5: 'Are using the front-end knowledge they have learned to build interesting front-end products',
        work: 'Works',
        myprofolio: 'My Profolio',
        untilnow: 'Until Now',
        resume1: '2018 Completed the undergraduate courses of electrical Engineering in Chongqing Jiaotong University and obtained the bachelor degree',
        resume2: '2018 Work in BYD electric vehicle team',
        resume3: '2021 Joined the wireless charging research team of Chongqing University',
        resume4: '2021~now Dedicated to Web3 field front-end technology',
        stack: 'Stack',
        stack1: 'Script Language: Javascript',
        stack2: 'Css Framework: Tailwindcss',
        stack3: 'Static-type: Typescript',
        stack4: 'Component Gallery: React',
        stack5: 'Framework: Next.js',
        stack6: 'blockchain: Solana',
        stack7: 'Language: Rust',
        somethinggood: 'Something Good',
        more: 'More',
        ontheweb: 'On The Web3',
      }
    }
  },
  cn: {
    translation: {
      header: {
        home: '家',
        works: '作品',
        sundry: '杂项',
        blogs: '博客',
      },
      home: {
        welcome: '欢迎来到我的频道!!',
        career: '( 前端 / 开发者 / 区块链爱好者 )',
        intro1: '我是一名前端开发人员,热衷于区块链前端开发工作,我目前参与了哪些？',
        intro2: '投资区块链',
        intro3: '参与社区生态, 学习前端知识,',
        intro4: '开发前端产品',
        intro5: '正在用学到的前端知识去构建有趣的前端产品',
        work: '工作',
        myprofolio: '我的作品',
        untilnow: '迄今为止',
        resume1: '2018 完成重庆交通大学电气工程学科本科课程，获得学士学位',
        resume2: '2018 就职于BYD（比亚迪）电动汽车团队',
        resume3: '2021 加入重庆大学无线充电科研团队',
        resume4: '2021~至今 投身于Web3领域前端技术',
        stack: '技术栈',
        stack1: '脚本语言：Javascript',
        stack2: 'Css框架：Tailwindcss',
        stack3: '静态类型检查器：Typescript',
        stack4: '组件库：React',
        stack5: '框架：Next.js',
        stack6: '区块链：Solana',
        stack7: '高级语言：Rust',
        somethinggood: '一些好东西',
        more: '更多',
        ontheweb3: '互联网生活'
      }
    }
  }
};
