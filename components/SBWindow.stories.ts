import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SBWindow from './SBWindow.vue'

const meta: Meta<typeof SBWindow> = {
  title: 'Components/SBWindow',
  component: SBWindow,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof SBWindow>

const CODE_SLOT = `<pre style="padding: 1em 1.2em; color: #e2e8f0; font-size: 13px;"><code>export function counter(initial = 0) {
  let count = initial
  return { inc: () => ++count }
}</code></pre>`

export const WithTitle: Story = {
  args: { title: 'counter.ts' },
  render: (args) => ({
    components: { SBWindow },
    setup: () => ({ args }),
    template: `<SBWindow v-bind="args">${CODE_SLOT}</SBWindow>`,
  }),
}

export const Untitled: Story = {
  render: (args) => ({
    components: { SBWindow },
    setup: () => ({ args }),
    template: `<SBWindow v-bind="args">${CODE_SLOT}</SBWindow>`,
  }),
}
