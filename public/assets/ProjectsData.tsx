import {Project} from "@/models/Project";

export const PersonalProjects: Project[] = [
  {
    id: 1,
    title: 'Photo Library',
    shortInfo: 'Dynamic photo library with infinite scroll.',
    about: 'Photo library webpage with an infinite scroll feature, offering a never-ending stream of captivating images. Discover a vast collection of photos and curate your own personal favorites as you browse. With a constant influx of randomly selected photos, there\'s always something new to inspire and delight you',
    technologies: ['Angular', 'JavaScript', 'SCSS & CSS', 'Git'],
    gitHub: 'https://github.com/NellyHayrapetyan/photo-library',
    material: '/photo-library/photo-library.gif',
    placeholder: '/photo-library/favorites.jpg',
    descriptions: [
      {
        text: 'This project serves as a concise demonstration of implementing infinite scroll functionality without relying on specialized libraries. It retrieves random photos upon initial loading and dynamically loads additional photos as the user scrolls.',
      },
      {
        text: 'The application comprises two distinct sections: "Photos" and "Favorites," offering users the ability to select between them. Additionally, the user has the option to remove photos from the "Favorites" list.',
        picture: {
          link: '/photo-library/favorites.jpg',
          alt: 'Page "Favorites"'
        },
      },
      {
        text: 'Users have the option to view individual pictures from the Favorites section as well.',
        picture: {
          link: '/photo-library/single.jpg',
          alt: 'Single selected'
        },
      }
    ]
  },
  {
    id: 2,
    title: 'Self Education',
    shortInfo: 'Learning materials and quizzes.',
    about: 'The platform provides learning materials. As you progress, the unique testing system adapts to your performance, intelligently identifying areas of improvement based on mistakes made during previous tests. This personalized approach ensures that you receive targeted recommendations for related topics, allowing you to strengthen your understanding and expertise.',
    technologies: ['Angular', 'NextJS', 'JavaScript', 'SCSS & CSS', 'Git'],
    gitHub: 'https://github.com/NellyHayrapetyan/self-edu-web',
    material: '/self-education/self-edu.gif',
    placeholder: '/self-education/registration.jpg',
    descriptions: [
      {
        text: 'The platform offers registration options for two distinct roles: "Teacher" and "Student." Upon registration, teachers gain the ability to create tests and upload resources to the platform.',
        picture: {
          link: '/self-education/registration.jpg',
          alt: 'Registration page'
        },
      },
      {
        text: 'The platform empowers students to select their desired subjects for learning and gain access to comprehensive educational resources such as books and lectures provided by qualified teachers. Upon thorough exploration and study of the available materials, students have the opportunity to assess their understanding by taking tests to evaluate their knowledge acquisition.',
        picture: {
          link: '/self-education/subject.jpg',
          alt: 'subject list'
        },
      },
    ]
  },
  {
    id: 3,
    title: 'Anime World',
    shortInfo: 'Collection of captivating anime series and movies',
    about: 'Embark on a captivating journey through our anime streaming platform, featuring a diverse collection of series and movies. Although still in its early stages, this project aims to offer the latest updates, personalized user experiences with login functionality, and the ability to save and track your progress as you delve into the world of anime.',
    technologies: ['React', 'Redux', 'NextJS', 'JavaScript', 'SCSS & CSS'],
    gitHub: 'https://github.com/NellyHayrapetyan/animeworld-front',
    material: '/anime-world/anime-world.gif',
    placeholder: '/anime-world/anime-list.jpg',
    descriptions: [
      {
        text: 'The platform offers a comprehensive catalog of anime titles, encompassing detailed information such as release dates, ratings, and related content. Users can access trailers for each anime and stay updated with the latest news and updates within the anime community.',
        picture: {
          link: '/anime-world/anime-list.jpg',
          alt: 'anime list'
        },
      },
      {
        text: 'The platform offers user registration and the ability to store personal information. Users can create a list of watched animes, including the episode or moment where they left off. Furthermore, users can engage in discussions, express their opinions, and provide ratings for the animes, fostering a sense of community interaction.',
        picture: {
          link: '/anime-world/login.jpg',
          alt: 'login page',
        },
      },
    ]
  },
];

