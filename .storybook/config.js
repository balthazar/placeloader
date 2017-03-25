import { configure, setAddon } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'

setAddon(infoAddon)

const loadStories = () => {
  require('../stories/index.js')
}

configure(loadStories, module)
