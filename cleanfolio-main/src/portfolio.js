const header = {
  // all the properties are optional - can be left empty or deleted
  homepage:
    'https://github.com/rohitchourey0809/Rohit_Personal_React_PortFoiio.git',
  title: 'Rohit Chourey',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  Image:
    'https://cdn-images-1.medium.com/max/1000/1*aZZ7Ekf2YnpIgZ6_87mm6A.png',

  name: 'Rohit Chourey',
  role: 'Mern Stack Web Developer',
  description:
    'Observant and detail-oriented aspiring full stack web developer with a specialization in mern stack.Self-motivated and      curious,with a keen interest in building user-centric products. Looking forward to utilizing  his skills in a challenging work environment. Always active and energetic for performing the task. Always ready to learn new things.',
  resume:
    'https://docs.google.com/document/d/1rN5NiZ9R6XEDrLehWUq04lAyfGjKeggjVznhxvCMuVc/edit',
  social: {
    linkedin: 'https://www.linkedin.com/in/rohit-chourey/',
    github: 'https://github.com/rohitchourey0809',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'MeanBuyClone',
    Imgproject: 'https://miro.medium.com/max/875/0*O0kYHdJYMf-xLEm7.png',
    description: 'Meanbuy is the online shopping e-commerse website.',
    stack: ['Html', 'Css', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/rohitchourey0809/Meanbuy',
    livePreview: 'https://dapper-meanbuy-rohitchourey00809.netlify.app',
  },
  {
    name: 'CredoBeautyClone',
    Imgproject: 'https://miro.medium.com/max/875/0*oebBk9nq6yzO0k1F.png',
    description:
      'CredoBeauty is the online shopping beauty product e-commerse website.',
    stack: ['Html', 'Css', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/rohitchourey0809/CREADO_BEAUTY',
    livePreview: 'https://courageous-seahorse-df76dc.netlify.app/',
  },

  {
    name: 'GoogleTranlatorClone',
    Imgproject: 'https://miro.medium.com/max/1400/1*VBXT67n-oKSuhfHbMiPQcQ.png',
    description:
      "Google's Translator free service instantly translates words, phrases, and web pages between English and over 100 other languages.",
    stack: ['Html', 'Css', 'JavaScript'],
    sourceCode:
      'https://github.com/rohitchourey0809/Unit3_Git_Assign/tree/main/google%20translator',
    livePreview:
      'https://googletranslater-nuh1bv627-rohitchourey0809.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'MongoDB',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rohit1995chourey@mail.com',
}

export { header, about, projects, skills, contact }
