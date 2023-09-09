import React from 'react';
import {BiArrowBack, BiSolidPhoneCall} from "react-icons/bi";
import {MdCallEnd} from "react-icons/md";
const showCom = () => {
    console.log("Call Cut")
};
function CallDeclined(props) {
    return (
        <div>
            <button
                className="rounded h-20 w-20 flex items-center text-black  bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name=")"
                onClick={showCom}
            >
                <MdCallEnd color="red" size={32}/>
            </button>
        </div>
    );
}

export default CallDeclined;