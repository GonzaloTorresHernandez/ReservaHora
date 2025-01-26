import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useEffect, useState } from "react";

interface Props {
    isOpenModal: boolean;
}

const Login = ({ isOpenModal = false }: Props) => {

    const [open, setOpen] = useState<boolean>(isOpenModal);

    useEffect(() => {
        setOpen(isOpenModal);
    }, [isOpenModal]);

    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-9999">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-sm data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                           
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

                                    {/* Header */}
                                    <DialogTitle as="h3" className="text-xl font-semibold text-gray-900  pb-4 md:pb-5  border-b rounded-t dark:border-gray-600 border-gray-200">
                                        Sign in to our platform
                                    </DialogTitle>

                                    {/* Body */}
                                    <div className="p-4 md:p-5 w-full">
                                        <form className="space-y-4" action="#">

                                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black">
                                                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">Icono</div>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Ingrese su email"
                                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                />
                                            </div>

                                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black">
                                                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">Icono</div>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    placeholder="Ingrese su contraseña"
                                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                />
                                            </div>

                                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                                Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            
                        </div>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default Login;
