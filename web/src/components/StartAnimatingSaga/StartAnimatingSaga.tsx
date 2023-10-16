const StartAnimatingSaga = () => {
  return (
    <a href="/app" className="mt-4 inline-block group">
      <button
        className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
        title="Start animating is not implemented yet"
        aria-label="Start animating is not implemented yet"
      >
        Start animating&nbsp;
        <div
          className="inline-block group-hover:scale-110 group-hover:rotate-12 transition-transform"
        >💪</div>
      </button>
    </a>
  )
}

export default StartAnimatingSaga
