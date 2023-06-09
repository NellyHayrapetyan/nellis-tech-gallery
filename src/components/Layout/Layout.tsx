import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import HomeIcon from '../homeIcon/HomeIcon';
import MenuIcon from '../menuIcon/MenuIcon';
import Backdrop from '../backdrop/Backdrop';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  const router = useRouter();
  const [showTabs, setShowTabs] = useState(false);

  const getActiveClass = (path) => {
    return router.pathname === path ? styles.Active : '';
  };

  const handleTabsVisibility = () => {
    setShowTabs((prevState) => !prevState);
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Link href="/"  onClick={handleTabsVisibility}>
            <HomeIcon className={styles.HomeIcon} />
        </Link>

        <div className={styles.Tabs}>
          <Link href="/about"  className={getActiveClass('/about')}>
            About
          </Link>
          <Link href="/portfolio"  className={getActiveClass('/portfolio')}>
           Portfolio
          </Link>
        </div>

        <div className={styles.TabDropdown}>
          <MenuIcon className={styles.Menu} onClick={handleTabsVisibility} />
          {showTabs && <Backdrop onClick={handleTabsVisibility} />}
          {showTabs && (
            <div className={styles.MobileTabs}>
              <Link href="/about" className={getActiveClass('/about')} onClick={handleTabsVisibility}>
                  About
              </Link>
              <Link href="/portfolio"  className={getActiveClass('/portfolio')} onClick={handleTabsVisibility}>
                  Portfolio
              </Link>
            </div>
          )}
        </div>
      </header>

      <div className={styles.Content}>
        {children}
      </div>

      <footer className={styles.Footer}>
        <div className={styles.Social}>
          <a href="https://www.linkedin.com/in/nelli-hayrapetyan/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/linkedin.svg" alt="Linkedin Icon" className={styles.Icon} width={34} height={34}/>
            LinkedIn
          </a>
          <a href="https://github.com/NellyHayrapetyan" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/github.svg" alt="GitHub Icon" className={styles.Icon} width={34} height={34}/>
            GitHub
          </a>
        </div>
        <a href="/resume.pdf" className={styles.CVWrapper} download="Nelli_Hayrapetyan_CV.pdf">
          <Image src="/assets/icons/download.svg" alt="Download Icon" className={styles.Icon} width={34} height={34}/>
          My Resume
        </a>
      </footer>
    </div>
  );
}
