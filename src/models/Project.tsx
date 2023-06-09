export interface Project {
  id: number;
  title: string;
  shortInfo: string;
  about: string;
  technologies: string[];
  webPage?: string;
  gitHub?: string;
  material: string;
  descriptions?: Description[]
}


interface Description {
  text: string;
  picture?: Picture;
}

interface Picture {
  link: string;
  alt: string;
}