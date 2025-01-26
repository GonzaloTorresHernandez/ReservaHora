import { useDispatch, useSelector } from "react-redux";
import { 
    RootState, 
    toggleModal,
    toggleLogin, 
    toggleRegister,
    loginDefault,
    registerDefault,
    detaultValues,
} from '../store';

export const useGlobalStore = () => {

    const { isModalOpen, isOpenLogin, isOpenRegister }  = useSelector( (state: RootState) => state.global);
    const dispatch = useDispatch();

    const setToggleModal = ():void => {
        dispatch( toggleModal() );
    }

    const setToggleLogin = ():void => {
        dispatch( registerDefault() );
        dispatch( toggleLogin() );
    }

    const setToggleRegister = (): void => {
        dispatch( loginDefault() );
        dispatch( toggleRegister() );
    }


    const setDefault = ():void => {
        dispatch( detaultValues() );
    }
    return {
        //  Props
        isModalOpen,
        isOpenLogin,
        isOpenRegister,

        //  Metodos
        setToggleLogin,
        setToggleRegister,
        setToggleModal,
        setDefault,
    }

}