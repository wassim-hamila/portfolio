// Toutes les infos du portfolio sont ici, comme ça je modifie un seul fichier
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaServer,
  FaDatabase,
  FaCode,
  FaCheckSquare,
  FaCloudSun,
  FaUtensils,
} from 'react-icons/fa'

export const profile = {
  name: 'Wassim',
  roles: ['Développeur Web', 'Passionné de React', 'Créateur de sites'],
  bio: "Je suis étudiant en développement web. J'aime créer des sites modernes, simples et rapides avec React, et j'apprends un peu plus chaque jour.",
  email: 'wassim@exemple.com',
  location: 'Tunisie',
  github: 'https://github.com/wassim-hamila',
}

export const stats = [
  { value: '3+', label: 'Projets réalisés' },
  { value: '12', label: 'Technologies' },
  { value: '100%', label: 'Motivation' },
]

export const projects = [
  {
    id: 1,
    title: 'Todo List',
    description:
      'Une application pour gérer ses tâches : ajouter, cocher et supprimer. Les tâches sont gardées dans le localStorage.',
    tags: ['React', 'CSS'],
    icon: FaCheckSquare,
    color: 'linear-gradient(135deg, #6c8cff, #a78bfa)',
    link: 'https://github.com/wassim/todo-list',
  },
  {
    id: 2,
    title: 'Application Météo',
    description:
      "Recherche d'une ville et affichage de la météo du jour grâce à l'API OpenWeatherMap.",
    tags: ['JavaScript', 'API'],
    icon: FaCloudSun,
    color: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
    link: 'https://github.com/wassim/meteo-app',
  },
  {
    id: 3,
    title: 'Site Vitrine Restaurant',
    description:
      'Site responsive pour un restaurant avec le menu, les horaires et un formulaire de réservation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: FaUtensils,
    color: 'linear-gradient(135deg, #fb923c, #f43f5e)',
    link: 'https://github.com/wassim/restaurant',
  },
]

export const skills = [
  {
    category: 'Front-end',
    items: [
      { name: 'HTML5', icon: FaHtml5, level: 90 },
      { name: 'CSS3', icon: FaCss3Alt, level: 85 },
      { name: 'JavaScript', icon: FaJs, level: 75 },
      { name: 'React', icon: FaReact, level: 70 },
      { name: 'Bootstrap', icon: FaBootstrap, level: 80 },
    ],
  },
  {
    category: 'Back-end',
    items: [
      { name: 'Node.js', icon: FaNodeJs, level: 60 },
      { name: 'Express', icon: FaServer, level: 55 },
      { name: 'MongoDB', icon: FaDatabase, level: 50 },
    ],
  },
  {
    category: 'Outils',
    items: [
      { name: 'Git', icon: FaGitAlt, level: 75 },
      { name: 'GitHub', icon: FaGithub, level: 80 },
      { name: 'VS Code', icon: FaCode, level: 90 },
      { name: 'Figma', icon: FaFigma, level: 55 },
    ],
  },
]
