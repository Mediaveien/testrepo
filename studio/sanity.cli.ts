import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '1bzgbepc',
    dataset: 'production',
  },
  deployment: {
    appId: 'vl47fyqx52ucq2xw6n3qhfxl',
    autoUpdates: true,
  },
})
