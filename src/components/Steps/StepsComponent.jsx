import React, {useState} from 'react';
import {Button, Steps} from 'antd';
import StepBody from "./StepBody.jsx";
import { ArrowLeftOutlined } from '@ant-design/icons'
import {useNavigate} from "react-router-dom";

const StepComponent = ({data: steps}) => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate()
    const items = steps?.map((item) => ({
        key: steps?.indexOf(item),
    }));

    return (
        <>
            <div>
                <Button style={{marginBottom: '2rem'}} onClick={() => navigate('/')}><ArrowLeftOutlined/></Button>
            </div>
            <div style={{display: 'flex'}}>
                <Steps direction="vertical" current={current} items={items} style={{maxWidth: '10%'}}/>
                <StepBody current={current} setCurrent={setCurrent} data={steps}/>
            </div>
        </>
    );
};
export default StepComponent;
