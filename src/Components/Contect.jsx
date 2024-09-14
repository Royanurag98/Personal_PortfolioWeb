import React from "react";
import Call from '../assets/call.gif'
import location from '../assets/location.gif'
import mail from '../assets/gmail-logo.gif'

function Contect() {
  return (
    <>
      <div id ="contactSection" className="border-2 border-solid border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-0 justify-items-center ">
        <div className="border-2 border-solid bg-blue-950 border-gray-700 rounded-2xl p-5 m-5">
          <div className=" ">
            <h1 class="text-xl font-bold mb-4 text-[aqua]">
              Let's Work Together!
            </h1>
            <p class=" mb-6 text-white text-sm">
              I create a elegantly simple designs and code with passion it's as
              straight forword as that
            </p>
          </div>
          <form action="#" method="POST" class=" p-2 ">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* <!-- First Name and Last Name --> */}

              <div class="flex flex-col">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder=" First Name"
                  class="border bg-[#081b29]  border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div class="flex flex-col  ">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder=" Last Name"
                  class="border bg-[#081b29] border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 ">
              {/* <!-- Email and Phone Number --> */}
              <div class="flex flex-col">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  class="border bg-[#081b29] border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div class="flex flex-col">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=" Phone Number"
                  class="border bg-[#081b29] text-white border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div class="flex flex-col pt-4">
              <select
                id="selection"
                name="selection"
                placeholder=" Select Option"
                class="border bg-[#081b29]  text-gray-400 border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="flex flex-col pt-4 ">
              <textarea
                name="msg"
                id="msg"
                placeholder="Message"
                className="rounded-lg bg-[#081b29] border-none h-full min-h-[100px] w-full text-white p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              class=" bg-[#081b29] text-white px-4 py-2 mt-4 rounded-xl  font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>

        <div className=" rounded-2xl p-5 m-5 flex flex-col md:justify-center md:items-center  ">
          <ul role="list" class="py-6  ">
            <li class="flex py-2  ">
              <div className="size-10 rounded-full border flex justify-center items-center bg-white">
                <img src={Call} alt="" 
                 className="size-8 p-1" />
                
              </div>
              <div class="ml-3 overflow-hidden">
                <p class="text-sm font-medium text-white">Phone</p>
                <p class="text-sm font-medium text-white"> +91 9123295088</p>
              </div>
            </li>
          </ul>

          <ul role="list" class="py-6 divide-y divide-slate-200">
            <li class="flex ">
              <div className="size-10 rounded-full border flex justify-center items-center bg-white">
                 <img src={mail} alt="" 
                 className="size-8 p-1" />
              </div>
              <div class="ml-3 overflow-hidden">
                <p class="text-sm font-medium text-white">Email</p>
                <p class="text-sm font-medium text-white">
                  anu.wizard.techno98@gmail.com
                </p>
              </div>
            </li>
          </ul>

          <ul role="list" class="py-6 divide-y divide-slate-200">
            <li class="flex py-4 first:pt-0 last:pb-0">
              <div className="size-10 rounded-full border flex justify-center items-center bg-white">
              <img src={location} alt="" 
                 className="size-8 p-1" />
              </div>

              <div class="ml-3 overflow-hidden">
                <p class="text-sm  text-white">Address</p>
                <p class="text-sm font-medium text-white">Delhi NCR India</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contect;
