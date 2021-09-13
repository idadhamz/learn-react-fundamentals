import React, { Suspense } from 'react'
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'
import { DefaultRoute, Routes } from './routes'

const Loading = () => (
    <h2>Loading ....</h2>
)

const ResolveRoutes = () => {
    return Routes.map(route => (
        <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={props => (
                <route.component {...props} />
            )}
        />
    ))
}

const Router = () => {

    const isUserLoggedIn = () => localStorage.getItem("user")

    return (
        <AppRouter>
            <Switch>
                <Suspense fallback={<Loading />}>
                    {/* <Route path="/" exact>
                        <App />
                    </Route>
                    <Route path="/classcomp" exact>
                        <ClassComp />
                    </Route> */}

                    <Route
                        path="/"
                        exact
                        render={() => {
                            return isUserLoggedIn() ? <Redirect to={DefaultRoute} /> : <Redirect to={"/login"} />
                        }}
                    />

                    {ResolveRoutes()}
                </Suspense>
            </Switch>
        </AppRouter>
    )
}

export default Router
