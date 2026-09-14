import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  stories: ['../components/**/*.stories.@(js|ts)', '../layouts/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-mcp'],
  features: {
    componentsManifest: true,
    experimentalDocgenServer: true,
  },
  // No project-level vite config exists (Slidev owns its own), so add the Vue plugin here.
  viteFinal: (viteConfig) => {
    viteConfig.plugins = [...(viteConfig.plugins ?? []), vue()]
    return viteConfig
  },
}
export default config
