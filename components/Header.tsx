import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header = ({}) => {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex flex-row items-center space-x-2">
                <Link href="/">
                    <Image
                        className="rounded-full"
                        src="https://yt3.ggpht.com/IQ4OqurVrPmACaf3h5fgTcRInn6QoHz0xN4O5qzhuhY7UKgpDg2A4mGyhWW5vcaGSiVbf_FLdQ=s900-c-k-c0x00ffffff-no-rj"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </Link>
                    <h1>Rokas Rudzianskas</h1>
            </div>
            <div className="">
                <Link className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7AB0A] flex items-center rounded-full text-center" href={'https://www.byrookas.com'}>
                    Sign up to byRookas university of code
                </Link>
            </div>
        </header>
    );
};

export default Header;
// by Rokas with ❤️
