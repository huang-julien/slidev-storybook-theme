import type { Meta, StoryObj } from '@storybook/vue3-vite'
import TwoCols from './two-cols.vue'

const meta: Meta<typeof TwoCols> = {
  title: 'Layouts/TwoCols',
  component: TwoCols,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof TwoCols>

export const Default: Story = {
  render: () => ({
    components: { TwoCols },
    template: `<div style="width: 980px; height: 552px; overflow: hidden;"><TwoCols><h1>Addons</h1><p>Extend Storybook with plugins for docs, testing, and design.</p><template #right><ul><li>Controls</li><li>Actions</li><li>Interactions</li><li>Accessibility</li><li>Visual tests</li></ul></template></TwoCols></div>`,
  }),
}
