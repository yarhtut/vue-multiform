// ./plugins/contentful.js

import {createClient} from 'contentful'
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: 'lwaqndzrnasi',
  accessToken: '95a34b52fe0658bde9433bdd78b0194b0a68f16b325328a5d9e6764895972d74'
}

export default createClient(config)
