import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';

import MenuTop from '../components/admin/menu-top';
import MenuSider from '../components/admin/menu-sider';

import './layout-admin.scss'
import { Layout } from 'antd';

export default function LayoutAdmin({routes}){

    const [menuCollapsed, setMenuCollapsed] = useState(false);

    const _hanldeCollapsed = () =>{
        setMenuCollapsed(!menuCollapsed);
    }

    const {Header, Content, Footer} = Layout;

    return(
        <Layout>
            <MenuSider collapsed={menuCollapsed}/>
            <Layout 
                className="layout-admin" 
                style={{marginLeft: menuCollapsed ? "80px" : "200px" }}
                >
                <Header className="layout-admin__header">
                    <MenuTop 
                        _hanldeCollapsed={_hanldeCollapsed}
                        collapsed={menuCollapsed}/>
                </Header>
                <Content className="layout-admin__content">
                    <Routes routes={routes}/>
                </Content>
                <Footer className="layout-admin__footer">
                    Carlos Moreno
                </Footer>
            </Layout>
        </Layout>
    )
}

function Routes ({routes}) {
    
    return (<Switch>
        {routes.map((route, index) =>{
        return (
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={route.component}
            />
            )
        })}
    </Switch>)
}