export const ProfessionalProjects: Project[] = [
  {
    id: 4,
    title: 'MobiClocks',
    shortInfo: 'Time and Attendance powered by true face recognition technology.',
    about: 'MobiClocks time and attendance tracking software powered by the most advanced face recognition technology, and an easy to use dashboard with a flag alert system make it easy to keep up with day-to-day attendance tasks. No more timesheets or spreadsheets which makes cheating so easy and payroll a headache. Just grab a tablet or smartphone and have your employees punch with confidence.',
    technologies: [ 'Angular', 'Angular Material', 'Google Maps', 'ngx-admin', 'date-fns', 'GIT'],
    webPage: 'https://mobiclocks.com/',
    placeholder: '/mobiclocks/tracking-placeholder.jpg',
    material: '/mobiclocks/tracking.gif',
    descriptions: [
      {
        text: 'This project offers a comprehensive employee tracking solution utilizing face recognition technology. It effectively records and manages employee work hours, providing accurate start and end date/time records. By serving as a robust time management system, it enhances efficiency and productivity within the organization.',
        picture: {
          link: '/mobiclocks/timelogs.gif',
          alt: 'employees'
        },
      },
      {
        text: 'The system enables managers to allocate specific working categories to each employee during their scheduled working hours. At the end of the year, the system generates the payroll calculations based on this information.',
        picture: {
          link: '/mobiclocks/cost-coding.gif',
          alt: 'cost-coding',
        },
      },
      {
        text: 'The system seamlessly integrates with tracking devices to collect data and provides an interactive map visualization of employee movement throughout their working hours, enhancing visibility and monitoring capabilities. This functionality enables comprehensive location tracking and analysis, empowering businesses to effectively analyze employee activity and optimize operational efficiency.',
        picture: {
          link: '/mobiclocks/tracking.gif',
          alt: 'tracking',
        },
      },
    ]
  },
  {
    id: 5,
    title: 'Methane emissions management',
    shortInfo: 'Powering methane solutions',
    about: 'While individual technologies can mitigate the issue, making real change in methane emissions requires a comprehensive view of your business and integrated operations. The product came up with a long-term plan for eliminating methane. Through connective software, hardware, and end-to-end solutions, it takes the guesswork out of methane management.',
    technologies: ['TypeScript', 'Angular', 'Ant Design', 'RxJs', 'micro-services', 'LESS & CSS', 'Jest', 'Golang'],
    webPage: 'https://www.slb.com/products-and-services/decarbonizing-industry/methane-emissions-management',
    material: '/slb/slb-emission.gif',
    placeholder: '/slb/slb.jpg',
  },
  {
    id: 6,
    title: 'AIS-GIS',
    shortInfo: 'Patient registration platform for pathological data',
    about: 'The project encompasses a software solution tailored for medical institutions and laboratories, effectively managing the entire process of anatomic pathological analysis, from initial entry to final result diagnosis, seamlessly integrated within their existing systems.',
    technologies: ['Angular', 'RxJs' ,'SCSS', 'PrimeNG', '.NetCore'],
    webPage: 'https://www.dedalus.com/global/en/',
    material: '/dedalus/dedalus.gif',
    placeholder: '/dedalus/search.jpg',
    descriptions: [
      {
        text: 'The platform offers a customizable search feature for patients, allowing users to select and define the search fields and criteria according to their preferences. This provides users with the flexibility to tailor the search functionality to their specific needs based on region of patient.',
        picture: {
          link: '/dedalus/search.jpg',
          alt: 'search'
        },
      },
      {
        text: 'The platform allows for the creation of patient data using various criteria, providing flexibility in managing and organizing patient information. Additionally, it offers a comprehensive set of tools for data entry and customization to meet the specific needs of medical professionals and institutions.',
        picture: {
          link: '/dedalus/patient-form.jpg',
          alt: 'form',
        },
      },
      {
        text: 'The comprehensive creation process comprises multiple interconnected forms that collectively capture a wide range of patient information, organized according to specific criteria.',
        picture: {
          link: '/dedalus/patient-form1.jpg',
          alt: 'form',
        },
      },
    ]
  },
  {
    id: 7,
    title: 'Merchant Portal',
    shortInfo: `Supplement Verifone's eCommerce delivery`,
    about: 'Build detailed transaction lists for comprehensive reporting and reconciliation purposes. With this robust solution, you have the ability to drill down into specific parameters such as a particular day, store location, EFTPOS terminal, or individual transaction, enabling you to access the precise level of detail you require. By utilizing this feature-rich platform, you can effortlessly generate transaction lists that provide valuable insights into your business operations. Experience a seamless and efficient process as you navigate through your transaction records, empowering you to make informed decisions and optimize your strategies.',
    technologies: ['Angular', 'RxJs', 'Spectator', 'Jest', 'GIT', 'Crowdin CLI', 'HTML', 'CSS & SCSS'],
    webPage: 'https://eftpos.co.nz/verifone-merchant-portal',
    material: '/verifone/portal.gif',
    placeholder: '/verifone/verifone.jpg',
  },
];




export const ProjectIntro = `I have included short introductions for my work experience projects, although some of them are private and cannot be fully disclosed or demonstrated. Additionally, some of the projects showcased here are personal endeavours that I work on during my free time, even though they may not be complete they demonstrate my passion and dedication.`;