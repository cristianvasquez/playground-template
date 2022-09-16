import { ItemType } from 'golden-layout'

const HOME = {
  title: 'Home',
  componentType: './components/Home.vue'
}

const SETTINGS = {
  title: 'Settings',
  componentType: './components/Settings.vue'
}

const defaultLayout = {
  root: {
    type: ItemType.row,
    content: [
      {
        type: 'component',
        header: { show: 'top' },
        isClosable: false,
        width: 40,
        componentState: undefined,
        ...HOME
      },
      {
        type: 'component',
        header: { show: 'top', popout: false },
        width: 40,
        componentState: { abc: 123 },
        ...SETTINGS
      },
    ],
  },
}

export { defaultLayout, HOME, SETTINGS }
