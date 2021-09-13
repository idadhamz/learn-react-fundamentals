import { lazy } from "react";

const DashboardRoute = [
    {
        path: '/app',
        component: lazy(() => import('../../App')),
        exact: true
    },
    {
        path: '/classcomp',
        component: lazy(() => import('../../ClassComp')),
        exact: true
    },
];

export default DashboardRoute