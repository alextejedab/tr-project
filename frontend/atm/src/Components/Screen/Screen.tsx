import ButtonScreen from '../ButtonScreen/ButtonScreen'
import TopScreen from '../TopScreen/TopScreen'
import './Screen.scss'

const LoginScreen = () =>
{
    return (
        <div className="screen">
            <TopScreen/>
            <ButtonScreen/>
        </div>
    )
}

export default LoginScreen