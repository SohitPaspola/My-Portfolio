const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'SP',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sohit Paspola',
  role: 'Front End Developer',
  description:
    'As a developer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.',
  resume: `https://drive.google.com/file/d/1_m21zOCtixijBMysbOT54c38A-Jfv9dS/view?usp=sharing`,
  social: {
    linkedin: 'https://www.linkedin.com/in/sohit-paspola-b463571a1/',
    github: 'https://github.com/SohitPaspola?tab=repositories',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Furniture Store',
    description:
      'An ecommerce project that deals with selling of all furniture products',
    stack: ["Css", 'react', 'redux', 'react-router', 'firebase', 'redux-persist'],
    sourceCode: 'https://github.com/SohitPaspola/FURNITURE_STORE',
    livePreview: 'https://furniture-store-b3aad.web.app/signin',
  },
  {
    name: 'BreakingBad API',
    description:
      'A website which fetches all breaking bad characters and their details and paginate them accordingly',
    stack: ['React', 'react-hooks', 'fetchAPI'],
    sourceCode: 'https://github.com/SohitPaspola/breakingbadAPI',
    livePreview: 'https://breakingbadapi-909e8.web.app/',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'React-Router',
  'Babel',
]

const contact = {
  email: 'shobhitpaspola@gmail.com',
}

export { header, about, projects, skills, contact }
