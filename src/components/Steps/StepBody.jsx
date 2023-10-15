import React from 'react';
import {Button, message, theme} from "antd";

const StepBody = ({current, setCurrent, data}) => {
    const {token} = theme.useToken();

    // const newData = data?.map((item) => {
    //     return {...item, isCorrect: 'unknown'}
    // })
    // function changeColor() {
    //     console.log(newData,newData[current]?.isCorrect, 'change')
    //     if (newData[current]?.isCorrect === 'correct') {
    //         return "green"
    //     } else if (newData[current]?.isCorrect === 'incorrect') {
    //         return "red"
    //     }else if (newData[current]?.isCorrect === 'unknown') {
    //         return "white"
    //     }
    // }
    const next = () => {
         setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const shuffle = (array) => {
        let currentIndex = array.length;
        let randomIndex;

        if (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    };
    const Answers = ({children}) => {
        const Options = React.Children.toArray(children);
        return <div className="answers">{shuffle(Options)}</div>;
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color: '#000',
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    // TODO: add done to last answer

    return (
        <div style={{width: '90%', display: 'flex', flexDirection: 'column'}}>
            <div style={contentStyle}>
                <h3 style={{fontSize: '1rem', fontWeight: 'bold', margin: '4rem 1rem'}}>
                    {data && data[current]?.question?.replace(/&quot;/g, '"')?.replace(/&#039;/g, "'")}
                </h3>
                <Answers>
                    <Button onClick={() => {
                        next()
                    }}>
                        {data && data[current]?.correct_answer?.replace(/&quot;/g, '"')?.replace(/&#039;/g, "'")}
                    </Button>
                    {
                        data && data[current]?.incorrect_answers?.map((answer) => (
                            <Button danger={false}>
                                {answer?.replace(/&quot;/g, '"')?.replace(/&#039;/g, "'")}
                            </Button>
                        ))
                    }
                </Answers>
            </div>
            <div
                style={{
                    marginTop: 24,
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
                {current < data?.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === data?.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}

            </div>
        </div>
    );
};


export default StepBody;