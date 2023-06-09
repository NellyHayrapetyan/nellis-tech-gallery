import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import HomeIcon from '../homeIcon/HomeIcon';
import MenuIcon from '../menuIcon/MenuIcon';
import Backdrop from '../backdrop/Backdrop';

import classes from './Layout.module.scss';

export default function Layout({ children }) {
  const router = useRouter();
  const [showTabs, setShowTabs] = useState(false);

  const getActiveClass = (path) => {
    return router.pathname === path ? classes.Active : '';
  };

  const handleTabsVisibility = () => {
    setShowTabs((prevState) => !prevState);
  };

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <Link href="/"  onClick={handleTabsVisibility}>
            <HomeIcon className={classes.HomeIcon} />
        </Link>

        <div className={classes.Tabs}>
          <Link href="/about"  className={getActiveClass('/about')}>
            About
          </Link>
          <Link href="/portfolio"  className={getActiveClass('/portfolio')}>
           Portfolio
          </Link>
          <Link href="/contact"  className={getActiveClass('/contact')}>
            Contact
          </Link>
        </div>

        <div className={classes.TabDropdown}>
          <MenuIcon className={classes.Menu} onClick={handleTabsVisibility} />
          {showTabs && <Backdrop onClick={handleTabsVisibility} />}
          {showTabs && (
            <div className={classes.MobileTabs}>
              <Link href="/about" className={getActiveClass('/about')} onClick={handleTabsVisibility}>
                  About
              </Link>
              <Link href="/portfolio"  className={getActiveClass('/portfolio')} onClick={handleTabsVisibility}>
                Portfolio
              </Link>
              <Link href="/contact"  className={getActiveClass('/contact')} onClick={handleTabsVisibility}>
                Contact
              </Link>
            </div>
          )}
        </div>
      </header>

      <div className={classes.Content}>
        {children}
      </div>

      <footer className={classes.Footer}>
        <div className={classes.Social}>
          <Link href="https://www.linkedin.com/in/nelli-hayrapetyan/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
            <Image src="/assets/icons/linkedin.svg" alt="Linkedin Icon" className={classes.Icon} width={34} height={34}/>
            LinkedIn
          </Link>
          <Link href="https://github.com/NellyHayrapetyan" target="_blank" rel="noopener noreferrer" className={classes.Link}>
            <Image src="/assets/icons/github.svg" alt="GitHub Icon" className={classes.Icon} width={34} height={34}></Image>
            GitHub
          </Link>
        </div>
        <Link href="/resume.pdf" className={classes.CVWrapper} download="Nelli_Hayrapetyan_CV.pdf">
          <Image src="/assets/icons/download.svg" alt="Download Icon" className={classes.Icon} width={34} height={34}/>
          My Resume
        </Link>
      </footer>
    </div>
  );
}
