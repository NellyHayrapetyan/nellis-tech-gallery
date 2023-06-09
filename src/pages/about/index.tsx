import React from 'react';
import classes from './About.module.scss';
import Experience from '../../components/experience/Experience'
import {EducationData, ExperienceData, ExperienceSummary, Skills} from "../../../public/assets/ExperienceData";

const Index = () => {
  return (
    <div className={classes.AboutWrapper}>
      <section className={classes.Introduction}>
        <h1 className={classes.IntroTitle}>About Me.</h1>
        <div className={classes.Overview}>
          <section className={classes.Description}>
            <h2>Overview</h2>
            <article className={classes.IntroOverview}>{ExperienceSummary}</article>
          </section>
          <section>
            <h2>My Skills</h2>
            <ul className={classes.Skills}>
              {Skills.map((skill, i) => <li className={classes.Skill} key={i}>{skill}</li>)}
            </ul>
          </section>
        </div>
      </section>
      <Experience work={ExperienceData} education={EducationData}></Experience>
    </div>
  );
};

export default Index;