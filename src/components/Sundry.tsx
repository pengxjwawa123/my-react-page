import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { LinkButton } from "./LinkButton";
import i18next from '../assets/i18next.png';
import windowterminal from '../assets/windowterminal.png';
import nodejs from '../assets/nodejs.png';
import javascriptinfo from '../assets/javascriptinfo.png';
import reactrouter from '../assets/reactrouter.png';
import locize from '../assets/locize.png';


const Sundry = () => {

  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <div className='m-0 p-0 w-full'>
      <div className='my-10 p-4 max-w-screen-sm m-auto flex flex-col justify-center items-center'>
        <h3 
          className={`text-2xl font-bold underline underline-offset-4 mb-10
            ${colorMode === 'light' ? 'decoration-secondary' : 'decoration-primary'}`}
        >{t('sundry.somethinggood', 'Something Good')}</h3>
        <div className='self-center grid grid-cols-1 sm:grid-cols-2 gap-x-6 justify-items-stretch content-center sm:content-between'>
          <LinkButton
            linkHref='https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb'
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
          <LinkButton
            linkHref='https://reactrouter.com/'  
            imgSrc={reactrouter}
            title='React Router'
            description='React Router is a lightweight, fully-featured routing library for the React JavaScript library'
            className='my-3'
          />
          <LinkButton
            linkHref='https://www.locize.app/'  
            imgSrc={locize}
            title='locize'
            description='A modern and affordable localization-management-platform'
            className='my-3'
          />
        </div>
      </div>
    </div>
  )
}
export default Sundry;