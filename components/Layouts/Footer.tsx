import React, {Component} from "react";
import Image from 'next/future/image'
import logoImage from "/public/images/tix-id-1.png";
import igIcon from '/public/images/instagram.svg'
import twIcon from '/public/images/twitter.svg'
import fbIcon from '/public/images/facebook.svg'
import googlePlay from '/public/images/Google-Play.webp'
import appStore from '/public/images/App-Store.webp'

class Footer extends Component {
    render() {
        return (
            <footer className="bottom-0 bg-white dark:bg-gray-900 w-full">
                <div className="flex py-8 px-16 w-full">
                    <div className="w-full">
                        <Image src={logoImage} alt={'Logo of TIX ID'} style={{verticalAlign: 'middle'}} height={65}
                               width={130}/>
                    </div>
                    <div className="w-full">
                        <h5 className="mb-6 font-medium text-lg text-shade900">Perusahaan</h5>
                        <ul className="text-gray-500 dark:text-gray-400 text-base">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Kontak Kami</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Tentang</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Partner</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-6 font-medium text-lg text-shade900">Seputar</h4>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">TIX ID News</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Bioskop</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Tiket Saya</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Pembayaran</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Cililan</a>
                            </li>
                        </ul>
                    </div>
                    <div  className="w-full">
                        <h4 className="mb-6 font-medium text-lg text-shade900">Dukungan</h4>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Pusat Bantuan</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Kebijakan Privasi</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">FAQ</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Syarat dan Ketentuan</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Update Covid-19</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-6 font-medium text-lg text-shade900">Follow Social
                            Media</h4>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="flex mb-11 gap-x-[22px]">
                                <Image src={igIcon} alt={'Icon of Instagram'}/>
                                <Image src={twIcon} alt={'Icon of Twitter'}/>
                                <Image src={fbIcon} alt={'Icon of Facebook'}/>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="hover:underline">Download Aplikasi TIX ID</a>
                            </li>
                            <li className="flex mb-9 space-between">
                                <Image src={googlePlay} alt={'Get it on Google Play'}/>
                                <Image src={appStore} alt={'Get it on App Store'}/>
                            </li>
                            <li className="mb-4 text-xs">
                                <a href="#" className="hover:underline">2021 TIX ID - PT Nusantara Elang Sejahtera.</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;