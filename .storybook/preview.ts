import type { Preview } from '@storybook/vue3-vite'
import '../styles/index'

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#ffffff' },
        navy: { name: 'Navy', value: '#0d1026' },
      },
    },
  }
}
export default preview
