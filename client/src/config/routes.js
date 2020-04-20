//Layout
import LayoutAdmin from '../layouts/layout-admin';
import LayoutBasic from '../layouts/layout-basic';

//Admin pages
import Admin from '../pages/admin';
import Signin from '../pages/admin/signin';

//Pages
import Home from '../pages/home';
import Contact from '../pages/contact';
import Error404 from '../pages/error404';

export const adminRoutes = 
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
            },
            {
                component: Error404
            }
        ]
    }



export const userRoutes = 
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact:true
            },
            {
                path: "/contact",
                component: Contact,
                exact:true
            },
            {
                component: Error404
            }
        ]
    }
