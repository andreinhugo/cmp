import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const Live = lazy(() => import('./components/Live'))
const Home = lazy(() => import('./components/Home'))

console.log('Home', Home);

const stories = import.meta.globEager('./components/**/*.stories.jsx')
const routes = { ...stories, '/': Home }

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {
              routes && Object.keys(routes).map((routePath) => {
                const [_, __, compName] = routePath.split('/')
                const componentPath = routePath === '/' ? routePath : compName.toLowerCase()

                return (
                  <li key={routePath}>
                    <Link to={componentPath}>{routePath}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        <div>
          <Suspense fallback={<div>loading</div>}>
            <Switch>
              {
                routes && Object.entries(routes).map(([routePath, component]) => {
                  const [_, __, compName] = routePath.split('/')
                  const componentPath = routePath === '/' ? routePath : `/${compName.toLowerCase()}`
                  const Component = routePath === '/' ? () => <Home /> : () => <Live code={component.code} scope={component.scope} />

                  return (
                    <Route exact path={componentPath} key={routePath} component={Component} />
                  )
                })
              }
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  )
}

export default App
