import classes from './Welcome.module.scss'
import ArrowIcon from '../components/arrowIcon/ArrowIcon'
import Link from "next/link";
import {WelcomeMessage} from "../../public/assets/ExperienceData";

function Welcome() {

  const handleCopy = async (e) => {
    await navigator.clipboard.writeText(e.target.textContent);
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.ImageWrapper}>
        <img className={classes.ProfilePicture} src="/portrait-photo.jpg" alt="my portrait"/>
      </div>
      <article className={classes.Description}>{WelcomeMessage}</article>
      <div  className={classes.Navigation}>
        <Link href="about" className={classes.Link}>
          <div className={classes.NavText}>
            <span>See More About Me</span>
            <ArrowIcon />
          </div>
        </Link>
      </div>
      <p onClick={handleCopy}>Contact me by: <span className={classes.Contact}><b>hayrapetyannelly1@gmail.com</b></span></p>
    </div>
  );
}

export default Welcome;
