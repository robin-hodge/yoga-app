const LoginForm = () => {
    return (
        <div className="flex flex-row justify-center text-start">
            <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label classNamee="block text-gray-700 text-sm font-bold mb-2" for="username">Username:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" name="username" placeholder="Username" />
                </div>
                <div className="mb-6">
                <label classNasme="block text-gray-700 text-sm font-bold mb-2"for="password">Password:</label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" id="password" name="password" placeholder="***********" />
                </div>
                <input className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit" value="login" />
            </form>
        </div>
    )
}

export default LoginForm