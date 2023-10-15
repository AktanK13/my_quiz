import {Link, Outlet} from "react-router-dom";
import {Button, Layout} from 'antd';
import {useSelector} from "react-redux";

const {Header, Footer, Content} = Layout;


export const LayoutComponent = () => {
    const userName = useSelector(state => state.user.userName)

    const defaultStorage = {
        "user": "{\"userName\":\"\",\"userToken\":\"\"}",
        "_persist": "{\"version\":-1,\"rehydrated\":true}"
    }
    const handleLogout = () => {
        localStorage.setItem("persist:user", JSON.stringify(defaultStorage))
    }

    return (
        <div>
            <Layout>
                <Header style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link to='/'>
                        <h5 style={{color: 'white', fontWeight: 'bold'}}>MY_QUIZ</h5>
                    </Link>
                    <h5 style={{color: 'white'}}>
                        {userName ?
                            <>
                                {userName}
                                {/*<Button style={{marginLeft: '1rem', fontSize: '14px', fontWeight: 'bold'}}*/}
                                {/*        onClick={() => handleLogout()}>*/}
                                {/*    Logout*/}
                                {/*</Button>*/}
                            </> : <></>}
                    </h5>

                </Header>
                <Content style={{width: '100%', height: '93vh'}}>
                    <Outlet/>
                </Content>
                {/*<Footer style={{width: '100%', height: '24px', position: 'fixed', right: '0px', bottom: '0px'}}>Footer</Footer>*/}
            </Layout>
        </div>
    );
}

export default LayoutComponent
