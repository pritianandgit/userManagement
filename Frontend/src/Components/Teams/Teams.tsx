import React from 'react'
import "./teams.css"
import { Card, Row, Col, Typography } from 'antd';


const Teams = () => {
  return (
    <>
      <Card className="teamsCard">
        <Row gutter={[15, 16]}>
          <Col span={24}>
          <Typography className='teamsText'>
              <strong>
                Coming Soon
              </strong>
            </Typography>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Teams;
