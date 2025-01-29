import { useDispatch, useSelector } from "react-redux"
import { onLogin, onLogout, RootState } from "../store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

export const useAuthStore = () => {

    const dispatch = useDispatch();
    const { status } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {

            if (!user) return dispatch(onLogout());

            const { uid, email, displayName, photoURL } = user;
            dispatch( onLogin({uid, email, displayName, photoURL}));

        });
    }, []);


    return {
        status,
    }
}