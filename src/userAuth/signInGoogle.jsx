import { Loader } from "components";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import { firebaseApp, googleAuthProvider } from "./firebase-init";
import { signOut } from "firebase/auth";
import { LoginBtn, NameUser } from "components/Login/Login.styled";

export const AuthProvider = ({ toggle }) => {
    const auth = getAuth(firebaseApp);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((maybeUser) => {
            if (maybeUser != null) {
                return setUser(maybeUser);
            }

            signInWithPopup(auth, googleAuthProvider)
                .then((credentials) => setUser(credentials.user))
                .catch(e => console.error(e));
        });
        return unsub;
    }, [auth])

    async function signOutUser(e) {
        e.preventDefault();
        console.log('signOutUser');
        toggle();
        try {
            await signOut(getAuth());
        }
        catch (error) {
            console.log(error);
        };

    }

    return user != null
        ? <>
            <NameUser>Hello, {user.displayName}</NameUser>
            <LoginBtn type="button" onClick={signOutUser}>
                Logout
            </LoginBtn>
        </>
        : <Loader />;
};
