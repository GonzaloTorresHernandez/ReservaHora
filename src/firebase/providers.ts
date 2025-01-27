import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { FirebaseAuth } from "./config";

interface RegisterUserParams {
    email: string;
    password: string;
    displayName: string;
}

interface UserResponse {
    ok: boolean;
    uid?: string;
    photoURL?: string | null;
    email?: string;
    displayName?: string | null;
    errorMessage?: string;
}

interface SignInUserParams {
    email: string;
    password: string;  
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }: RegisterUserParams): Promise<UserResponse> => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        const user = FirebaseAuth.currentUser;
        if (!user) {
            return {
                ok: false,
                errorMessage: 'No hay un usuario autenticado',
            }
        }

        // actualizar registro de firebase
        await updateProfile(user, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName,
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: (error as Error).message
        }
    }
}

export const signInEmailPassword = async ({ email, password }: SignInUserParams): Promise<UserResponse> => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName,
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: (error as Error).message
        }
    }
}

export const logoutFirebase = async (): Promise<void> => {
    return await FirebaseAuth.signOut();
}