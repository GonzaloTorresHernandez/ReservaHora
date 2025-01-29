const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <main className="flex items-center justify-center h-screen">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    {children}
                </div>
            </main>
        </>
    )
}

export default AuthLayout;
