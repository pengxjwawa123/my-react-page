import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <div className='m-0 p-0 w-full'>
      <div className='my-10 p-4 max-w-screen-sm m-auto flex flex-col justify-center items-center'>
        <h3 
          className={`text-2xl font-bold underline underline-offset-4 mb-10
            ${colorMode === 'light' ? 'decoration-secondary' : 'decoration-primary'}`}
        >{t('blogs.blogs', 'Blog')}</h3>
        <div className='self-center grid grid-cols-1 sm:grid-cols-1 gap-x-6 justify-items-stretch content-center sm:content-between'>
          <p className='text-center'>Loading Loading</p>
        </div>
      </div>
    </div>
  )
}
export default Blogs;