import React, { useEffect } from 'react'
import { Row, Col, Card, Form, Input, Typography, Button, Checkbox, Select } from 'antd';
import { useState } from 'react';
import UserService from '../../Service/userModule/userService';
import { useLocation } from 'react-router-dom';


export const EditUser = () => {
    const userService = new UserService();
    const location = useLocation();
    const user = location.state
    const [updatedUserDetails, setUpdatedUserDetails] = useState<boolean>(false);
    const [userDetailsById, setUserDetailsById] = useState<any>();
    const [selectedUser, setSelectedUser] = useState<any>()
    const [form] = Form.useForm()
    console.log(userDetailsById, "user from location");

    useEffect(() => {
        if (user) {
            setSelectedUser(user)
        }
    }, [user]);

    useEffect(() => {
        try {
            if(selectedUser){
                console.log(">>>>>>>>>>", selectedUser?.id);
                userService.getUserData(selectedUser?.id).then((response: any) => {
                    console.log(response, "uuuuuuuuuu");
                    setUserDetailsById({
                        id: response?.result?.id,
                        name: response?.result?.name,
                        email: response?.result?.email,
                        password: response?.result?.password,
                        phoneNumber: response?.result?.phoneNumber,
                        userType: response?.result?.userType,
                        status: response?.result?.status
                    })
                    form.setFieldsValue(response?.result)
                })
            }
        
        } catch (error) {
            console.error("Error", error);
        }

    }, [selectedUser])



    const handleUserInputChange = (e: any) => {
        let { name, value } = e.target;
        setUserDetailsById({ ...userDetailsById, [name]: value });
    }

    const handleUserDetailsSubmit = () => {
        let user: any = {
            id: userDetailsById?.id,
            name: userDetailsById?.name,
            email: userDetailsById?.email,
            password: userDetailsById?.password,
            phoneNumber: userDetailsById?.phoneNumber,
            userType: userDetailsById?.userType,
            status: userDetailsById?.status
        }
        setUpdatedUserDetails(true);
        userService.updateUserDetails(user)
            .then((response: any) => {
                if (response.status === 200) {
                    console.log("User Updated Successfully");
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
                            Update User Details
                        </Typography>
                    </Col>
                </Row>
                <Form form={form} layout='vertical' id="userEdit" onFinish={handleUserDetailsSubmit}>
                    <Row justify={"end"} gutter={[24, 20]}>
                        <Col span={12}>
                            <Form.Item label='User Name' name="name" rules={[{ required: true, message: "Please enter user name" }]}>
                                <Input placeholder='Enter the user name' type='text' className='forminput' name="name" value={userDetailsById?.name} onChange={handleUserInputChange}></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Email' name="email" rules={[{ required: true, message: "Please enter email" }]}>
                                <Input placeholder='Enter the email' type='text' className='forminput' name="email" value={userDetailsById?.email} onChange={handleUserInputChange}></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Password' name="password">
                                <Input placeholder='Enter the password' type='password' className='forminput' name="password" value={userDetailsById?.password} onChange={handleUserInputChange}></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Phone Number' name="phoneNumber" rules={[{ required: true, message: "Please enter the phone number" }]}>
                                <Input placeholder='Enter phone number' type='text' className='forminput' name="phoneNumber" value={userDetailsById?.phoneNumber} onChange={handleUserInputChange}></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='User Type' name="userType" rules={[{ required: true, message: "Please enter the user type" }]}>
                                <Input placeholder='Enter user type' type='text' className='forminput' name="userType" value={userDetailsById?.userType} onChange={handleUserInputChange}></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Status' name="status" rules={[{ required: true, message: "Please enter the status" }]} initialValue={userDetailsById?.status}>
                                <Input placeholder='Enter the status of the user' type='text' className='forminput' name="status" value={userDetailsById?.status} onChange={handleUserInputChange} ></Input>
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
