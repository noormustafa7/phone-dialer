import React from 'react';
import {PiClockCounterClockwiseBold} from "react-icons/pi";
const showCom = () => {
    console.log("Add favourite List")
};
function Recents(props) {
    return (
        <div>
            <button
                className="rounded h-20 w-20 flex items-center text-black  bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name=")"
                onClick={showCom}
            >
                <PiClockCounterClockwiseBold size={32} />
            </button>
        </div>
    );
}

export default Recents;