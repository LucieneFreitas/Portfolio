import pomodoro from '../../assets/pomodoro.png';
import doguinhos from '../../assets/doguinhos.png';
import airbnb from '../../assets/airbnb.png';
import planner from '../../assets/planner.png';
import toDo from '../../assets/toDo.png';

const Menu = [
  {
    id: 1,
    image: pomodoro, // Agora referenciando corretamente a imagem importada
    title: 'Pomodoro',
    category: 'App',
  },
  {
    id: 2,
    image: doguinhos, // Agora referenciando corretamente a imagem importada
    title: 'Clinica Veterinaria',
    category: 'Site',
  },
  {
    id: 3,
    image: airbnb, // Agora referenciando corretamente a imagem importada
    title: 'Agencia de viagem',
    category: 'Site',
  },
  {
    id: 4,
    image: planner, // Agora referenciando corretamente a imagem importada
    title: 'Planejamento',
    category: 'APP',
  },
  {
    id: 5,
    image: toDo, // Agora referenciando corretamente a imagem importada
    title: 'Tarefas',
    category: 'App',
  },
];

export default Menu
