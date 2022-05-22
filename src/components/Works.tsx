import { useColorMode } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@heroicons/react/outline';
import renting from '../assets/renting.png';
import pisces from '../assets/pisces.png';
import mypagehome from '../assets/mypagehome.png';
import mypagewawork from '../assets/mypagework.png';
import { useTranslation } from "react-i18next";

const Works = () => {
  
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <div className='m-0 p-0 w-full'>
      <div className='my-10 p-4 max-w-screen-sm m-auto flex flex-col justify-center items-center'>
        <h3 
          className={`text-2xl font-bold underline underline-offset-4 mb-10
            ${colorMode === 'light' ? 'decoration-secondary' : 'decoration-primary'}`}
        >{t('works.works', 'Works')}</h3>
        <section className='flex flex-col justify-center items-start gap-y-1'>
          <h3 className='text-lg font-bold'>{t('works.piscesprotocol', 'Pisces Protocol')}</h3>
          <p className='text-md'>{t('protocol.description', 'A converged trading platform built on the Solana blockchain, integrated with the Jupiter Liquidity aggregation protocol, provides the best exchange path between a wide range of tokens and any pair of tokens')}</p>
          <div className={`flex justify-center items-center`}>
            <h4 className={`font-medium text-xs mr-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>{t('works.website', 'WEBSITE')}</h4>
            <a href='#' className={`hover:underline decoration-1 ${colorMode === 'light' ? 'text-secondary' : 'text-primary'}`}>http://www.piscesprotocol.com</a>
            <ExternalLinkIcon className={`w-4 h-4 ${colorMode === 'light' ? 'text-secondary' : 'text-primary'}`}/>
          </div>           
          <div className={`flex justify-center items-center`}>
            <h4 className={`font-medium text-xs mr-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>{t('works.platform', 'PLATFORM')}</h4>
            <p className='italic tracking-wide text-sm font-medium opacity-90'>Solana, Web3</p>
          </div>
          <div className={`flex justify-center items-center`}>
            <h4 className={`font-medium text-xs mr-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>{t('works.stack', 'STACK')}</h4>
            <p className='italic tracking-wide text-sm font-medium opacity-90'>typescript, javascript, next.js, tailwindcss, web3.js, vercel,</p>
          </div>
          <h4 className={`font-medium text-xs mr-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>{t('works.peek', 'PEEK')}</h4>
          <img src={pisces} alt='pisces' className='p-1 my-1 rounded-xl'/>
          <img src={renting} alt='renting' className='p-1 my-1 rounded-xl'/>
        </section>
        <section className='flex flex-col justify-center items-start gap-y-1'>
          <h3 className='text-lg font-bold tracking-wide'>{t('works.mynativepage', 'My Native Page')}</h3>
          <p>{t('mynativepage.description', 'Personal website for recording and sharing Web3 technologies, trying and verifying new technologies, seeking personal breakthroughs')}</p>
          <div className={`flex justify-center items-center`}>
            <h4 className={`font-medium text-xs mr-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>{t('works.website', 'WEBSITE')}</h4>
            <a href='#' className={`hover:underline decoration-1 ${colorMode === 'light' ? 'text-secondary' : 'text-primary'}`}>http://www.mynativepage.com</a>
            <ExternalLinkIcon className={`w-4 h-4 ${colorMode === 'light' ? 'text-secondary' : 'text-primary'}`}/>
          </div>           
          <div className={`flex justify-center items-center`}>
            <h4 className={`font-medium text-xs mr-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>{t('works.platform', 'PLATFORM')}</h4>
            <p className='italic tracking-wide text-sm font-medium opacity-90'>Web3</p>
          </div>
          <div className={`flex justify-center items-center`}>
            <h4 className={`font-medium text-xs mr-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>{t('works.stack', 'STACK')}</h4>
            <p className='italic tracking-wide text-sm font-medium opacity-90'>typescript, javascript, react.js, tailwindcss, chakra, githubPages, locize</p>
          </div>
          <h4 className={`font-medium text-xs mr-2 rounded-sm p-[2px] ${colorMode === 'light' ? 'bg-secondary' : 'bg-primary'}`}>{t('works.peek', 'PEEK')}</h4>
          <img src={mypagehome} alt='mypagehome' className='p-1 my-1 rounded-xl'/>
          <img src={mypagewawork} alt='mypagewawork' className='p-1 my-1 rounded-xl'/>
        </section>
      </div>
    </div>
  )
}
export default Works;