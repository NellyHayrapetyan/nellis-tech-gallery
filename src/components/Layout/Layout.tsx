import Link from 'next/link';
import { useRouter } from 'next/router';
import {ReactNode, useEffect, useState} from 'react';
import Image from 'next/image';
import HomeIcon from '../homeIcon/HomeIcon';
import MenuIcon from '../menuIcon/MenuIcon';
import Backdrop from '../backdrop/Backdrop';

import classes from './Layout.module.scss';
import Head from "next/head";


interface LayoutProps {
  children: ReactNode;
}

const title =  `| Nelli's Tech Gallery`

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [showTabs, setShowTabs] = useState(false);
  const [pageTitle, setPageTitle] = useState(`Home ${title}`);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const getActiveClass = (path: string) => {
    return router.pathname === path ? classes.Active : '';
  };

  const handleTabChange = (currentPage: string) => {
    setPageTitle(`${currentPage} ${title}`)
  }

  const handleTabsVisibility = (page: string | null = null) => {
    if (page) {
      handleTabChange(page);
    }
    setShowTabs((prevState) => !prevState);
  };

  return (
    <div className={classes.App}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <header className={classes.AppHeader}>
        <Link href="/" onClick={() => {setShowTabs(false); handleTabChange('Home')}}>
          <HomeIcon/>
        </Link>

        <div className={classes.Tabs}>
          <Link href="/about"  className={getActiveClass('/about')} onClick={() => handleTabChange('About')}>
            About
          </Link>
          <Link href="/portfolio"  className={getActiveClass('/portfolio')} onClick={() => handleTabChange('Projects')}>
           Portfolio
          </Link>
          <Link href="/contact"  className={getActiveClass('/contact')} onClick={() => handleTabChange('Contact')}>
            Contact
          </Link>
        </div>

        <div className={classes.TabDropdown}>
          <MenuIcon onClick={() => handleTabsVisibility(null)} />
          {showTabs && <Backdrop onClick={() => handleTabsVisibility(null)} />}
          {showTabs && (
            <div className={classes.MobileTabs}>
              <Link href="/about" className={getActiveClass('/about')} onClick={() => handleTabsVisibility('About')}>
                  About
              </Link>
              <Link href="/portfolio"  className={getActiveClass('/portfolio')} onClick={() => handleTabsVisibility('Projects')}>
                Portfolio
              </Link>
              <Link href="/contact"  className={getActiveClass('/contact')} onClick={() => handleTabsVisibility('Contact')}>
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
            <span>LinkedIn</span>
          </Link>
          <Link href="https://github.com/NellyHayrapetyan" target="_blank" rel="noopener noreferrer" className={classes.Link}>
            <Image src="/assets/icons/github.svg" alt="GitHub Icon" className={classes.Icon} width={34} height={34}></Image>
            <span>GitHub</span>
          </Link>
        </div>
        <Link href="/resume.pdf" className={classes.CVWrapper} download="Nelli_Hayrapetyan_CV.pdf" target="_blank">
          <Image src="/assets/icons/download.svg" alt="Download Icon" className={classes.Icon} width={34} height={34}/>
          My Resume
        </Link>
      </footer>
    </div>
  );
}
