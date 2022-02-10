import React, { Component, Fragment, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import router, { IRouter, unAuthRouter } from '../router/index'
import AppLayout from './AppLayout'
class Page extends Component<any, any> {
  generateRouter = (routerList: IRouter[]) => {
    return (
      <>
        {routerList?.map((r) => {
          if (r.children) {
            return (
              <Fragment key={r.key}>{this.generateRouter(r.children)}</Fragment>
            )
          } else {
            return (
              <Route exact={r.exact} path={r.path} key={r.key}>
                {r.component}
              </Route>
            )
          }
        })}
      </>
    )
  }
  render() {
    return (
      <>
        <Suspense fallback={<></>}>
          <Router>
            <Switch>
              <Route path={'/'} exact>
                <Redirect to={'/admin/index'} />
              </Route>
              <Route path="/admin">
                <AppLayout>
                  <Suspense fallback={<></>}>
                    {this.generateRouter(router)}
                  </Suspense>
                </AppLayout>
              </Route>
              <Switch>
                {unAuthRouter.map((r: any) => (
                  <Route exact={r.exact} path={r.path} key={r.key}>
                    {r.component}
                  </Route>
                ))}
              </Switch>
            </Switch>
          </Router>
        </Suspense>
      </>
    )
  }
}

export default Page
