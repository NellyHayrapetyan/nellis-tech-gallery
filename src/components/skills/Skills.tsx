import classes from "./Skills.module.scss";

import React from "react";

interface SkillsProps {
  data: string[]
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return <ul className={classes.Skills}>
    {data.map((skill, i) =>
      <li className={classes.Skill} key={i} >
        {skill}
      </li>
    )}
  </ul>
};

export default Skills;
