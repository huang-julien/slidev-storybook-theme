import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Default from './default.vue'

const meta: Meta<typeof Default> = {
  title: 'Layouts/Default',
  component: Default,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Default>

export const Basic: Story = {
  render: () => ({
    components: { LayoutDefault: Default },
    template: `<div style="width: 980px; height: 552px; overflow: hidden;"><LayoutDefault><h1>What is a story?</h1><ul><li>A story captures a rendered state of a component</li><li>Written in <code>*.stories.ts</code> files using CSF3</li><li>Each named export like <code>Primary</code> is a story</li></ul></LayoutDefault></div>`,
  }),
}
