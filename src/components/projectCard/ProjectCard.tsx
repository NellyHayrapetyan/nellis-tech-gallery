import classes from './ProjectCard.module.scss'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Project} from "@/models/Project";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <Link className={classes.ProjectIntro} href={`portfolio/${data.id}`}>
      <Image className={classes.ProjectImage} src={data.material} alt="project" fill priority placeholder="blur"
             blurDataURL="/mobiclocks/tracking-placeholder.jpg"/>
      <div className={classes.InfoOverlay}>
        <h1>{data.title}</h1>
        <p>{data.shortInfo}</p>
        <p className={classes.Tech}>{data.technologies.map((tech) => <span key={tech}>{tech}</span>)}</p>
      </div>
    </Link>
  )
}

export default ProjectCard;