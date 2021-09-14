import { lazy } from "react";

const AuthRoute = [
    {
        path: '/login',
        component: lazy(() => import('../../views/pages/Login')),
        exact: true
    },
];

export default AuthRoute