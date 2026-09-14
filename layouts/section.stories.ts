import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Section from './section.vue'

const meta: Meta<typeof Section> = {
  title: 'Layouts/Section',
  component: Section,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Section>

export const Default: Story = {
  render: () => ({
    components: { Section },
    template: `<div style="width: 980px; height: 552px; overflow: hidden;"><Section><h2>Part 1</h2><h1>Writing your first stories</h1></Section></div>`,
  }),
}
