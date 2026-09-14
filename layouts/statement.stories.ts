import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Statement from './statement.vue'

const meta: Meta<typeof Statement> = {
  title: 'Layouts/Statement',
  component: Statement,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Statement>

export const Default: Story = {
  render: () => ({
    components: { Statement },
    template: `<div style="width: 980px; height: 552px; overflow: hidden;"><Statement><h1>Build UIs in isolation.</h1></Statement></div>`,
  }),
}
