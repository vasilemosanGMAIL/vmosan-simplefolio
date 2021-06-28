import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Vasile',
  subtitle: "I'm a web Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Exchange_Rate_Calculator.png',
    title: 'Exchange-Rate-Calculator',
    info: 'A simple exchange rate calculator that fetches data from exchangerate-api.com API.',
    info2: '',
    url: '',
    repo: 'https://github.com/vasilemosanGMAIL/Project-6---Exchange-Rate-Calculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'get_random_meal.png',
    title: 'Meal-Info',
    info: 'A simple project that returns a random meal recipe. Data is fetched using themealdb.com API.',
    info2: '',
    url: '',
    repo: 'https://github.com/vasilemosanGMAIL/Project-3---Meal-Info', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'movie_app.png',
    title: 'Movie-App',
    info: 'This project displays the 20 most popular movies. Data is fetched using api.themoviedb.org API.',
    info2: 'Also, it allows to search movies using the same API.',
    url: '',
    repo: 'https://github.com/vasilemosanGMAIL/Project-4---Movie-App', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vasile-mo%C8%99an-104200152/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vasilemosanGMAIL',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
