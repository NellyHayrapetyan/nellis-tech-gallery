import classes from './Experience.module.scss'
import React, {useEffect, useRef} from 'react'
import 'public/assets/variables.scss'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function Experience({ work, education }) {
  const dataElementsRef = useRef([]);

  useEffect(() => {
    const observer = useScrollAnimation(dataElementsRef);

    return () => {
      observer.disconnect();
    }
  }, [dataElementsRef])


  return (
    <>
      <section className={classes.Info}>
        <h1>Work.</h1>
        <ul className={classes.Experience}>
          {work.map((data, i) =>
            <div className={classes.CompanyWrapper} key={i}>
              <span className={classes.Point}></span>
              <li ref={(el) => (dataElementsRef.current[i] = el)} className={classes.Companies}>
                <div className={classes.Header}>
                  <span className={classes.Title}>{data.title}</span>
                  <span className={classes.Timeline}>{data.timeline.start} - {data.timeline.end}</span>
                </div>
                <ul className={classes.ExperienceInCompany}>{
                  data.text.map((point, j) => <li key={j}>{point}</li>)
                }</ul>
              </li>
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
              <li ref={(el) => (dataElementsRef.current[work.length + i] = el)} className={classes.Companies}>
                <div className={classes.Header}>
                  <span className={classes.Title}>{data.university}</span>
                  <span className={classes.Timeline}>{data.timeline.start} - {data.timeline.end}</span>
                </div>
                <p className={classes.Degree}>{data.degree}</p>
                <p className={classes.Major}>{data.major}</p>
              </li>
            </div>)
          }
        </ul>
      </section>
    </>
  )
}

export default Experience;