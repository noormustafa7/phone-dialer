import React, {useContext, useState} from "react";
import { BiArrowBack } from "react-icons/bi";
import SliderIcons from "@/app/componets/SliderIcons";
import Call from "@/app/componets/Call";
import CallDeclined from "@/app/componets/CallDeclined";
import PhoneBook from "@/app/componets/PhoneBook";
import Favourite from "@/app/componets/Favourite";
import Recents from "@/app/componets/Recents";
import AddContact from "@/app/componets/AddContact";
import SecretContact from "@/app/componets/SecretContact";
import {ShowComContext} from "@/app/context/ShowCom";

const Dialer = () => {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");
const counterState = useContext(ShowComContext);
console.log("Context", counterState)

  const updateCal = (e) => {
    setCal(cal + e.target.name); // Use '+' to concatenate strings
  };



  const clear = () => {
    setCal("");
    setResult("");
  };

  const results = () => {
    try {
      setResult(eval(cal).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
      <div class="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-[#000000] shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
        <div class="">
          <div class="p-5 text-white text-center text-3xl bg-[#04387A]-900">
            Phone Pad
          </div>
          <div class="pt-16 p-5 pb-0 text-salate-200 text-right text-3xl bg-[#fff]">
            {cal || 0} {counterState.context}
          </div>
          <div class="p-5 text-white text-right text-3xl bg-[#463636]">
            <span class="text-orange-500">{result || ""}</span>
          </div>
          <div className="scrollicons hidden show">
            <SliderIcons/>
          </div>


          <div class="flex hideTopline items-stretch bg-[#463636] custom-display h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex text-black items-center bg-white text-salate justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  onClick={clear}
              >
                <BiArrowBack size={32} />
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <Call/>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <CallDeclined/>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
             <PhoneBook/>
            </div>
          </div>

          <div class="flex items-stretch bg-[#463636] h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="7"
                  onClick={updateCal}
              >
                7
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="8"
                  onClick={updateCal}
              >
                8
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="9"
                  onClick={updateCal}
              >
                9
              </button>
            </div>

            <div class="flex-1 hideTopline px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">

              <Favourite/>
            </div>
          </div>

          <div class="flex items-stretch bg-[#463636] h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="4"
                  onClick={updateCal}
              >
                4
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="5"
                  onClick={updateCal}
              >
                5
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="6"
                  onClick={updateCal}
              >
                6
              </button>
            </div>

            <div class="flex-1 px-2 hideTopline py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded  h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="-"
                  onClick={updateCal}
              >
                  <Recents/>
              </button>
            </div>
          </div>

          <div class="flex items-stretch bg-[#463636] h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="1"
                  onClick={updateCal}
              >
                1
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="2"
                  onClick={updateCal}
              >
                2
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="3"
                  onClick={updateCal}
              >
                3
              </button>
            </div>

            <div class="flex-1 hideTopline px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
             <AddContact/>
            </div>
          </div>

          <div class="flex items-stretch bg-[#463636] h-24 ">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black  bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="+"
                  onClick={updateCal}
              >
                +
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="0"
                  onClick={updateCal}
              >
                0
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="-"
                  onClick={updateCal}
              >
                -
              </button>
            </div>

            <div class="flex-1 px-2 hideTopline py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <SecretContact/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dialer;
