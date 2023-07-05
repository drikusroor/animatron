import type { ComponentMeta } from '@storybook/react'

import AppPage from './AppPage'

export const generated = () => {
  return <AppPage />
}

export default {
  title: 'Pages/AppPage',
  component: AppPage,
} as ComponentMeta<typeof AppPage>
