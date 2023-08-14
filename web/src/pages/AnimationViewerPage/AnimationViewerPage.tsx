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

      <AnimationCell id={id} />
    </>
  )
}

export default AnimationViewerPage
