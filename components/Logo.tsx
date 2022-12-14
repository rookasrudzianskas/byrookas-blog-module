import React from 'react';
import Image from "next/image";

const Logo = (props: any) => {
    const { renderDefault, title } = props;
    return (
        <div className="flex items-center space-x-2">
            <Image
                src="https://yt3.ggpht.com/IQ4OqurVrPmACaf3h5fgTcRInn6QoHz0xN4O5qzhuhY7UKgpDg2A4mGyhWW5vcaGSiVbf_FLdQ=s900-c-k-c0x00ffffff-no-rj"
                 className="rounded-full ml-3 object-cover"
                 height={50}
                 width={50}
                 alt="Logo"
            />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    );
};

export default Logo;
// by Rokas with ❤️
