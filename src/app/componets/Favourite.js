import React from 'react';
import {AiFillHeart} from "react-icons/ai";
const showCom = () => {
    console.log("Add your favourite Contacts")
};
function Favourite(props) {
    return (
        <div>
            <button
                className="rounded h-20 w-20 flex  text-black items-center bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="*"
                onClick={showCom}
            >
                <AiFillHeart color="orange" size={32}/>
            </button>
        </div>
    );
}

export default Favourite;