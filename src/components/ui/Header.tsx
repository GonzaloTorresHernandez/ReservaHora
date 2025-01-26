import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import { useState } from 'react';
import Login from '../modals/Login';
import Register from '../modals/Register';
import { useDispatch } from 'react-redux';
import { toggleLogin } from '../../store';




const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const dispatch = useDispatch();

    const handleLogin = ():void => {
        dispatch( toggleLogin() );
    }

    return (
        <>
            <header className='bg-dark text-white fixed top-0 left-0 w-full z-50'>
                <nav className='mx-auto flex max-w-7x1 items-center justify-between p-6 lg:px-8'>
                    <div className="flex lg:flex-1">
                        <a href="" className="-m-1.5 p-1.5">
                            <span className="sr-only">Mi empresa</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="m-2.5 inline-flex items-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>

                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Popover className='relative'>
                            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold ">
                                Product
                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-dark ring-1 shadow-lg ring-dark/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="p-4">

                                    <div

                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">

                                        </div>
                                        <div className="flex-auto">
                                            <a href='#' className="block font-semibold ">
                                                Item 1
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">descripcion</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">

                                    <a

                                        href='#'
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold  hover:bg-gray-100"
                                    >
                                        nombre
                                    </a>

                                </div>
                            </PopoverPanel>
                        </Popover>

                        <a href="#" className="text-sm/6 font-semibold ">
                            Features
                        </a>
                        <a href="#" className="text-sm/6 font-semibold ">
                            Marketplace
                        </a>
                        <a href="#" className="text-sm/6 font-semibold ">
                            Company
                        </a>
                    </PopoverGroup >

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" onClick={() => handleLogin() } className="text-sm/6 font-semibold ">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>

                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold  hover:bg-gray-50">
                                            Product
                                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">

                                            <DisclosureButton

                                                as="a"
                                                href='#'
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold  hover:bg-gray-50"
                                            >
                                                nombre
                                            </DisclosureButton>

                                        </DisclosurePanel>
                                    </Disclosure>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-gray-50"
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-gray-50"
                                    >
                                        Marketplace
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-gray-50"
                                    >
                                        Company
                                    </a>
                                </div>
                                <div className="py-6">
                                    <button
                                        onClick={() => handleLogin() }
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold  hover:bg-gray-50"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            {/* <Login isOpenModal={open}/> */}
            <Register />

        </>
    )
}

export default Header
