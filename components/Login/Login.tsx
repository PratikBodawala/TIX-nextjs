import styles from '/styles/Login.module.css'
const Login = () => {
    return(
    <div className="p-20">
        <h2 className='font-bold text-4xl my-4'>TIX ID</h2>
            <form className="w-[423px]">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_number">
                        PHONE NUMBER
                    </label>
                    <div className={styles.phoneInputBox}>
                        <span className="prefix">+91</span>
                        <input
                        className="phone-input-box shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone_number" type="text" placeholder="enter phone number here"/>

                    </div>
                    </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        PASSWORD
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="enter password here"/>
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-btnPrimary hover:bg-btnHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        LOGIN
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                       href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>

    </div>)
}
export default Login