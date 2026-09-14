import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SBButton from './SBButton.vue'

const meta: Meta<typeof SBButton> = {
  title: 'Components/SBButton',
  component: SBButton,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof SBButton>

export const Solid: Story = {
  args: { variant: 'solid' },
  render: (args) => ({
    components: { SBButton },
    setup: () => ({ args }),
    template: `<SBButton v-bind="args">Get started</SBButton>`,
  }),
}

export const Outline: Story = {
  args: { variant: 'outline' },
  render: (args) => ({
    components: { SBButton },
    setup: () => ({ args }),
    template: `<SBButton v-bind="args">Read the docs</SBButton>`,
  }),
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
  render: (args) => ({
    components: { SBButton },
    setup: () => ({ args }),
    template: `<SBButton v-bind="args">Learn more</SBButton>`,
  }),
}

export const AsLink: Story = {
  args: { variant: 'solid', href: 'https://storybook.js.org' },
  render: (args) => ({
    components: { SBButton },
    setup: () => ({ args }),
    template: `<SBButton v-bind="args">Visit storybook.js.org</SBButton>`,
  }),
}
