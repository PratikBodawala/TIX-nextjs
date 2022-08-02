import styles from '/styles/Login.module.css'
import eyeIcon from '/public/images/eye-icon.svg'
import Image from 'next/image'
const Login = () => {
    return (
        <div className="p-20">
            <h2 className='font-bold text-4xl my-4'>TIX ID</h2>
            <form className="w-[423px] my-16">
                <div className="mb-4">
                    <label className="block text-shade900 text-lg font-normal mb-2 uppercase" htmlFor="phone_number">
                        Phone number
                    </label>
                    <div className={styles.phoneInputBox}>
                        <span className="prefix">+91</span>
                        <span className="h-[18px] border-[1px]"/>
                        <input id="phone_number" type="text" placeholder="enter phone number here"/>

                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-shade900 text-lg font-normal mb-2 uppercase" htmlFor="password">
                        Password
                    </label>
                    <div className={styles.phoneInputBox}>
                    <input id="password" type="password" placeholder="enter password here"/>
                    <Image src={eyeIcon} />
                    </div>
                    {/*<p className="text-red-500 text-xs italic">Please choose a password.</p>*/}
                </div>
                <div className="flex flex-col items-center justify-between mt-16">
                    <button
                        className="bg-royalBlue hover:bg-btnHover text-white text-xl font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full uppercase"
                        type="button">
                        Login
                    </button>
                    <span className="text-xs mt-6 text-shade600">don&apos;t have account?</span>
                    <button className="mt-2 font-default text-royalBlue rounded border-[1px] border-shade600 text-xl font-medium w-full h-12">Create account</button>
                </div>
            </form>

        </div>)
}
export default Login