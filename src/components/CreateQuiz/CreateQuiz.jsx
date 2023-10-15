import React, {useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber, Select} from 'antd';
import {useGetCategoryQuery} from "../../services/getCategoryApi.js";
import {Link, useNavigate} from "react-router-dom";
import {useGetQuizQuery} from "../../services/createQuizApi.js";
import {useDispatch, useSelector} from "react-redux";
import {useGetUserTokenQuery} from "../../services/createUserApi.js";
import {getQuiz} from "../../store/features/quiz/quizSlice.js";

const {Option} = Select;

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const CreateQuiz = () => {
        const [user, setUser] = useState([]);
        const userToken = useSelector(state => state?.user?.userToken)
        const {data, isSuccess} = useGetCategoryQuery()
        const dispatch = useDispatch()
        const navigate = useNavigate()
        const [form] = Form.useForm();


        const onGenderChange = (value) => {
            switch (value) {
                case 'male':
                    form.setFieldsValue({
                        note: 'Hi, man!',
                    });
                    break;
                case 'female':
                    form.setFieldsValue({
                        note: 'Hi, lady!',
                    });
                    break;
                case 'other':
                    form.setFieldsValue({
                        note: 'Hi there!',
                    });
                    break;
                default:
            }
        };
        const onFinish = async (values) => {
            await dispatch(getQuiz({
                amount: values.amount,
                category: values.category,
                difficulty: values.difficulty,
                token: userToken
            }))
            navigate('/quiz')
        };

        //TODO: add const {data} = useLazyGetQuizQuery(params) in onClick and add in state and add data to localeStorage

        useEffect(() => {
            const userStorage = JSON.parse(localStorage.getItem('persist:user'));
            const storage = JSON.parse(userStorage.user)
            console.log(storage)
            console.log(user)
            if (userStorage) {
                setUser(storage);
            }else if (!user.userName && !user.userToken) {
                navigate('/')
            }
        }, [])

        return (
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '3rem'}}>
                <Form
                    form={form}
                    name="Number of Questions:"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 1000,
                        minWidth: 450
                    }}
                >
                    <Form.Item
                        name="amount"
                        label="Number of Questions:"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <InputNumber value={10}/>
                    </Form.Item>
                    <Form.Item
                        name="category"
                        label="Select Category: "
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a category"
                            onChange={onGenderChange}
                            allowClear
                        >
                            {isSuccess && data.trivia_categories.map((option) => (
                                <Option key={option.id} value={`${option.id}`}>{option.name}</Option>
                            ))}

                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="difficulty"
                        label="Select Difficulty:"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select Difficulty"
                            onChange={onGenderChange}
                            allowClear
                        >
                            <Option value='easy'>Easy</Option>
                            <Option value='medium'>Medium</Option>
                            <Option value='hard'>Hard</Option>

                        </Select>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
;
export default CreateQuiz;