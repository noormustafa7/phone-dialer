import React from 'react';
import {BiArrowBack, BiSolidContact, BiSolidPhoneCall} from "react-icons/bi";
import {MdCallEnd} from "react-icons/md";
const showCom = () => {
    console.log("It's a phone Book")
};
function PhoneBook(props) {
    return (
        <div>
            <button
                className="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="/"
                onClick={showCom}
            >
                <BiSolidContact color="black" size={32}/>
            </button>
        </div>
    );
}

export default PhoneBook;