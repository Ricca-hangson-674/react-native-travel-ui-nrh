const dubai = require('../assets/images/dubai.jpg');
const bali2 = require('../assets/images/bali2.jpg');
const bali = require('../assets/images/bali.jpg');
const unsplash1 = require('../assets/images/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg');
const unsplash2 = require('../assets/images/jezael-melgoza-7H77FWkK_x4-unsplash.jpg');

export default [
  {
    id: Date.now(),
    title: 'Reprehenderit magna',
    image: dubai,
    images: [
      {
        id: Date.now(),
        image: bali2,
      },
      {
        id: Date.now(),
        image: dubai,
      },
      {
        id: Date.now(),
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
    id: Date.now(),
    title: 'Voluptate laborum',
    image: unsplash1,
    images: [
      {
        id: Date.now(),
        image: unsplash2,
      },
      {
        id: Date.now(),
        image: bali,
      },
      {
        id: Date.now(),
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
    id: Date.now(),
    title: 'Eiusmod labore',
    image: bali,
    images: [
      {
        id: Date.now(),
        image: bali2,
      },
      {
        id: Date.now(),
        image: bali,
      },
      {
        id: Date.now(),
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
    id: Date.now(),
    title: 'Dolore proident',
    image: unsplash2,
    images: [
      {
        id: Date.now(),
        image: unsplash1,
      },
      {
        id: Date.now(),
        image: bali2,
      },
      {
        id: Date.now(),
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
