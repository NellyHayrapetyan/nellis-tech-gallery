import React, {ReducerState, useReducer} from 'react'
import classes from './Portfolio.module.scss';
import ProjectCard from "@/components/projectCard/ProjectCard";
import {ProjectIntro, ProfessionalProjects, PersonalProjects} from '../../../public/assets/ProjectsData'

const ALL = 'ALL';
const PERSONAL = 'PERSONAL';
const PROFESSIONAL = 'PROFESSIONAL';

type VisibilityState = {
  personal: boolean,
  professional: boolean,
}


const tabReducer = (state: VisibilityState, action: { type: string } ) => {
  switch (action.type) {
    case ALL:
      return  { personal: true, professional: true };
    case PROFESSIONAL:
      return { personal: false, professional: true };
    case PERSONAL:
      return { personal: true, professional: false };
    default:
      return { personal: true, professional: true };
  }
}
const initialState: VisibilityState = {
  personal: true,
  professional: true,
};

const Portfolio = () => {
  const [ tabVisibility, dispatch ] = useReducer(tabReducer, initialState as ReducerState<VisibilityState>);

  const handleTabClick = (type: string) => {
    dispatch({ type });
  }

  return (
    <section className={classes.ProjectWrapper}>
      <h1 className={classes.Title}>Projects.</h1>
      <p className={classes.Intro}>{ProjectIntro}</p>
      <section className={classes.AllProjects}>
        <div className={classes.ProjectTabs}>
          <button onClick={handleTabClick.bind(this, ALL)} className={tabVisibility.professional && tabVisibility.personal ? `${classes.Active}`: ''}>All</button>
          <button onClick={handleTabClick.bind(this, PROFESSIONAL)} className={tabVisibility.professional && !tabVisibility.personal ? `${classes.Active}`: ''}>Professional</button>
          <button onClick={handleTabClick.bind(this, PERSONAL)} className={tabVisibility.personal && !tabVisibility.professional? `${classes.Active}`: ''}>Personal</button>
        </div>
        <div className={classes.Projects}>
          {tabVisibility.professional && ProfessionalProjects.map((project) =>
            <ProjectCard key={project.id} data={project} />
          )}
          {tabVisibility.personal && PersonalProjects.map((project) =>
            <ProjectCard key={project.id} data={project}/>
          )}
        </div>
      </section>
    </section>
  );
};

export default Portfolio;