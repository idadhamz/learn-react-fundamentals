import { lazy } from "react";

const AuthRoute = [
    {
        path: '/login',
        component: lazy(() => import('../../views/pages/login')),
        exact: true
    },
];

export default AuthRoute