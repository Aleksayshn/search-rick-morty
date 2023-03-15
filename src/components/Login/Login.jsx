import { useToggle } from "../../hooks/useToggle";
import { AuthProvider } from 'userAuth/signInGoogle';
import { LoginBtn } from './Login.styled';


export const Login = () => {
    const { isOpen, toggle } = useToggle();
    return (
        <>
            {!!isOpen && <LoginBtn type="button"
                onClick={toggle}>Login</LoginBtn>}
            {!isOpen && <AuthProvider toggle={toggle} />}
        </>
    );
};

