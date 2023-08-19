import { MetaTags } from '@redwoodjs/web'

import AnimationCell from 'src/components/AnimationCell'

interface AnimationViewerPageProps {
  animationHistoryUuid: string
  version: string
}

const AnimationViewerPage = (props: AnimationViewerPageProps) => {
  const { animationHistoryUuid } = props
  const version = parseInt(props.version)

  return (
    <>
      <MetaTags title="AnimationViewer" description="AnimationViewer page" />

      <AnimationCell
        animationHistoryUuid={animationHistoryUuid}
        version={version}
      />
    </>
  )
}

export default AnimationViewerPage
