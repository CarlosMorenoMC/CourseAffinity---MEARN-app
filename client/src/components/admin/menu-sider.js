import React from 'react';
import {Link} from 'react-router-dom';

import {Layout, Menu} from 'antd';
import {HomeOutlined, AppstoreOutlined} from '@ant-design/icons';

import './admin-components.scss';

export default function MenuSider ({collapsed}) {

    const {Sider} = Layout;

    return(
        <Sider className="menu-sider" collapsed={collapsed}>
           <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
                >
                <Menu.Item key="1">
                    <Link to="/admin">
                    <HomeOutlined />
                    <span className="navt-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/admin/menu-web">
                    <AppstoreOutlined />
                    <span className="navt-text">Menu Web</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}