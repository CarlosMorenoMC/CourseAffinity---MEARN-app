import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {Layout} from 'antd';

export default function LayoutBasic ({routes}){

    const {Header, Content, Footer, Sider} = Layout;


    return(
        <Layout>
            <h2>Sider Basic...</h2>
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
            })
        }
    </Switch>)
}