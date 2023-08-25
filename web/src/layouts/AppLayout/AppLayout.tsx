type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <div className="min-h-screen bg-gray-900 text-white">{children}</div>
}

export default AppLayout
