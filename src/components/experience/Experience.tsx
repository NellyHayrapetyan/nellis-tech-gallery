import classes from './Experience.module.scss'
import React from 'react'
import ScrollLineUp from "@/components/scrollLineUp/ScrollLineUp";
import {EducationExperience, WorkExperience} from "@/models/Experience";

interface ExperienceProps {
  work: Array<WorkExperience>;
  education: Array<EducationExperience>;
}

const Experience: React.FC<ExperienceProps> = ({ work, education }) => {
  return (
    <>
      <section className={classes.Info}>
        <h1>Work.</h1>
        <ul className={classes.Experience}>
          {work.map((data, i) =>
            <div className={classes.CompanyWrapper} key={i}>
              <span className={classes.Point}></span>
              <ScrollLineUp key={i}>
                <li className={classes.Companies}>
                  <div className={classes.Header}>
                    <span className={classes.Title}>{data.title}</span>
                    <span className={classes.Timeline}>{data.timeline.start} - {data.timeline.end}</span>
                  </div>
                  <ul className={classes.ExperienceInCompany}>{
                    data.text.map((point, j) => <li key={j}>{point}</li>)
                  }</ul>
                </li>
              </ScrollLineUp>
            </div>)
          }
        </ul>
      </section>
      <section className={classes.Info}>
        <h1>Education.</h1>
        <ul className={classes.Experience}>
          {education.map((data, i) =>
            <div className={classes.CompanyWrapper} key={i}>
              <span className={classes.Point}></span>
              <ScrollLineUp key={i}>
                <li className={classes.Companies}>
                  <div className={classes.Header}>
                    <span className={classes.Title}>{data.university}</span>
                    <span className={classes.Timeline}>{data.timeline.start} - {data.timeline.end}</span>
                  </div>
                  <p className={classes.Degree}>{data.degree}</p>
                  <p>{data.major}</p>
                </li>
              </ScrollLineUp>
            </div>)
          }
        </ul>
      </section>
    </>
  )
}

export default Experience;