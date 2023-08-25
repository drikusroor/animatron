// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import AppLayout from './layouts/AppLayout/AppLayout'
import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AppLayout}>
        <Route path="/app" page={AppPage} name="app" />
        <Route path="/animation/{animationHistoryId}/{version}" page={AnimationViewerPage} name="animation" />
        <Route path="/" page={FrontPage} name="front" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
