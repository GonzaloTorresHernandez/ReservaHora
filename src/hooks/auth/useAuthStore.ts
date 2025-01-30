import { useDispatch, useSelector } from "react-redux"
import { onLogin, onLogout, onChecking, RootState, AppDispatch } from "../../store";
import { logoutFirebase, registerUserWithEmailPassword, signInEmailPassword } from "../../firebase/providers";

interface RegisterUser {
    email: string;
    password: string;
    displayName: string;
}

interface LoginUser {
    email: string;
    password: string;
}

export const useAuthStore = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { status, user, errorMessage } = useSelector((state: RootState) => state.auth);

    /// Registrar usuario
    const startCreatingUserWithEmailPassword = async ({ email, password, displayName }: RegisterUser): Promise<void> => {
        dispatch(onChecking());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        if (!ok) {
            dispatch(onLogout({ errorMessage }));
            return;
        }

        dispatch(onLogin({ uid, displayName, email, photoURL }));
    }

    /// Iniciar Sesion
    const startSignInWithEmailPassword = async ({ email, password }: LoginUser): Promise<void> => {
        dispatch(onChecking());

        const { ok, uid, photoURL, errorMessage, displayName } = await signInEmailPassword({ email, password });
        if (!ok) {
            dispatch(onLogout({ errorMessage }));
            return;
        }

        dispatch(onLogin({ uid, displayName, email, photoURL }));
    }

    /// Cerrar Sesion
    const startLogout = async (): Promise<void> => {
        await logoutFirebase();

        dispatch(onLogout({}));
    }


    return {
        //  Propiedades
        status,
        user,
        errorMessage,

        //  Metodos
        startCreatingUserWithEmailPassword,
        startSignInWithEmailPassword,
        startLogout,
    }
}