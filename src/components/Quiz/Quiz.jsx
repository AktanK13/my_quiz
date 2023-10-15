import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {useSelector} from "react-redux";
import {useGetQuizQuery} from "../../services/createQuizApi.js";
import StepComponent from "../Steps/StepsComponent.jsx";

const Quiz = () => {
    const [quiz, setQuiz] = useState()
    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    const params = useSelector(state => state.quiz.quiz)

    const {data} = useGetQuizQuery(params)



    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('persist:user'));
        const storage = JSON.parse(user.user)

        if (user) {
            setUser(user);
        }
        if (!storage.userName && !storage.userToken) {
            navigate('/')
        }
        if (data) {
            setQuiz(data?.results)
        }
    }, [])


    return (
        <div style={{width: '90%', margin: '50px auto', display: 'flex', flexDirection: 'column'}}>
            <StepComponent data={quiz}/>
        </div>
    );
};

export default Quiz;