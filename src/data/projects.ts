import type { Project } from '../types';

// Helper so image paths work both locally and on GitHub Pages (which serves
// the site from /MyPortfolio/). Pass just the filename of an image you placed
// in `public/images/`.
const img = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

/**
 * ──────────────────────────────────────────────────────────────────────────
 *  This is the ONLY file you edit to add / remove / reorder projects.
 *  To add a project:
 *    1. Drop a thumbnail into `public/images/` (e.g. my-game.png)
 *    2. Copy one object below, change the fields, and use `img('my-game.png')`
 *  Projects render in the order listed here.
 * ──────────────────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    slug: 'space-runner',
    title: 'Space Runner',
    type: 'unity',
    description:
      'An endless 3D runner built in Unity. Procedurally generated obstacles, ' +
      'juicy particle effects, and an original soundtrack. Built solo over a weekend game jam.',
    tags: ['Unity', 'C#', '3D', 'Game Jam'],
    image: img('space-runner.png'),
    year: 2025,
    links: [
      { label: 'Play / Download', url: 'https://itch.io/' },
      { label: 'GitHub', url: 'https://github.com/' },
    ],
  },
  {
    slug: 'dungeon-crawler',
    title: 'Pixel Dungeon',
    type: 'unity',
    description:
      'A top-down roguelike with turn-based combat, procedural dungeons, and a ' +
      'custom 2D lighting system. Desktop build available for Windows.',
    tags: ['Unity', 'C#', '2D', 'Roguelike'],
    image: img('pixel-dungeon.png'),
    year: 2024,
    links: [
      { label: 'Download (Windows)', url: 'https://github.com/' },
      { label: 'itch.io', url: 'https://itch.io/' },
    ],
  },
  {
    slug: 'task-manager',
    title: 'TaskFlow',
    type: 'web',
    description:
      'A responsive task-management web app with drag-and-drop boards, ' +
      'local persistence, and keyboard shortcuts. Built with React and TypeScript.',
    tags: ['React', 'TypeScript', 'Vite'],
    image: img('taskflow.png'),
    year: 2025,
    links: [
      { label: 'Live demo', url: 'https://example.com/' },
      { label: 'GitHub', url: 'https://github.com/' },
    ],
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    type: 'web',
    description:
      'A clean weather dashboard pulling live data from a public API, with ' +
      'hourly charts, location search, and a dark/light theme toggle.',
    tags: ['JavaScript', 'API', 'CSS'],
    image: img('weather.png'),
    year: 2024,
    links: [
      { label: 'Live demo', url: 'https://example.com/' },
      { label: 'GitHub', url: 'https://github.com/' },
    ],
  },
];
