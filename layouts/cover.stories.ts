import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Cover from './cover.vue'

const meta: Meta<typeof Cover> = {
  title: 'Layouts/Cover',
  component: Cover,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Cover>

export const Default: Story = {
  render: () => ({
    components: { Cover },
    template: `<div style="width: 980px; height: 552px; overflow: hidden;"><Cover><h1>Storybook for Slidev</h1><p>A presentation theme styled like storybook.js.org</p></Cover></div>`,
  }),
}
