import React from 'react';
import { Route } from 'react-router-dom';

import './layout-admin.scss'
import { Layout } from 'antd';

export default function LayoutAdmin({routes}){

    const {Header, Content, Footer, Sider} = Layout;

    return(
        <Layout>
            <h2>Sider Admin...</h2>
            <Layout>
                <Header>Header</Header>
                <Content>
                    ....Rutas....
                    <Routes routes={routes}/>
                </Content>
                <Footer>
                    CM
                </Footer>
            </Layout>
        </Layout>
    )
}

function Routes ({routes}) {
    console.log(routes)
    return routes.map((route, index) =>{
        return (
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={route.component}
        />
        )
    })
}