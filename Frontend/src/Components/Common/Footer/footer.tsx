import React from 'react'
import { Row, Col, Typography } from 'antd';
import './footer.css';

export const Footer = () => {
    return (
        <>
            <Row className='footer'>
                <Col span={24} style={{ display : 'flex', justifyContent : 'center', alignItems: 'center'}}>
                    <Typography className='footerText'>
                        <strong>
                            Footer
                        </strong>
                    </Typography>
                </Col>
            </Row>
        </>
    )
}
