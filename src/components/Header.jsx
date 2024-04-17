import { useState, useEffect } from "react"

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])


    return (
        <header className="bg-very-pale-blue-top dark:bg-very-dark-blue-top p-[45px_25px_83px_25px] rounded-b-3xl max-w-[1440px] mx-auto md:flex items-start justify-between">
            <div>
             <h1 className="text-very-dark-blue-text dark:text-white font-bold text-2xl">Social Media Dashboard</h1>
             <p className="text-dark-grayish-blue-text dark:text-desatured-blue-text font-bold text-sm mb-4">Total Followers: 23,004</p>
            <hr className="border-dark-grayish-blue-text mb-4 md:hidden" />
            </div>
            <div class="flex items-center justify-between md:justify-start gap-4">
                <p class="text-dark-grayish-blue-text dark:text-desatured-blue-text font-bold text-sm">Dark Mode</p>

                <label className="w-12 h-6 p-[2px] bg-toggle-light rounded-full cursor-pointer relative">
                    <input onClick={handleClick} type="checkbox" className="sr-only peer" />
                    <div className="w-full h-full peer-checked:bg-dark-toggle rounded-full absolute top-0 left-0 "></div>
                    <div className="w-5 h-5 bg-light-grayish-blue-card dark:bg-very-dark-blue-text rounded-full transition-all duration-300 peer-checked:translate-x-6"></div>
                </label>

            </div>
        </header>
    )
}