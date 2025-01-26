import { useDispatch, useSelector } from "react-redux";
import { 
    RootState, 
    toggleModal,
    openLogin,
    closeLogin,
    openRegister,
    closeRegister,
    detaultValues,
} from '../store';

export const useGlobalStore = () => {

    const { isModalOpen, isOpenLogin, isOpenRegister }  = useSelector( (state: RootState) => state.global);
    const dispatch = useDispatch();

    const setToggleModal = ():void => {
        dispatch( toggleModal() );
    }

    const setOpenLogin = ():void => {
        dispatch( closeRegister() );
        dispatch( openLogin() );
    }

    const setOpenRegister = (): void => {
        dispatch( closeLogin() );
        dispatch( openRegister() );
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
        setOpenLogin,
        setOpenRegister,
        setToggleModal,
        setDefault,
    }

}