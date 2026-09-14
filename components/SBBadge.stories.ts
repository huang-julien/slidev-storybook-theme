import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SBBadge from './SBBadge.vue'

const meta: Meta<typeof SBBadge> = {
  title: 'Components/SBBadge',
  component: SBBadge,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof SBBadge>

export const OnDark: Story = {
  globals: { backgrounds: { value: 'navy' } },
  render: (args) => ({
    components: { SBBadge },
    setup: () => ({ args }),
    template: `<SBBadge v-bind="args">Storybook 10 is here</SBBadge>`,
  }),
}

export const Light: Story = {
  args: { light: true },
  render: (args) => ({
    components: { SBBadge },
    setup: () => ({ args }),
    template: `<SBBadge v-bind="args">Storybook 10 is here</SBBadge>`,
  }),
}

export const WithIcon: Story = {
  globals: { backgrounds: { value: 'navy' } },
  render: (args) => ({
    components: { SBBadge },
    setup: () => ({ args }),
    template: `<SBBadge v-bind="args">🎉 New release</SBBadge>`,
  }),
}
