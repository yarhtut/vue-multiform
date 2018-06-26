const slides = {
  '0': {
    id: 0,
    presentation: 'Introduction to',
    presentationTitle: 'VueJs',
    title: '',
    by: 'Ben & Yar,',
    linkUrl: 'https://boost.co.nz',
    link: 'Boost',
    lists: [],
    imageUrl: '',
    parts: '',
    markdown: ''
  },
  '1': {
    id: 1,
    title: 'Topic',
    lists: ['Recap', 'Vue Directive', 'Event Handling', 'Computed Properties', 'Components Communications' ],
  },
  '2': {
    id: 2,
    title: 'Recap',
    lists: ['el, data, components, computed, watch' ],
    imageUrl: '/assets/instance.png',
    demo: ''
  },
  '3': {
    id: 3,
    title: 'Vue Directive',
    lists: ['Conditional Rendering', 'Attribute Binding', 'List Renderring', 'v-boost' ],
    imageUrl: '',
    demo: ''
  },
  '4': {
    id: 4,
    title: 'Conditional Rendering',
    lists: ['v-if, v-else, v-show'],
    imageUrl: '/assets/condition.png',
    demo: ''
  },
  '5': {
    id: 5,
    title: 'Attribute Binding',
    lists: ['v-bind Attribute (:src, :href, :class, :style )'],
    imageUrl: '/assets/attribute.png',
    demo: ''
  },
  '6': {
    id: 6,
    title: 'List Rendering',
    lists: ['v-for ( array,  objects) '],
    imageUrl: '/assets/for.png',
    demo: ''
  },
  '7': {
    id: 7,
    title: 'Custom Directive',
    lists: ['v-boost'],
    demo: 'https://jsfiddle.net/yar_htut_1983/0rfmaz3b/',
  },
  '8': {
    id: 8,
    title: 'Event Handling & methods',
    lists: ['v-on:click (with two way binding)', 'v-on:click (methods)'],
    demo: 'https://jsfiddle.net/yar_htut_1983/jgf4r6yq/'
  },
  '9': {
    id: 9,
    title: 'Computed Properties',
    lists: ['computed: { }'],
    imageUrl: '',
    demo: 'https://jsfiddle.net/yar_htut_1983/76umL5p4/'
  },
  '10': {
    id: 10,
    title: 'Components Communications',
    lists: ['props & data'],
    demo: 'http://localhost:8081'
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
