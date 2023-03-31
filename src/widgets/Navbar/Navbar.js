export const navbar = [
  {
    name: 'Нейрокорректоры',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_1.png',
    new: true,
    hit: false
  },
  {
    name: 'МетаХилинг',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_2.png',
    new: false,
    hit: true
  },
  {
    name: 'Гипнотические заговоры',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_3.png',
    new: false,
    hit: false
  },
  {
    name: 'Психологический гардероб',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_4.png',
    new: false,
    hit: false
  },
  {
    name: 'Медитации для начинающих',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_5.png',
    new: false,
    hit: false
  },
  {
    name: 'Деньги, достаток',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_6.png',
    new: false,
    hit: false
  },
  {
    name: 'Изменение личностной истории',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_7.png',
    new: false,
    hit: false
  },
  {
    name: 'Успех, личная эффективность',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_8.png',
    new: false,
    hit: false
  },
  {
    name: 'Развитие Интуиции',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_9.png',
    new: false,
    hit: false
  },
  {
    name: 'Освобождение от отрицательных эмоций',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_10.png',
    new: false,
    hit: false
  },
  {
    name: 'Установки на позитивные изменения',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_11.png',
    new: false,
    hit: false
  },
  {
    name: 'Здоровье, хорошая форма',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_12.png',
    new: false,
    hit: false
  },
  {
    name: 'Омоложение',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_13.png',
    new: false,
    hit: false
  },
  {
    name: 'Преодоление неуверенности в себе',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_14.png',
    new: true,
    hit: false
  },
  {
    name: 'От угнетённого состояния',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_15.png',
    new: false,
    hit: false
  },
  {
    name: 'От бессонницы',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_16.png',
    new: false,
    hit: true
  },
  {
    name: 'От тяжёлой болезни',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_17.png',
    new: false,
    hit: false
  },
  {
    name: 'Терапевтические сказки',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_18.png',
    new: false,
    hit: false
  },
  {
    name: 'БЕСТСЕЛЛЕРЫ',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_19.png',
    new: false,
    hit: false
  },
  {
    name: 'НОВИНКИ',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_20.png',
    new: false,
    hit: false
  },
  {
    name: 'Вкусная распродажа',
    link: 'https://to-buybook.ru/bla-bla-bla',
    img: 'nav_21.png',
    new: false,
    hit: false
  }
]

const isDescktop = () => document.documentElement.clientWidth > 1000

export const delimetr = (array) => {
  const size = 6
  let subarray = []
  for (let i = 0; i < Math.ceil(array.length / size); i++){
    subarray[i] = array.slice((i * size), (i * size) + size)
  }
  return subarray
}