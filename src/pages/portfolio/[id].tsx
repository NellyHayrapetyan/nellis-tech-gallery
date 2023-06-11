import Link from 'next/link';
import classes from './ProjectDetails.module.scss';
import { PersonalProjects, ProfessionalProjects } from '../../../public/assets/ProjectsData';
import Image from "next/image";
import {Project} from "@/models/Project";
import {GetStaticPaths, GetStaticProps} from "next";
import ScrollLineUp from "@/components/scrollLineUp/ScrollLineUp";
import Skills from "@/components/skills/Skills";

const projects: Project[] = [...ProfessionalProjects, ...PersonalProjects];

const ProjectDetails = ({ data }: { data: Project }) => {
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
              <Skills data={data.technologies}></Skills>
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
            <Image className={classes.Material} src={data.material} alt="short intro" fill={true} priority/>
          </div>
        </div>
      </section>
      {data.descriptions ? (
        <ul className={classes.DescriptionWrapper}>
          {data.descriptions.map((description, i) => (
            <ScrollLineUp key={i}>
              <li
                className={classes.Description}
              >
                <span className={classes.Point}></span>
                <p>{description.text}</p>
                {description.picture && (
                  <Image className={classes.DescriptionImage} src={description.picture.link} alt={description.picture.alt} fill={true} priority/>
                )}
              </li>
            </ScrollLineUp>
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
