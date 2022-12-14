import React from 'react';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';

const StudioNavbar = (props: any) => {
    return (
        <div>
            <div>
                <Link href={'/'} className="text-[#f7AB0A] flex items-center">
                    Go To Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    );
};

export default StudioNavbar;
// by Rokas with ❤️
