import React from 'react';
import {BiArrowBack, BiSolidPhoneCall} from "react-icons/bi";
const showCom = () => {
    console.log("Calling")
};
function Call(props) {
    return (
        <div>
            <button
                className="rounded h-20 w-20 flex items-center text-black  bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="("
                onClick={showCom}
            >
                <BiSolidPhoneCall color="green" size={32}/>
            </button>
        </div>
    );
}

export default Call;