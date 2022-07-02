import mongoose from 'mongoose';
import {Product} from '../models/Product/index.js';

mongoose.connect(
  // process.env.DB_CONNECTION,
  'mongodb://localhost:27017/shop',
  {useNewUrlParser: true},
  {useUnifiedTopology: true},
  () => {console.log("connected mongo db")}
)





const products = [
  {
    name: 'Apple Macbook Air 13',
    price: '3000$',
    description: '8GB memory 256GB SSD',
    imageName: 'air-13-teaser.jpg'
  },
  {
    name: 'Dell Latitude 7310',
    price: '2000$',
    description: '16GB memory 512GB SSD',
    imageName: 'dell-Latitude-7310.png'
  },
  {
    name: 'Dell Xps',
    price: '1000$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'dell-xps-15.0.jpg'
  },
  {
    name: 'iPhone 13 pink ',
    price: '3500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'iphone-13-pink-select-2021.jpg'
  },
  {
    name: 'iPhone 11',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'iphone11-select-2019-family.jpg'
  },
  {
    name: 'Macbook air ',
    price: '4000$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'macbook-air-with-m1-chip-still-a.jpeg'
  },
  {
    name: 'MacBook Pro M1 Max',
    price: '3600$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1800$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '800$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },
  {
    name: 'MacBook Pro M1 Max',
    price: '3700$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '400$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '4500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1100$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '3000$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '3800$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '4000$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },
  {
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },{
    name: 'MacBook Pro M1 Max',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    imageName: 'MacBook-Pro-M1-Max-2021-XDA.jpg'
  },
  {
    name: 'Samsung galaxy',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'samsung-galaxy-zfold35G256GB.jpg'
  },
  {
    name: 'Xiaomi Redmi',
    price: '1500$',
    description: 'MacBook Air with M1 is an incredibly portable laptop',
    imageName: 'xiaomi-redmi-9a-2gb-32gb-6.jpg'
  },
];


const seedDB = async () => {
  await Product.insertMany(products);
}

seedDB().then(() => mongoose.connection.close())
