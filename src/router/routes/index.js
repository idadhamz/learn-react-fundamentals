import DashboardRoute from './Dashboard'
import AuthRoute from './Auth'

const titleDocument = 'Antares | Reliable IoT Platform'

const DefaultRoute = '/app'

const Routes = [
    ...DashboardRoute,
    ...AuthRoute
]

export { titleDocument, DefaultRoute, Routes }
