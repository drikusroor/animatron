import type { ComponentMeta } from '@storybook/react'

import FrontPage from './FrontPage'

export const generated = () => {
  return <FrontPage />
}

export default {
  title: 'Pages/FrontPage',
  component: FrontPage,
} as ComponentMeta<typeof FrontPage>
