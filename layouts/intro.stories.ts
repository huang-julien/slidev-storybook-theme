import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Intro from './intro.vue'

const meta: Meta<typeof Intro> = {
  title: 'Layouts/Intro',
  component: Intro,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Intro>

export const Default: Story = {
  render: () => ({
    components: { Intro },
    template: `<div style="width: 980px; height: 552px; overflow: hidden;"><Intro><h1>Why component-driven development?</h1><p>Build UIs from the bottom up — one component at a time.</p></Intro></div>`,
  }),
}
