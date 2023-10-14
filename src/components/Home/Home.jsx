import CreateUser from "../CreateUser/CreateUser.jsx";
import CreateQuiz from "../CreateQuiz/CreateQuiz.jsx";
import {useSelector} from "react-redux";

export const Home = () => {
    const user = useSelector((state) => state.user)
    return (
        <>
            {
                user.userName || user.userToken ?
                    <CreateQuiz/> :
                    <CreateUser/>
            }
        </>
    );
}

export default Home