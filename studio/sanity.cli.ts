import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '1bzgbepc',
    dataset: 'production',
  },
  deployment: {
    // Fylles inn automatisk etter første `npm run deploy`.
    autoUpdates: true,
  },
})
