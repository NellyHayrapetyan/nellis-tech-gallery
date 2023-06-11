import classes from './ProjectCard.module.scss'
import React, {useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import {Project} from "@/models/Project";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Link className={classes.ProjectIntro} href={`portfolio/${data.id}`}>
      {!isImageLoaded && (
        <img
          className={classes.ProjectImage}
          src="/mobiclocks/tracking-placeholder.jpg"
          alt="placeholder"
        />
      )}
      {isImageLoaded && <Image
        className={classes.ProjectImage}
        src={data.material}
        alt="project"
        onLoad={() => setIsImageLoaded(true)}
      />}
      <div className={classes.InfoOverlay}>
        <h1>{data.title}</h1>
        <p>{data.shortInfo}</p>
        <p className={classes.Tech}>{data.technologies.map((tech) => <span key={tech}>{tech}</span>)}</p>
      </div>
    </Link>
  )
}

export default ProjectCard;