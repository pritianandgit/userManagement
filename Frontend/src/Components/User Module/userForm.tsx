import React from 'react'
import { Row, Col, Card, Form, Input, Typography, Button, Checkbox, Select } from 'antd';
import { useState } from 'react';
import UserService from '../../Service/userModule/userService';

export const UserForm = () => {

    const [userDetailsSubmit, setUserDetailsSubmit] = useState<boolean>(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        userType: "",
        status: ""
    })

    const userService = new UserService();

    const handleUserInputChange = (e: any) => {
        let { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    }

    const handleUserDetailsSubmit = () => {
        let user: any = {
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
            phoneNumber: userDetails.phoneNumber,
            userType: userDetails.userType,
            status: userDetails.status
        }
        console.log(">>>>>>", userDetails);
        setUserDetailsSubmit(true);
        userService.createUserData(user)
            .then((response: any) => {
                if (response.status === 200) {
                    console.log("User Created Successfully");
                }
                else {
                    console.log("Error");
                }
            })
    }



    return (
        <>
            <Card className='timeTrackerCard'>
                <Row className='timeTrackerFrom'>
                    <Col span={24}>
                        <Typography className='headingText'>
                            Users Form
                        </Typography>
                    </Col>
                </Row>
                <Form layout='vertical' id="timesheet">
                    <Row justify={"end"} gutter={[24, 20]}>
                        <Col span={12}>
                            <Form.Item label='User Name' name="name" rules={[{ required: true, message: "Please enter user name" }]}>
                                <Input placeholder='Enter the user name' type='text' className='forminput' name="name" value={userDetails.name} onChange={handleUserInputChange}></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Email' name="email" rules={[{ required: true, message: "Please enter email" }]}>
                                <Input placeholder='Enter the email' type='text' className='forminput' name="email" value={userDetails.email} onChange={handleUserInputChange}></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Password' name="password">
                                <Input placeholder='Enter the password' type='password' className='forminput' name="password" value={userDetails.password} onChange={handleUserInputChange}></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Phone Number' name="phoneNumber" rules={[{ required: true, message: "Please enter the phone number" }]}>
                                <Input placeholder='Enter phone number' type='text' className='forminput' name="phoneNumber" value={userDetails.phoneNumber} onChange={handleUserInputChange}></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='User Type' name="userType" rules={[{ required: true, message: "Please enter the user type" }]}>
                                <Input placeholder='Enter user type' type='text' className='forminput' name="userType" value={userDetails.userType} onChange={handleUserInputChange}></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Status' name="status" rules={[{ required: true, message: "Please enter the status" }]}>
                                <Input placeholder='Enter the status of the user' type='text' className='forminput' name="status" value={userDetails.status} onChange={handleUserInputChange} ></Input>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item name="userSave">
                                <Button className='save-btn' htmlType="submit" form='timesheet' block onClick={handleUserDetailsSubmit}>Save</Button>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item name="userCancel">
                                <Button className='cancel-btn' block>Cancel</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
    )
}
