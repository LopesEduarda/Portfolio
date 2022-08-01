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
import Project5 from './assets/img/todolist.png.crdownload';
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
    description: 'Um projeto back-end desenvolvido com as tecnologias Node.js, Typescript e MySQL e inspirado em uma rede social, na qual os usuários podem dividir informações sobre receitas. Possui todas as funcionalidades mais comuns que vemos diariamente, tais como: Cadastro, login, buscas por perfis de usuários, além de criar, editar e deletar suas próprias receitas criadas dentro da plataforma. Também é possível seguir e deixar de seguir um usuário e, se necessário, deletar uma conta.'
  },
  {
    id: '2',
    image: Project2,
    name: 'Labook',
    description: 'Desenvolvido e inspirado em uma rede social, na qual os usuários podem se cadastrar, realizar o login, seguir outro usuário, entre outras funcionalidades.'
  },
  {
    id: '3',
    image: Project3,
    name: 'Users',
    description: 'Projeto desenvolvido no backend e no frontend, onde usuários podem se cadastrar, ver a lista de usuários cadastrados, editar informações de um usuário específico, deletar e restaurar.'
  },
  {
    id: '4',
    image: Project4,
    name: 'Labefood',
    description: 'Um projeto front-end que foi desenvolvido em equipe no formato mobile. Inspirado no aplicativo de delivery Rappi, desenvolvido com JavaScript, React JS, Styled-Components e MaterialUI. Na aplicação, o usuário pode se cadastrar com dados pessoais (nome, email e cpf), e também seu endereço. Após o cadastro, o usuário é redirecionado para a página de feed, onde estão todos os restaurantes disponíveis, tendo a possibilidade de filtrá-los e também buscá-los no campo de busca, se preferir. Em seguida, basta clicar no restaurante escolhido, selecionar o produto e seguir para o carrinho para finalizar a compra. No carrinho, é possível visualizar o endereço de entrega e selecionar a forma de pagamento. Após a finalização do pedido, é possível acompanhar a entrega do mesmo.'
  },
  {
    id: '5',
    image: Project5,
    name: 'To do list',
    description: 'Um projeto desenvolvido no backend e no frontend, onde usuários podem listar tarefas e colocar o status da mesma: feito, sendo feita ou a fazer.'
  },
  {
    id: '6',
    image: Project6,
    name: 'Pizzaria',
    description: 'Um projeto desenvolvido no backend e no frontend, onde é possível se cadastrar, realizar login, ver as pizzas disponíveis e fazer um pedido.'
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
