import React from 'react'
import { FaUserGraduate, FaUserTie } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import "./style.css"
import { Row, Col, Button, Card } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

function ContentHP() {
  return (
    <div>
        <Row justify={"center"}>
            <Col>
                <Row className="row-contentHP">
                    <Col className='col-contentHP-icon'><FaUserGraduate className='icon-contentHP' /></Col>
                    <Col className='col-contentHP'>
                        <p><b style={{fontSize: 17}}>Total Students</b></p>
                        <p>184 Students</p>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row className="row-contentHP">
                    <Col className='col-contentHP-icon'><FaUserTie className='icon-contentHP' /></Col>
                    <Col className='col-contentHP'>
                        <p><b style={{fontSize: 17}}>Total Teachers</b></p>
                        <p>36 Teachers</p>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row className="row-contentHP">
                    <Col className='col-contentHP-icon'><HiUserGroup className='icon2-contentHP' /></Col>
                    <Col className='col-contentHP'>
                        <p><b style={{fontSize: 17}}>Total Staffs</b></p>
                        <p>136 Staffs</p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row justify={"left"}>
            <Col>
                <Card title="ACTIVITIES"  type="inner">
                    <Timeline
                    style={{paddingTop: 20}}
                        mode="alternate"
                        items={[
                        {
                            children: 'Create a services site 2015-09-01',
                        },
                        {
                            children: 'Solve initial network problems 2015-09-01',
                            color: 'green',
                        },
                        {
                            dot: (
                            <ClockCircleOutlined
                                style={{
                                fontSize: '16px',
                                }}
                            />
                            ),
                            children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
                        },
                        {
                            color: 'red',
                            children: 'Network problems being solved 2015-09-01',
                        },
                        {
                            children: 'Create a services site 2015-09-01',
                        },
                        {
                            dot: (
                            <ClockCircleOutlined
                                style={{
                                fontSize: '16px',
                                }}
                            />
                            ),
                            children: 'Technical testing 2015-09-01',
                        },
                        ]}
                    />
                </Card>
            </Col>
        </Row>
        <h1 className='post-h1'>POST</h1>
        <Row className='card-row'>
            <Col className='card-col'>
                <Card className='card'>
                    <img src="https://demos.wrappixel.com/premium-admin-templates/react/materialpro-react/main/static/media/bg1.537e9bd5.jpg" alt="" />
                    <div className='card-body'>
                        <span>March 1, 2022</span>
                        <h4>France national research council has ruled.</h4>
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <Button type='primary'>Read More</Button>
                    </div>
                </Card>
            </Col>
            <Col className='card-col'>
                <Card className='card'>
                    <img src="https://demos.wrappixel.com/premium-admin-templates/react/materialpro-react/main/static/media/bg2.94ab4b60.jpg" alt="" />
                    <div className='card-body'>
                        <span>March 1, 2022</span>
                        <h4>France national research council has ruled.</h4>
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <Button type='primary'>Read More</Button>
                    </div>
                </Card>
            </Col>
            <Col className='card-col'>
                <Card className='card'>
                    <img src="https://demos.wrappixel.com/premium-admin-templates/react/materialpro-react/main/static/media/bg3.5668e1f0.jpg" alt="" />
                    <div className='card-body'>
                        <span>March 1, 2022</span>
                        <h4>France national research council has ruled.</h4>
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <Button type='primary'>Read More</Button>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default ContentHP