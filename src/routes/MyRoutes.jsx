import {Route, Routes} from "react-router-dom";
import LayoutComponent from "../components/Layout/LayoutComponent.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";
import Home from "../components/Home/Home.jsx";
import CreateQuiz from "../components/CreateQuiz/CreateQuiz.jsx";
import Quiz from "../components/Quiz/Quiz.jsx";


export const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutComponent/>}>
                <Route index element={<Home />}/>
                <Route path="/quiz" element={<Quiz/>}/>
                <Route path="*" element={<NotFound/>} />
            </Route>
        </Routes>
    )
}