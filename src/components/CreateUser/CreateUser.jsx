import React, {useState} from 'react';
import {Button, Modal, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {createToken, createUser} from "../../store/features/user/userSlice.js";
import {useGetUserTokenQuery} from "../../services/createUserApi.js";

export const CreateUser = () => {
    const [form] = Form.useForm()

    const {data, isLoading, isSuccess} = useGetUserTokenQuery()
    const userName = useSelector((state) => state.user.userName)
    const dispatch = useDispatch()


    const onFinish = (values) => {
        console.log(values.username, "user")
        dispatch(createUser(values.username))
        dispatch(createToken(data.token))
        form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    if (!userName || !data.token) {
        return (
            <div>
                <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '5rem', fontSize: '1.5rem', fontWeight: 'bold'}}>Type your name</h1>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '3rem',}}>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 900,
                        minWidth: 450,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                </div>
            </div>
        );
    }

};
export default CreateUser;
