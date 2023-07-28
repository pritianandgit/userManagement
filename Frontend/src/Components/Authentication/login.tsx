import React from 'react'
import { Row, Col, Card, Form, Input, Typography, Button, Checkbox } from 'antd';
import { EyeFilled } from '@ant-design/icons';
import './login.css';
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = (props : any) => {

    const navigate = useNavigate();
    const { setIsLoggedIn } = props;


    const handleLoginLogout = () => {
        setIsLoggedIn(true);
        navigate("/dashboard")
    }


    return (
        <>
            <Row className='loginForm'>
                <Col md={12} lg={12} xl={8} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card className='loginFormCard'>
                        <Row style={{ display: 'flex', justifyContent: 'center' }} className='mb-17'>
                            <img src={logo} alt='innobit_logo' className='innobitLogo' />
                        </Row>
                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography className='Heading'>
                                <strong>
                                    Project Management
                                </strong>
                            </Typography>
                        </Row>
                        <Row style={{ display: 'flex', justifyContent: 'center' }} className='mb-24'>
                            <Typography className='sub-heading'>
                                Login to the portal
                            </Typography>
                        </Row>
                        <Form layout='vertical'>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label='Email Id' required>
                                        <Input placeholder='Username' type='email' className='formInput'></Input>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label='Password' required>
                                        <Input placeholder='Password' type='password' className='formInput'></Input>
                                        <EyeFilled className='passwordIcon' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row className='mb-24'>
                                <Col span={12}>
                                    <Checkbox className='f-16'>Remember me</Checkbox>
                                </Col>
                                <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Link to='forgotpassword' className='forgotPasswordText'> Forgot Password?</Link>
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', justifyContent: 'center' }} className='mb-17'>
                                <Button className='login-btn' block onClick={handleLoginLogout}>Login</Button>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}