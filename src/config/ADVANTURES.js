import UTILS from 'src/utils/random';

const Kayaking = require('src/assets/images/advantures/kayaking-con.png');
const Ballooning = require('src/assets/images/advantures/ballooning-icon.png');
const Snorkeling = require('src/assets/images/advantures/snorkeling-icon.png');
const Hiking = require('src/assets/images/advantures/hiking-icon.png');

export default [
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Kayaking',
    image: Kayaking,
  },
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Ballooning',
    image: Ballooning,
  },
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Hiking',
    image: Hiking,
  },
  {
    id: UTILS.add(Date.now(), UTILS.random()),
    title: 'Snorkeling',
    image: Snorkeling,
  },
];
