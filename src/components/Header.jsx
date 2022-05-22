import { FC, Fragment, useEffect, useState } from 'react';
import { Link, LinkProps, NavLink, Outlet, useLocation } from 'react-router-dom';
import { MenuAlt2Icon, SunIcon, MoonIcon, LoginIcon } from '@heroicons/react/outline';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { Button, color, UnorderedList, useColorMode } from '@chakra-ui/react';
import ActiveLink from './ActiveLink';
import { useTranslation } from 'react-i18next';

// const lngs = { 
//   en: { nativeName: 'English'},
//   cn: { nativename: 'Chinese'}
// };

const Header = () => {

  const { t, i18n } = useTranslation();


  const [menuOpen, setMenuOpen] = useState(false);
  const [lngs, setLngs] = useState({ en: { nativeName: 'English' }});
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(location)
  }, [location]);

  useEffect(() => {
    i18n.services.backendConnector.backend.getLanguages((err, ret) => {
      if (err) return // TODO: handle err...
      setLngs(ret);
    });
  }, []);

  return (
    <div className='m-0 p-0 w-full relative'>
      <header className='navbar px-4 max-w-screen-lg m-auto'>
        <div className='navbar-start whitespace-nowrap place-content-start'>
          <button onClick={toggleColorMode}>
              {colorMode ==='light' ? (
                <SunIcon className={`w-10 h-10 fill-current text-secondary animate-slowSpin`}/>) : (
                <MoonIcon className={`w-10 h-10 fill-current text-primary animate-pulse`}/>)
              }
          </button>
          <h3 className='pl-1 text-lg font-bold tracking-widest'>Pengxjwawa</h3>
        </div>
        <div className='navbar-center hidden sm:flex text-lg font-medium gap-x-5'>
          <ActiveLink to='/' className={`w-full p-2 rounded-md ${colorMode === 'light' ? 'hover:bg-secondary hover:text-base-100' : 'hover:bg-primary hover:text-neutral'}`}>
            {t('header.home')}
          </ActiveLink>
          <ActiveLink to='./works' className={`w-full p-2 rounded-md ${colorMode === 'light' ? 'hover:bg-secondary hover:text-base-100' : 'hover:bg-primary hover:text-neutral'}`}>
            {t('header.works')}
          </ActiveLink>
          <ActiveLink to='./sundry' className={`w-full p-2 rounded-md ${colorMode === 'light' ? 'hover:bg-secondary hover:text-base-100' : 'hover:bg-primary hover:text-neutral'}`}>
            {t('header.sundry')}
          </ActiveLink>
          <ActiveLink to='blogs' className={`w-full p-2 rounded-lg ${colorMode === 'light' ? 'hover:bg-secondary hover:text-base-100' : 'hover:bg-primary hover:text-neutral'}`}>
            {t('header.blogs')}
          </ActiveLink>
        </div>
        <div className='hidden navbar-end sm:flex'>
          <div
            className={`swap swap-rotate p-2 rounded-full font-bold tracking-wide
            ${colorMode === 'light' ? 'text-secondary bg-base-200' : 'text-primary bg-neutral'}`}
          >
            <button
              type='submit'
              onClick={() => i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'zh' : 'en')}>
                {i18n.resolvedLanguage === 'en' ? 'EN' : 'CN'}
              </button>
          </div>
        </div>
        <div>
        {/* <div>
        {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].name}
            </button>
          ))}
        </div> */}
        </div>
        <div className='navbar-end sm:hidden'>
          <button className={`p-2 rounded-full
                            ${colorMode === 'light' ? 'text-secondary bg-base-100' : 'text-primary bg-neutral'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XIcon className='w-6 h-6 fill-current '/>) : (
              <MenuAlt1Icon className='w-6 h-6 fill-current '/>)
            }
          </button>
          {menuOpen && (
            <Transition
            show={menuOpen}
            enter='transition ease-out duration-200'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-200'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <div className='sm:relative text-ms font-medium tracking-wide'>
              <div className={`absolute top-0 min-w-full min-h-screen sm:min-h-max sm:top-8 right-0 bg-base-100 rounded-lg border-2 
                w-64 z-50 p-5 flex flex-col items-center text-center opacity-100 gap-y-1
                ${colorMode === 'light' ? 'border-secondary bg-[#ffffff]' : 'border-primary bg-[#1a202c]'}`} 
              >
                <button
                  className={`self-end sm:hidden mb-3 ${colorMode ==='light' ? 'hover:text-secondary' : 'hover:text-primary'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <Menu />
                  <XIcon className='w-6 h-6'/>
                </button>
                <Link
                  to='/'
                  className={`w-full p-1 rounded-md border ${colorMode === 'light' ? 'hover:bg-secondary hover:text-base-100 border-secondary' : 'hover:bg-primary hover:text-neutral border-primary'}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                  >
                  {t('header.home')}
                </Link>
                <Link
                  to='/works'
                  className={`w-full p-1 rounded-md border ${colorMode === 'light' ? 'hover:bg-secondary hover:text-base-100 border-secondary' : 'hover:bg-primary hover:text-neutral border-primary'}`}
                  onClick={(event) => setMenuOpen(!menuOpen)}
                  >
                  {t('header.works')}
                </Link>
                <Link
                  to='/sundry'
                  className={`w-full p-1 rounded-md border ${colorMode === 'light' ? 'hover:bg-secondary hover:text-base-100 border-secondary' : 'hover:bg-primary hover:text-neutral border-primary'}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                  >
                  {t('header.sundry')}
                </Link>
                <Link
                  to='/blogs'
                  className={`w-full p-1 rounded-md border ${colorMode === 'light' ? 'hover:bg-secondary hover:text-base-100 border-secondary' : 'hover:bg-primary hover:text-neutral border-primary'}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                  >
                  {t('header.blogs')}
                </Link>
                <div className={`rounded-md text-xs py-2 flex flex-row items-center gap-x-2 justify-center w-full`}>
                  <button 
                    onClick={() => i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'zh' : 'en')}
                    className={`p-2 border rounded-md 
                    ${colorMode === 'light' ? 
                      (`${i18n.resolvedLanguage === 'en' ? 'border-secondary bg-secondary' : 'border-secondary'}`) : 
                      (`${i18n.resolvedLanguage === 'en' ? 'border-primary bg-primary' : 'border-primary'}`)
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'zh' : 'en')}
                    className={`p-2 border rounded-md 
                    ${colorMode === 'light' ? 
                      (`${i18n.resolvedLanguage === 'zh' ? 'border-primary bg-primary' : 'border-primary'}`) : 
                      (`${i18n.resolvedLanguage === 'zh' ? 'border-secondary bg-secondary' : 'border-secondary'}`)
                    }`}
                  >
                    CN
                  </button>
                </div>
              </div>
            </div>
          </Transition>
          )}
        </div>
      </header>
      <hr />
    </div>
  )
}

export default Header;