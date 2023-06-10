export interface WorkExperience {
  text: string[];
  title: string;
  timeline: TimeLine;
}

export interface EducationExperience {
  major: string,
  university: string,
  degree: string,
  timeline: TimeLine,

}


interface TimeLine {
  start: string;
  end: string;
}
