// import useThemes from '../hooks/useThemes';
import { useColorMode } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io5'
import { SiEthereum } from 'react-icons/si';
import { SolanaIcon } from './SolanaIcon';
import { LinkButton } from './LinkButton';
import avatar from '../assets/avatar.jpg';
import i18next from '../assets/i18next.png';
import windowterminal from '../assets/windowterminal.png';
import nodejs from '../assets/nodejs.png';
import javascriptinfo from '../assets/javascriptinfo.png';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';



const Home = () => {
  const { t, i18n } = useTranslation();
  const { colorMode } = useColorMode();
  const location = useLocation();

  return (
    <div className='m-0 p-0 w-full'>
      <div className={`my-10 max-w-screen-sm m-auto flex flex-col justify-center items-center`}>
        <div className={`px-10 py-2 rounded-md text-xl font-medium sm:text-2xl tracking-normal opacity-70 ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
          <h1>{t('home.welcome')}</h1>
        </div>
        <div className='mt-16'>
          <img
            src={avatar}
            alt="avatar online"
            className={`w-24 avatar rounded-full ring-1 ring-offset-2 shadow-2xl
            ${colorMode === 'light' ? 'ring-secondary shadow-secondary' : 'ring-primary shadow-primary'}
            `}
            />
        </div>
        <div className='mt-6 text-lg font-base tracking-normal text-center'>
          <h3 className='pt-1 text-3xl font-bold tracking-wide'>Pengxjwawa</h3>
          <p className='pt-1 text-md font-medium'>{t('home.career')}</p>
        </div>
        <div className='mt-5'>
          <section className='flex justify-center items-center gap-x-4 p-4'>
            <div>
              <span>{t('home.intro1')}</span>
              <a
                href='http://solana.com'
                target='_black'
                className={`underline ${colorMode === 'light' ? 'hover:text-secondary decoration-secondary' : 'hover:text-primary decoration-primary'}`}>
                {t('home.intro2')} 
              </a>
                {t('home.intro3')} 
              <a
                href='./works'
                className={`underline ${colorMode === 'light' ? 'hover:text-secondary decoration-secondary' : 'hover:text-primary decoration-primary'}`}>
                {t('home.intro4')} 
              </a>
                {t('home.intro5')} 
            </div>
            <h3 
              className={`text-2xl font-bold underline underline-offset-4 whitespace-nowrap
                ${colorMode === 'light' ? 'decoration-secondary' : 'decoration-primary'}`}
            >{t('home.work')}</h3>
          </section>
          <section className='flex justify-center items-center'>
            <Link
              to='./works'
              className={`flex text-md font-bold py-3 px-4 rounded-lg justify-center items-center opacity-70 hover:opacity-100
                ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}
            >
              <p>{t('home.myprofolio')}</p>
              <ChevronRightIcon className='ml-1 w-4 h-4'/>
            </Link>
          </section>
          <section className='flex flex-col justify-center items-start p-4 gap-y-1'>
            <h3 
              className={`text-2xl font-bold underline underline-offset-4
                ${colorMode === 'light' ? 'decoration-secondary' : 'decoration-primary'}`}
            >{t('home.untilnow')}</h3>
            <p className=''>{t('home.resume1')}</p>
            <p className=''>{t('home.resume2')}</p>
            <p className=''>{t('home.resume3')}</p>
            <p className=''>{t('home.resume4')}</p>
          </section>
          <section className='flex flex-col justify-center items-start gap-x-4 p-4 gap-y-1'>
            <h3 
              className={`text-2xl font-bold underline underline-offset-4
                ${colorMode === 'light' ? 'decoration-secondary' : 'decoration-primary'}`}
            >{t('home.stack')}</h3>
            <span>
              {t('home.script', 'Script Language:')}
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                Javascript
              </span>
            </span>
            <span>
              {t('home.cssframework', 'Css Framework:')}
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                Tailwindcss
              </span>
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                DaisyUI
              </span>
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                HeadlessUI
              </span>
            </span>
            <span>
              {t('home.static', 'Static Type:')}
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                Typescript
              </span>
            </span>
            <span>
              {t('home.componentlibrary', 'Component Library:')}
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                React.js
              </span>
            </span>
            <span>
              {t('home.Framework', 'Framework:')}
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                Next.js
              </span>
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                Next.js
              </span>
            </span>           
            <span>
              {t('home.blockchain', 'Blockchain:')}
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                Solana
              </span>
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                Ethereum
              </span>
            </span>
            <span>
              {t('home.language', 'Language:')}
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                C
              </span>
              <span className={`font-medium text-sm ml-2 px-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>
                Rust
              </span>
            </span>           
          </section>
          <section className='flex flex-col justify-center items-start gap-x-4 p-4 gap-y-1'>
            <h3 
              className={`text-2xl font-bold underline underline-offset-4
                ${colorMode === 'light' ? 'decoration-secondary' : 'decoration-primary'}`}
            >{t('home.somethinggood')}</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 justify-items-stretch content-center sm:content-between'>
              <LinkButton
                linkHref='https://dev.t o/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb'
                imgSrc={i18next}
                title='i18next'
                description='How to properly internationalize a React application using i18next'
                className='my-3'
              />
              <LinkButton
                linkHref='https://www.the-digital-life.com/awesome-wsl-wsl2-terminal/'
                imgSrc={windowterminal}
                title='oh-my-zsh'
                description='"$ Oh My ZSH!"'
                className='my-3'
              />
              <LinkButton
                linkHref='https://cnodejs.org/topic/5ab3166be7b166bb7b9eccf7'
                imgSrc={nodejs}
                title='nodejs'
                description='How to learn nodejs currently'
                className='my-3'
              />
              <LinkButton
                linkHref='https://javascript.info/'  
                imgSrc={javascriptinfo}
                title='Javascript.info'
                description='the modern Javascript tutorial'
                className='my-3'
              />
            </div>
          </section>
          <section className='px-4 pb-4'>
            <Link
              to='./sundry'
              className={`flex text-md font-medium items-center opacity-70 hover:opacity-100`}
            >
              <p>{t('home.more')}</p>
              <ChevronDownIcon className='ml-1 w-5 h-5'/>
            </Link>
          </section>
          <section className='flex flex-col justify-center items-start gap-x-4 p-4 gap-y-3'>
            <h3 
              className={`text-2xl font-bold underline underline-offset-4
                ${colorMode === 'light' ? 'decoration-secondary' : 'decoration-primary'}`}
            >{t('home.ontheweb3')}</h3> 
            <a
              href='https://app.cyberconnect.me/address/0x1a4de364e26e9a822c42510206dfbdb13e5543ea'
              target='_balck'
              className={`flex justify-center items-center opacity-70 hover:underline cursor:pointer
                ${colorMode === 'light' ? 'hover:text-secondary hover:opacity-100' : 'hover:text-primary hover:opacity-100'}`}
            >
              <SiEthereum className='w-6 h-6 pr-1'/>
              <span>@pengxjwawa.eth</span>
            </a>
            <a
              href='https://sol.cyberconnect.me/profile/3cRRtuWwooQvNZEGpekpsXEhMk5k6xHukr1uxDt4EKws'
              target='_balck'
              className={`flex justify-center items-center opacity-70 hover:underline cursor:pointer
                ${colorMode === 'light' ? 'hover:text-secondary hover:opacity-100' : 'hover:text-primary hover:opacity-100'}`}
            >
              <SolanaIcon className={'w-5 h-5 fill-current'} colorMode={colorMode}/> 
              <span className='pl-1'>@mmetamask.sol</span>
            </a>
            <a
              className={`flex justify-center items-center opacity-70 hover:underline cursor:pointer
                ${colorMode === 'light' ? 'hover:text-secondary hover:opacity-100' : 'hover:text-primary hover:opacity-100'}`}
            >
              <IoLogoGithub className='w-6 h-6 pr-1'/>
              <span>@pengxjwawa</span>
            </a>
            <a
              href='https://twitter.com/pengxjwawa'
              target='_balck'
              className={`flex justify-center items-center opacity-70 hover:underline cursor:pointer
                ${colorMode === 'light' ? 'hover:text-secondary hover:opacity-100' : 'hover:text-primary hover:opacity-100'}`}
            >
              <IoLogoTwitter className='w-6 h-6 pr-1'/>
              <span>@pengxjwawa</span>
            </a>
            </section>
          </div>
        </div>
      </div>
  )
}
export default Home;