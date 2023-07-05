type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <div className="min-h-screen bg-slate-800 text-white">{children}</div>
}

export default AppLayout
