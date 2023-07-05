type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <div className="min-h-screen bg-amber-100">{children}</div>
}

export default BlogLayout
