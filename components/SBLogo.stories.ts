import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SBLogo from './SBLogo.vue'

const meta: Meta<typeof SBLogo> = {
  title: 'Components/SBLogo',
  component: SBLogo,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof SBLogo>

export const Default: Story = {}

export const Large: Story = {
  args: { size: 64 },
}

export const WithLabel: Story = {
  args: { label: 'Storybook' },
}
