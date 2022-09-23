import React from 'react'
import { Card, Popover } from 'antd';
import '../css/right.css'

const RightSidebar = () => {
    const { Meta } = Card;
    const content = (

        <Card
            hoverable
            style={{
                width: 200,
                // height: 250,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Dayana Gouveia" description="www.instagram.com" />
        </Card>

    );
    return (
        <div className='widget '>
            <h4>Soy un cumpleaños</h4>
            <div className='row'>

                <div className='col-6 mt-3'>
                    <Popover content={content} title="03 de enero 🥳🎉" >
                        <Card
                            hoverable
                            style={{
                                width: 120,
                                height: 250,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width: '118px' }} />}
                        >
                            <Meta title="Dayana Gouveia" description="www.instagram.com" />
                        </Card>
                    </Popover>
                </div>
                <div className='col-6 mt-3'>
                    <Popover content={content} title="03 de enero 🥳🎉" >
                        <Card
                            hoverable
                            style={{
                                width: 120,
                                height: 250,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width: '118px' }} />}
                        >
                            <Meta title="Dayana Gouveia" description="www.instagram.com" />
                        </Card>
                    </Popover>
                </div>
                <div className='col-6 mt-3'>
                    <Popover content={content} title="03 de enero 🥳🎉" >
                        <Card
                            hoverable
                            style={{
                                width: 120,
                                height: 250,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width: '118px' }} />}
                        >
                            <Meta title="Dayana Gouveia" description="www.instagram.com" />
                        </Card>
                    </Popover>
                </div>
                <div className='col-6 mt-3'>
                    <Popover content={content} title="03 de enero 🥳🎉" >
                        <Card
                            hoverable
                            style={{
                                width: 120,
                                height: 250,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width: '118px' }} />}
                        >
                            <Meta title="Dayana Gouveia" description="www.instagram.com" />
                        </Card>
                    </Popover>
                </div>
               
            </div>
        </div>
    )
}

export default RightSidebar