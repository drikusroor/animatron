import { MetaTags } from '@redwoodjs/web'
import RecentAnimations from 'src/components/RecentAnimations/RecentAnimations'
import StartAnimatingSaga from 'src/components/StartAnimatingSaga/StartAnimatingSaga'


const FrontPage = () => {
  return (
    <>
      <MetaTags title="Front" description="Front page" />

      <div className="mx-auto max-w-4xl p-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h1 className="text-2xl font-semibold">Welcome to Popi</h1>
            <p className="mt-2">
              Popi is a tool for creating animations using an intuitive
              interface. It currently exports animations to CSS, but in the
              future it will also export to SVG and GIF.
            </p>

            <StartAnimatingSaga />

          </div>

          <RecentAnimations />
        </div>
      </div>
    </>
  )
}

export default FrontPage
