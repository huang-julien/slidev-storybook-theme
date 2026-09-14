import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Center from './center.vue'

const meta: Meta<typeof Center> = {
  title: 'Layouts/Center',
  component: Center,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Center>

export const Default: Story = {
  render: () => ({
    components: { Center },
    template: `<div style="width: 980px; height: 552px; overflow: hidden;"><Center><h1>Demo time</h1><p>Let's build a Button component together.</p></Center></div>`,
  }),
}
