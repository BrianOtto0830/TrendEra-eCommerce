import Dress from '../images/Dress.jpg';
import BrownHat from '../images/Brown Hat.jpg';
import Tshirt from '../images/Tshirt.jpg';
import Tshirt2 from '../images/Tshirt2.jpg';
import Pants from '../images/Chino Pants.jpg';
import Jean from '../images/Jean.jpg';
import Jean2 from '../images/Jean2.jpg';
import Dress2 from '../images/Chinese Dress.jpg'

export const data = [
  {
    id: 1,
    imageSrc: `${Dress}`,
    images: [`${Dress}`, `${Dress}`, `${Dress}`, `${Dress}`, `${Dress}`],
    name: 'Unique Dress',
    company: 'h&m',
    category: 'Dress',
    price: 250000,
    rating: 5,
    reviews: 1400,
    shipping: false,
    stock: 100,
    colors: ['grey'],
    description: 'unique dress with high quality',
  },
  {
    id: 2,
    imageSrc: `${BrownHat}`,
    images: [
      `${BrownHat}`,
      `${BrownHat}`,
      `${BrownHat}`,
      `${BrownHat}`,
      `${BrownHat}`,
    ],
    name: 'BrownHat',
    company: 'h&m',
    category: 'Hat',
    price: 100000,
    rating: 4,
    reviews: 34,
    shipping: true,
    stock: 9,
    colors: ['brown'],
    description: 'best looking hat clasic',
  },
  {
    id: 3,
    imageSrc: `${Tshirt}`,
    images: [
      `${Tshirt}`,
      `${Tshirt}`,
      `${Tshirt}`,
      `${Tshirt}`,
      `${Tshirt}`,
    ],
    name: 'Paper plane Tshirt',
    company: 'Trend Era',
    category: 'T-Shirt',
    price: 250000,
    rating: 3,
    reviews: 26,
    shipping: false,
    stock: 8,
    colors: ['green'],
    description: 'testing satu dua tiga',
  },
  {
    id: 4,
    imageSrc: `${Tshirt2}`,
    images: [
      `${Tshirt2}`,
      `${Tshirt2}`,
      `${Tshirt2}`,
      `${Tshirt2}`,
      `${Tshirt2}`,
    ],
    name: 'Cool Tshirt',
    company: 'Trend Era',
    category: 'T-Shirt',
    price: 350000,
    rating: 4,
    reviews: 95,
    shipping: true,
    stock: 7,
    colors: ['white'],
    description: 'Cool looking t-shirt',
  },
  {
    id: 5,
    imageSrc: `${Pants}`,
    images: [
      `${Pants}`,
      `${Pants}`,
      `${Pants}`,
      `${Pants}`,
      `${Pants}`,
    ],
    name: 'Chino Pants',
    company: 'Trend Era',
    category: 'Pants',
    price: 320000,
    rating: 5,
    reviews: 61,
    shipping: false,
    stock: 6,
    colors: ['green'],
    description: 'Clasic chino pants',
  },
  {
    id: 6,
    imageSrc: `${Jean}`,
    images: [
      `${Jean}`,
      `${Jean}`,
      `${Jean}`,
      `${Jean}`,
      `${Jean}`,
    ],
    name: 'Clasic dark blue jeans',
    company: 'Trend Era',
    category: 'Pants',
    price: 250000,
    rating: 4,
    reviews: 89,
    shipping: true,
    stock: 5,
    colors: ['blue'],
    description: 'testing satu dua tiga',
  },
  {
    id: 7,
    imageSrc: `${Jean2}`,
    images: [
      `${Jean2}`,
      `${Jean2}`,
      `${Jean2}`,
      `${Jean2}`,
      `${Jean2}`,
    ],
    name: 'Jean light blue',
    company: 'Trend Era',
    category: 'Pants',
    price: 150000,
    rating: 4,
    reviews: 12,
    shipping: false,
    stock: 4,
    colors: ['red', 'blue'],
    description: 'testing satu dua tiga',
  },
  {
    id: 8,
    imageSrc: `${Dress2}`,
    images: [
      `${Dress2}`,
      `${Dress2}`,
      `${Dress2}`,
      `${Dress2}`,
      `${Dress2}`,
    ],
    name: 'Chinese Dress',
    company: 'Trend Era',
    category: 'Dress',
    price: 450000,
    rating: 3,
    reviews: 19,
    shipping: false,
    stock: 3,
    colors: ['white'],
    description: 'Beautiful dress for girls',
  },
];
