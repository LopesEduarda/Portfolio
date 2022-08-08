//  icons
import {
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/receitas.png';
import Project2 from './assets/img/users2.png';
import Project3 from './assets/img/users.jpg';
import Project4 from './assets/img/ifood.png';
import Project5 from './assets/img/outline-text/todolist.jpg';
import Project6 from './assets/img/pizzaria.jpg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/LopesEduarda',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/maria-eduarda-lopes-097aab227/',
  }
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Cookenu',
    description: 'Clique na imagem para ser redirecionado para o link do projeto com mais detalhes!',
    link: 'https://github.com/future4code/silveira-Maria-Lopes/pull/65'
  },
  {
    id: '2',
    image: Project2,
    name: 'Labook',
    description: 'Clique na imagem para ser redirecionado para o link do projeto com mais detalhes!',
  },
  {
    id: '3',
    image: Project3,
    name: 'Users',
    description: 'Clique na imagem para ser redirecionado para o link do projeto com mais detalhes!',
  },
  {
    id: '4',
    image: Project4,
    name: 'Labefood',
    description: 'Clique na imagem para ser redirecionado para o link do projeto com mais detalhes!',
    link: 'https://github.com/future4code/Silveira-labe-food1'
  },
  {
    id: '5',
    image: Project5,
    name: 'To do list',
    description: 'Clique na imagem para ser redirecionado para o link do projeto com mais detalhes!',
  },
  {
    id: '6',
    image: Project6,
    name: 'Pizzaria',
    description: 'Clique na imagem para ser redirecionado para o link do projeto com mais detalhes!',
  },
];

// projects
export const projectsNav = [
  {
    name: 'web development',
  }
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Tem uma pergunta?',
    subtitle: 'Estou aqui para te ajudar!',
    description: 'Me mande um email em: mariaeduarda-reis-lopes@outlook.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Localização',
    subtitle: 'Minas Gerais, Brasil'
  },
  {
    icon: <FiGithub />,
    title: 'Github',
    subtitle: 'https://github.com/LopesEduarda',
  },
  {
    icon: <FiLinkedin />,
    title: 'Linkedin',
    subtitle: 'https://www.linkedin.com/in/maria-eduarda-lopes-097aab227/',
  }
];
