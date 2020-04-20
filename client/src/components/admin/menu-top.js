import React from 'react';
import Logo from '../../assets/course-affinity-logo.png';

import {Button} from 'antd';
import { LeftOutlined, MenuOutlined, PoweroffOutlined } from '@ant-design/icons';

import './admin-components.scss';

export default function MenuTop ({_hanldeCollapsed, collapsed}) {

    console.log(collapsed)
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                    className="menu-top__left-logo"
                    src={Logo}
                    alt="Course Affinity"/>
                <div className="menu-top__left-brand">
                    <span className="menu-top__left-brand-name">COURSE</span>
                    <span className="menu-top__left-brand-name-secondary">AFFINITY</span>
                </div>
                
                <Button type="link" onClick={_hanldeCollapsed}>
                    {collapsed ? <MenuOutlined /> : <LeftOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={(e)=> console.log(e)}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}