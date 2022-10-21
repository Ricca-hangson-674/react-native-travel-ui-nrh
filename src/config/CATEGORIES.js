import TOURS from './TOURS';

export default [
  {
    id: Date.now(),
    title: 'Sights',
    tours: [...TOURS, ...TOURS],
  },
  {
    id: Date.now(),
    title: 'Tours',
    tours: [...TOURS, ...TOURS, ...TOURS],
  },
  {
    id: Date.now(),
    title: 'Advantures',
    tours: [...TOURS, ...TOURS, ...TOURS, ...TOURS],
  },
];
