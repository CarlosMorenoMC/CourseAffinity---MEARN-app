import LayoutAdmin from '../layouts/layout-admin';
import LayoutBasic from '../layouts/layout-basic';
import Admin from '../pages/admin';
import Signin from '../pages/admin/signin';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: Admin,
                exact:true
            },
            {
                path: "/admin/login",
                component: Signin,
                exact:true
            }
        ]
    }
]

export default routes;