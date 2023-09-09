import React from 'react'
import {PiClockCounterClockwiseBold} from "react-icons/pi";
import {AiFillLock} from "react-icons/ai";
const showCom = () => {
    console.log("Secret Contacts")
};
export default function SecretContact() {
    return (
        <button
            className="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
            onClick={showCom}
        >
            <AiFillLock size={32}/>
        </button>
    )
}
