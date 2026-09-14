import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Fact from './fact.vue'

const meta: Meta<typeof Fact> = {
  title: 'Layouts/Fact',
  component: Fact,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Fact>

export const Default: Story = {
  render: () => ({
    components: { Fact },
    template: `<div style="width: 980px; height: 552px; overflow: hidden;"><Fact><h1>9M+</h1><p>weekly downloads</p></Fact></div>`,
  }),
}
