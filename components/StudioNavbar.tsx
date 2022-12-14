import React from 'react';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';

const StudioNavbar = (props: any) => {
    return (
        <div>
            <div className="flex items-center justify-between  p-5">
                <Link href={'/'} className="text-[#f7AB0A] flex items-center">
                    <ArrowUturnLeftIcon className="h-6 w-6 text-[#f7ab0a] mr-2" />
                    Go To Website
                </Link>

                <div className="hidden md:flex p-5 rounded-lg justify-center border border-2 border-[#f7AB0A]">
                    <h1 className="font-bold text-white">
                        Do not forget to join the byRookas university! 👉
                    </h1>
                    <Link className="text-[#f7AB0A] font-bold ml-2" href={'https://www.byrookas.com'}>
                        www.byrookas.com/join
                    </Link>
                </div>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    );
};

export default StudioNavbar;
// by Rokas with ❤️
