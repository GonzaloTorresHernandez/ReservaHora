import { useDispatch, useSelector } from "react-redux"
import { onLogin, onLogout, RootState, AppDispatch } from "../../store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../../firebase/config";

export const useCheckAuth = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { status } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {

            if (!user) return dispatch(onLogout({}));

            const { uid, email, displayName, photoURL } = user;
            dispatch(onLogin({ uid, email, displayName, photoURL }));

        });
    }, []);

    return {
        //  Propiedades
        status,
    }
}