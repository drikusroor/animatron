import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FrontPage = () => {
  return (
    <>
      <MetaTags title="Front" description="Front page" />

      <h1>FrontPage</h1>
      <p>
        Find me in <code>./web/src/pages/FrontPage/FrontPage.tsx</code>
      </p>
      <p>
        My default route is named <code>front</code>, link to me with `
        <Link to={routes.front()}>Front</Link>`
      </p>
    </>
  )
}

export default FrontPage
