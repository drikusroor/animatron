import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AnimationCell from 'src/components/AnimationCell'

interface AnimationViewerPageProps {
  id: string
}

const AnimationViewerPage = (props: AnimationViewerPageProps) => {
  const id = parseInt(props.id)

  return (
    <>
      <MetaTags title="AnimationViewer" description="AnimationViewer page" />

      <h1>AnimationViewerPage for id: {props.id}</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AnimationViewerPage/AnimationViewerPage.tsx</code>
      </p>
      <p>
        My default route is named <code>animationViewer</code>, link to me with
        `<Link to={routes.animationViewer({ id: '1' })}>AnimationViewer</Link>`
      </p>

      <AnimationCell id={id} />
    </>
  )
}

export default AnimationViewerPage
