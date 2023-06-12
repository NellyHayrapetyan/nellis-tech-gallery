import classes from './Welcome.module.scss'
import ArrowIcon from '../components/arrowIcon/ArrowIcon'
import Link from "next/link";
import {WelcomeMessage} from "../../public/assets/ExperienceData";
import Image from "next/image";
import React from "react";

function Welcome() {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Content}>
        <div className={classes.IntroWrapper}>
          <Image className={classes.ProfilePicture} src="/portrait.jpg" alt="my portrait" fill={true} priority/>
          <article className={classes.Description}>{WelcomeMessage}</article>
        </div>
        <div  className={classes.Navigation}>
          <Link href="about" className={classes.Link}>
            <div className={classes.NavText}>
              <span>See More About Me</span>
              <ArrowIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
