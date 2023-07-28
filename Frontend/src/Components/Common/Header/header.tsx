import React from 'react'
import { Row, Col, Typography, Button } from 'antd';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';


export const MainHeader = (props : any) => {

    const navigate = useNavigate();
    const { setIsLoggedIn } = props;


    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/")
    }

    return (
        <>
            <Row className='header'>
                <Col span={18} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography className='headerText'>
                        <strong>
                            Project Management System
                        </strong>
                    </Typography>
                </Col>
                <Col span={3}>
                </Col>
                <Col span={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Button onClick={handleLogout} className="logout-btn">Logout<LogoutOutlined className='logoutbtn' /></Button> 
                </Col>
            </Row>
        </>
    )
}
