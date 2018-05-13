const slides = {
  '0': {
    id: 0,
    title: 'sunt aut facere',
    lists: ['vue intro', 'vue instance', 'vue dericitive'],
    imageUrl: 'https://vuejs.org/images/logo.png',
    parts: '',
  },
  '1': {
    id: 1,
    title: 'sunt aut facere',
    lists: ['vue intro', 'vue instance', 'vue dericitive'],
    imageUrl: 'https://vuejs.org/images/logo.png',
    parts: '',
  },
  '2': {
    id: 2,
    title: 'qui est esse',
    lists: ['vue intro', 'vue instance', 'vue dericitive'],
    imageUrl: 'https://vuejs.org/images/logo.png',
    parts: '',
  },
  '3': {
    id: 3,
    title: 'qui est esse',
    lists: ['vue intro', 'vue instance', 'vue dericitive'],
    imageUrl: 'https://vuejs.org/images/logo.png',
    parts: '',
  }
}

export function getSlide (id, cb) {
  // fake an API request
  setTimeout(() => {
    if (slides[id]) {
      cb(null, slides[id])
    } else {
      cb(new Error('Slide not found.'))
    }
  }, 100)
}
