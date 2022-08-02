import styles from '/styles/Login.module.css'
import eyeIcon from '/public/images/eye-icon.svg'
import Image from 'next/image'
const Login = () => {
    return (
        <div className="p-20">
            <h2 className='font-bold text-4xl my-4'>TIX ID</h2>
            <form className="w-[423px] my-16">
                <div className="mb-4">
                    <label className="block text-shade900 text-lg font-normal mb-2" htmlFor="phone_number">
                        PHONE NUMBER
                    </label>
                    <div className={styles.phoneInputBox}>
                        <span className="prefix">+91</span>
                        <span className="h-[18px] border-[1px]"/>
                        <input id="phone_number" type="text" placeholder="enter phone number here"/>

                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-shade900 text-lg font-normal mb-2" htmlFor="password">
                        PASSWORD
                    </label>
                    <div className={styles.phoneInputBox}>
                    <input id="password" type="password" placeholder="enter password here"/>
                    <Image src={eyeIcon} />
                    </div>
                    {/*<p className="text-red-500 text-xs italic">Please choose a password.</p>*/}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-royalBlue hover:bg-btnHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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