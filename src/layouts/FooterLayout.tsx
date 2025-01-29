

const FooterLayout = () => {
    return (
        <footer className='bg-dark text-white fixed bottom-10 left-0 w-full z-50 border-t border-gray-700'>
            <div className="flex flex-wrap justify-between items-center p-4">
                <p className="read-the-docs text-sm sm:text-base md:text-lg">&copy; 2025 Desarrollado por Gonzalo Torres</p>
                <div className="flex flex-wrap gap-4 sm:flex-row read-the-docs">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        twitter
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                        inta
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        github
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        linkedin
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default FooterLayout;
