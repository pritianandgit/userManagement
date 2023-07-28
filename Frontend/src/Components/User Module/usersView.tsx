import React, { useEffect } from 'react'
import { Row, Col, Card, Table, Space, Tag, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UserService from '../../Service/userModule/userService';
import { DeleteFilled, DeleteOutlined, EditFilled, EditOutlined } from '@ant-design/icons';

export const UsersView = () => {

    const userService = new UserService();
    const navigate = useNavigate();

    const [allUsers, setAllUsers] = useState([]);
    const [columns, setColumns] = useState([]);

    const handleEditUser = (user : any) => {
        console.log(user);
        navigate('/editUser',{state: user})
    }


    const usersViewColumns = [
        {
            title: 'Serial Number',
            dataIndex: 'serialNumber',
            key: 'serial number',
        },
        {
            title: 'User Id',
            dataIndex: 'id',
            key: 'user id',
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'user name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phone number',
        },
        {
            title: 'User Type',
            dataIndex: 'userType',
            key: 'user type',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (action:any, row:any) => {
                return (
                    <>
                        <EditOutlined style={{ color: "green" }} onClick={()=>handleEditUser(row)} />
                        <DeleteOutlined style={{ color: "red", marginLeft: "10px" }} />
                    </>
                )
            }
        }
    ];


    const fetchAllUsers = () => {
        userService.getAllUsers()
            .then((data: any) => {
                if (data) {
                    let serialNumber = 1;
                    console.log(data);
                    console.log(data.result, "rrrrrrrrrrrrrrrr");
                    setAllUsers(data.result.rows.map((record: any) => ({
                        serialNumber: serialNumber++,
                        id: record.id,
                        name: record.name,
                        email: record.email,
                        password: record.password,
                        phoneNumber: record.phoneNumber,
                        userType: record.userType,
                        status: record.status
                    })));
                }
            })
    }

    useEffect(() => {
        fetchAllUsers();
    }, [])

    const handleUsersComponents = () => {
        navigate('/userForm')
    }

    return (
        <>
            <Card className="timeTrackerCard">
                <Row className='mb-17'>
                    <Col span={12}>
                        <Typography className='headingText'>
                            <strong>
                                Users View
                            </strong>
                        </Typography>
                    </Col>
                    <Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button className='save-btn' onClick={handleUsersComponents}>
                            Add User
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Table
                            dataSource={allUsers}
                            columns={usersViewColumns}
                            pagination={false}
                        />

                    </Col>
                </Row>

            </Card>
        </>
    )
}
