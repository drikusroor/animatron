import { MetaTags } from '@redwoodjs/web'

import AnimationCell from 'src/components/AnimationCell'

interface AnimationViewerPageProps {
  animationHistoryId: string
  version: string
}

const AnimationViewerPage = (props: AnimationViewerPageProps) => {
  const { animationHistoryId } = props
  const version = parseInt(props.version)

  return (
    <>
      <MetaTags title="AnimationViewer" description="AnimationViewer page" />

      <AnimationCell
        animationHistoryId={animationHistoryId}
        version={version}
      />
    </>
  )
}

export default AnimationViewerPage
