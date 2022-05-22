import { TFunction, useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='m-0 p-0 w-full'>
      <footer className='max-w-screen-lg m-auto flex justify-center items-center text-sm opacity-60 py-5'>
        &copy; {new Date().getFullYear()} Pengxjwawa. All Rights Reserved.
      </footer>
    </div>
  )
}

export default Footer;