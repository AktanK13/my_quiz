import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

import {useSelector} from "react-redux";
import {useGetQuizQuery} from "../../services/createQuizApi.js";
import StepComponent from "../Steps/StepsComponent.jsx";

const Quiz = () => {
    const [quiz, setQuiz] = useState()
    const navigate = useNavigate();

    const name  = useSelector(state=> state.user.userName)
    const token  = useSelector(state=> state.user.userToken)
    const params = useSelector(state => state.quiz.quiz)

    const {data} = useGetQuizQuery(params)


    console.log(data, 'quiz')

    useEffect(() => {
        setQuiz(data?.results)
    },[data])

    if (!token && !name) {
        navigate('/')
    }
    return (
        <div style={{width: '90%', margin: '50px auto', display: 'flex', flexDirection: 'column'}}>
            <StepComponent data={quiz}/>
        </div>
    );
};

export default Quiz;