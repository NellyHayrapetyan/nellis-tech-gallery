import React, {useEffect, useRef} from 'react';
import Link from 'next/link';
import classes from './ProjectDetails.module.scss';
import { PersonalProjects, ProfessionalProjects } from '../../../public/assets/ProjectsData';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Image from "next/image";
import {Project} from "@/models/Project";
import {GetStaticPaths, GetStaticProps} from "next";

const projects: Project[] = [...ProfessionalProjects, ...PersonalProjects];

const ProjectDetails = ({ data }) => {
  const dataElementsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = useScrollAnimation(dataElementsRef);

      return () => observer.disconnect()
    }
  }, []);


  return (
    <div className={classes.DetailsWrapper}>
      <section className={classes.Introduction}>
        <h1 className={classes.Title}>{data.title}</h1>
        <div className={classes.AboutWrapper}>
          <div className={classes.SubAbout}>
            <section className={classes.Overview}>
              <h2>Overview</h2>
              <article className={classes.About}>{data.about}</article>
            </section>
            <section>
              <h2>Technologies</h2>
              <ul className={classes.Skills}>
                {data.technologies.map((skill, i) => (
                  <li className={classes.Skill} key={i}>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
            {data.webPage && (
              <section>
                <Link href={data.webPage} className={classes.Link} target="_blank">
                  <h2>WebPage</h2>
                </Link>
              </section>
            )}
            {data.gitHub && (
              <section>
                <Link href={data.gitHub} className={classes.Link} target="_blank">
                  <h2>GitHub Link</h2>
                </Link>
              </section>
            )}
          </div>
          <div className={classes.SubAbout}>
            <img className={classes.Material} src={data.material} alt="short intro" />
          </div>
        </div>
      </section>
      {data.descriptions ? (
        <ul className={classes.DescriptionWrapper}>
          {data.descriptions.map((description, i) => (
            <li
              key={i}
              className={classes.Description}
              ref={(el) => (dataElementsRef.current[i] = el)}
            >
              <span className={classes.Point}></span>
              <p>{description.text}</p>
              {description.picture && (
                <img src={description.picture.link} alt={description.picture.alt} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className={classes.Secured}>
          The disclosure of information regarding the project is restricted for security reasons.
          <Image src='/assets/icons/secured.svg' className={classes.Icon} alt="lock icon" width={32} height={32}></Image>
        </p>
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id);
  const data = projects.find((project) => project.id === id);

  return { props: { data } };
};

export default ProjectDetails;
