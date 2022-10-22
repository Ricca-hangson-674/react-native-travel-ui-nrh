import UTILS from 'src/utils/random';

const dubai = require('src/assets/images/dubai.jpg');
const bali2 = require('src/assets/images/bali2.jpg');
const bali = require('src/assets/images/bali.jpg');
const unsplash1 = require('src/assets/images/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg');
const unsplash2 = require('src/assets/images/jezael-melgoza-7H77FWkK_x4-unsplash.jpg');

export default [
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Reprehenderit magna',
    image: dubai,
    images: [
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: bali2,
      },
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: dubai,
      },
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: unsplash1,
      },
    ],
    price: '$ 83',
    duration: '3 hours',
    rating: 3.5,
    description:
      'Qui sint commodo pariatur laborum excepteur cillum ex. Sit quis do velit veniam commodo id. Eiusmod sit nostrud irure eiusmod pariatur officia.',
  },
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Voluptate laborum',
    image: unsplash1,
    images: [
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: unsplash2,
      },
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: bali,
      },
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: unsplash1,
      },
    ],
    price: '$ 982',
    duration: '3 hours',
    rating: 3.5,
    description:
      'Aute exercitation amet aliqua minim. Duis elit aliqua nisi in id anim velit aliquip. Reprehenderit eiusmod nulla pariatur aliquip eu aliquip sit sit minim consequat non elit.',
  },
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Eiusmod labore',
    image: bali,
    images: [
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: bali2,
      },
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: bali,
      },
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: unsplash1,
      },
    ],
    price: '$ 214',
    duration: '3 hours',
    rating: 3.5,
    description:
      'Adipisicing nulla cupidatat dolore commodo dolore dolor consequat. Ipsum aliquip incididunt aliquip adipisicing minim amet aliquip. Reprehenderit duis ea minim esse laborum dolore consequat anim et voluptate elit est nisi velit. Ullamco elit commodo aliquip Lorem voluptate cupidatat dolore nulla ut laborum in. Lorem ipsum nostrud enim Lorem. Cupidatat non et eu ea ipsum sit fugiat pariatur tempor labore officia ullamco et. Cillum aute magna minim cillum nostrud laborum culpa quis veniam ullamco et excepteur.',
  },
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Dolore proident',
    image: unsplash2,
    images: [
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: unsplash1,
      },
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: bali2,
      },
      {
        id: UTILS.add(Date.now(), UTILS.random()),
        image: bali,
      },
    ],
    price: '$ 98',
    duration: '3 hours',
    rating: 3.5,
    description:
      'Fugiat anim excepteur reprehenderit velit ullamco officia. Non aliquip aliquip sunt magna laboris Lorem laboris ut ea. Tempor ad aliqua magna duis Lorem sunt anim cillum enim in.',
  },
];
