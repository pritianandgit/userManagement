import React, { useEffect, useState } from "react"
import { Menu } from "antd"
import logo from '../../../Images/logo.png';
import { useNavigate } from "react-router-dom";
import { Row, Col } from 'antd';
import "./sideNav.css"
import { sideNavItems } from "../../../Constants/sideNavConstants";
import { useDispatch, useSelector } from "react-redux";

const getIcon = (props: any) => {
    return <span className="material-icons-outlined">{props}</span>
}
const { SubMenu } = Menu;
export const SideNav = (props: any) => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const [menuOptions, setMenuOptions] = useState<any>([])
    const { collapsed, appUser } = props;
    const handleItemSelect = (selectedItem: any) => {
        // dispatch(setSideBarItem(selectedItem.title))
        navigate(selectedItem.url)
    }


    return (
        <Row>
            <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "10vh" }}>
                <img src={logo} alt='innobit_logo' className='innobitLogo' />
            </Col>
            <Col span={24}>
                <Menu className="sideBar-menu" mode="inline">
                    {sideNavItems.map((item: any) => {
                        return (
                            item.children ?
                                <SubMenu key={item.title} className="menu-item-row f-14" icon={getIcon(item.icon)} title={item.title} level={1}>
                                    {item.children.map((subItem: any) => {
                                        return (
                                            <Menu.Item key={subItem.title}  className="menu-item-row subItem" onClick={() => handleItemSelect(subItem)}>{subItem.title}</Menu.Item>
                                        )
                                    })
                                    }
                                </SubMenu>
                                :
                                <Menu.Item key={item.title} className="menu-item-row f-14" icon={getIcon(item.icon)} onClick={() => handleItemSelect(item)}>{item.title}</Menu.Item>
                        )
                    })}
                </Menu>
            </Col>

        </Row>
    )
}