import classes from './ProjectCard.module.scss'
import React from 'react'
import '../../../public/assets/variables.scss'
import Link from "next/link";

const ProjectCard = ({ data, delay }) => {
  return (
    <Link className={classes.ProjectIntro} style={{animationDelay: delay}} href={`portfolio/${data.id}`}>
      <img src={data.material} alt="project"/>
      <div className={classes.InfoOverlay}>
        <h1>{data.title}</h1>
        <p>{data.shortInfo}</p>
        <p className={classes.Tech}>{data.technologies.map((tech) => <span key={tech}>{tech}</span>)}</p>
      </div>
    </Link>
  )
}

export default ProjectCard;