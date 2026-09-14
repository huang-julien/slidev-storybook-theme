import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SBGradientText from './SBGradientText.vue'

const meta: Meta<typeof SBGradientText> = {
  title: 'Components/SBGradientText',
  component: SBGradientText,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof SBGradientText>

export const Default: Story = {
  render: (args) => ({
    components: { SBGradientText },
    setup: () => ({ args }),
    template: `<SBGradientText v-bind="args">Build UIs in isolation</SBGradientText>`,
  }),
}

export const CustomColors: Story = {
  args: { from: '#37D5D3', to: '#FEBD32' },
  render: (args) => ({
    components: { SBGradientText },
    setup: () => ({ args }),
    template: `<SBGradientText v-bind="args">Teal to gold</SBGradientText>`,
  }),
}
