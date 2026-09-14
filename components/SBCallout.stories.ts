import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SBCallout from './SBCallout.vue'

const meta: Meta<typeof SBCallout> = {
  title: 'Components/SBCallout',
  component: SBCallout,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof SBCallout>

export const WithTitle: Story = {
  args: { title: 'Did you know?' },
  render: (args) => ({
    components: { SBCallout },
    setup: () => ({ args }),
    template: `<SBCallout v-bind="args">Storybook powers UI development for thousands of teams.</SBCallout>`,
  }),
}

export const ContentOnly: Story = {
  render: (args) => ({
    components: { SBCallout },
    setup: () => ({ args }),
    template: `<SBCallout v-bind="args">A callout without a title, just content.</SBCallout>`,
  }),
}
