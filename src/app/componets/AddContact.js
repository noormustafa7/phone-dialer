import React from 'react';
import {BsPersonFillAdd} from "react-icons/bs";
const showCom = () => {
    console.log("Add Number")
};
function AddContact(props) {
    return (
        <div>
            <button
                className="rounded h-20 w-20 flex text-black items-center bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="+"
                onClick={showCom}
            >
                <BsPersonFillAdd size={32}/>
            </button>
        </div>
    );
}

export default AddContact;