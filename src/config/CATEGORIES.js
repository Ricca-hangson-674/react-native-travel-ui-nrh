import UTILS from 'src/utils/random';
import TOURS from './TOURS';

const changeId = (tour) => ({ ...tour, id: UTILS.add(Date.now(), UTILS.random()) });

const transform = (tours) => tours.map((t) => changeId(t));

export default [
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Sights',
    // tours: [...TOURS, ...TOURS],
    tours: [...transform(TOURS), ...transform(TOURS)],
  },
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Tours',
    tours: [...transform(TOURS), ...transform(TOURS), ...transform(TOURS)],
  },
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Advantures',
    tours: [...transform(TOURS), ...transform(TOURS), ...transform(TOURS), ...transform(TOURS)],
  },
];
