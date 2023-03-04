import { LoginStyle } from "./style";
import api from '../../api.js'

const Login = ({onReceive}) => {

    const handleFacebookLogin = async () => {
        let result = await api.fbPopup();
        if(result) {
            onReceive(result.user._delegate)
        } else {
            alert('ERRO!')
        }
    }

    return (
        <LoginStyle>
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </LoginStyle>
    )
}

export default Login;