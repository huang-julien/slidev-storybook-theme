import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Quote from './quote.vue'

const meta: Meta<typeof Quote> = {
  title: 'Layouts/Quote',
  component: Quote,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Quote>

export const Default: Story = {
  render: () => ({
    components: { Quote },
    template: `<div style="width: 980px; height: 552px; overflow: hidden;"><Quote><h1>Storybook changed how our team builds UI. We ship components with confidence now.</h1><h6>— A frontend engineer, probably</h6></Quote></div>`,
  }),
}
