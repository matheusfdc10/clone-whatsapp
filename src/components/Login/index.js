import { LoginStyle } from "./style";
import api from '../../api.js'

const Login = ({onReceive}) => {

    const handleGoogleLogin = async () => {
        let result = await api.fbPopup();
        if(result) {
            onReceive(result.user._delegate)
        } else {
            alert('ERRO!')
        }
    }

    return (
        <LoginStyle>
            <button onClick={handleGoogleLogin}>Logar com Google</button>
        </LoginStyle>
    )
}

export default Login;