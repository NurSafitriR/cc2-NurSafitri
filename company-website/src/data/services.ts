import chocolateImg from '../assets/CHOCOLATE-REVISI.png'
import cookiesImg from '../assets/COOKIES-T-M.png'
import greenTeaImg from '../assets/GREENTEA-T-M.png'
import pisangImg from '../assets/PISANG-T-M.png'
import plainImg from '../assets/PLAIN-T-M.png'
import strawberryImg from '../assets/STRAWBERRY-T-M.png'
import taroImg from '../assets/TARO-T-M-REVISI.png'
import vanillaImg from '../assets/VANILLA-T-M.png'

export interface Service {
  id: string
  title: string
  description: string
  price?: string
  imageUrl?: string
}

export const services: Service[] = [
  {
    id: 'darmi-plain',
    title: 'Darmi Plain',
    description:
      'Susu pasteurisasi rasa original, murni dan cocok dinikmati kapan saja.',
    price: 'Tersedia di 180+ gubuk & GrabFood/GoFood/ShopeeFood',
    imageUrl: plainImg,
  },
  {
    id: 'darmi-chocolate',
    title: 'Darmi Chocolate',
    description:
      'Susu cokelat legit untuk kamu pencinta rasa manis yang kaya.',
    price: 'Tersedia di 180+ gubuk & GrabFood/GoFood/ShopeeFood',
    imageUrl: chocolateImg,
  },
  {
    id: 'darmi-vanilla',
    title: 'Darmi Vanilla',
    description:
      'Susu pasteurisasi dengan aroma vanilla yang lembut dan manis pas, bikin nagih.',
    price: 'Tersedia di 180+ gubuk & GrabFood/GoFood/ShopeeFood',
    imageUrl: vanillaImg,
  },
  {
    id: 'darmi-cookies',
    title: 'Darmi Cookies',
    description:
      'Susu pasteurisasi dengan rasa cookies yang creamy, salah satu favorit para Cucu si Mbok.',
    price: 'Tersedia di 180+ gubuk & GrabFood/GoFood/ShopeeFood',
    imageUrl: cookiesImg,
  },
  {
    id: 'darmi-greentea',
    title: 'Darmi Green Tea',
    description:
      'Perpaduan susu segar dengan rasa green tea yang creamy, cocok buat kamu pencinta teh hijau.',
    price: 'Tersedia di 180+ gubuk & GrabFood/GoFood/ShopeeFood',
    imageUrl: greenTeaImg,
  },
  {
    id: 'darmi-taro',
    title: 'Darmi Taro',
    description:
      'Susu rasa taro yang unik dan creamy, gurih manis khas ubi ungu.',
    price: 'Tersedia di 180+ gubuk & GrabFood/GoFood/ShopeeFood',
    imageUrl: taroImg,
  },
  {
    id: 'darmi-pisang',
    title: 'Darmi Pisang',
    description:
      'Susu pisang creamy dengan rasa klasik yang selalu dicari pelanggan setia.',
    price: 'Tersedia di 180+ gubuk & GrabFood/GoFood/ShopeeFood',
    imageUrl: pisangImg,
  },
  {
    id: 'darmi-strawberry',
    title: 'Darmi Strawberry',
    description:
      'Perpaduan susu segar dan rasa strawberry manis yang menyegarkan.',
    price: 'Tersedia di 180+ gubuk & GrabFood/GoFood/ShopeeFood',
    imageUrl: strawberryImg,
  },
]
