import type { Meta, StoryObj } from '@storybook/vue3-vite'
import End from './end.vue'

const meta: Meta<typeof End> = {
  title: 'Layouts/End',
  component: End,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof End>

export const Default: Story = {
  render: () => ({
    components: { End },
    template: `<div style="width: 980px; height: 552px; overflow: hidden;"><End><h1>Thank you!</h1><p>storybook.js.org · @storybookjs</p></End></div>`,
  }),
}
