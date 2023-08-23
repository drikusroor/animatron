import { MetaTags } from '@redwoodjs/web'

import RecentAnimationsCell from 'src/components/RecentAnimationsCell/RecentAnimationsCell'

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

            <a href="/app" className="mt-4 inline-block">
              <button
                className="rounded bg-slate-600 px-4 py-2 font-bold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                title="Start animating is not implemented yet"
                aria-label="Start animating is not implemented yet"
                disabled
              >
                Start animating
              </button>
            </a>
          </div>

          <RecentAnimationsCell />
        </div>
      </div>
    </>
  )
}

export default FrontPage
