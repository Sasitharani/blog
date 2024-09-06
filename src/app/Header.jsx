import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div>
        <div className="setbg">
          <div className="rounded mx-auto py-4 relative px-4 sm:sticky top-0 text-xl justify-between flex text-[white] bg-violet-700">
            <h1 className="text-[#45ce55] text-2xl ml-2 sm:ml-0 font-extrabold">
              Blog-<span className="text-[#ff4d00]">st</span>
            </h1>
            <div className="sm:block">
              <ul className="flex text-lg gap-16 cursor-pointer">
                <Link href="/">
                  <li className="hover:text-[#45ce55] font-bold capitalize">
                    blog
                  </li>
                </Link>
                <Link href="/add">
                  <li className="hover:text-[#45ce55] font-bold capitalize">
                    Create
                  </li>
                </Link>
                <Link href="/test">
                  <li className="hover:text-[#45ce55] font-bold capitalize">
                    Test Page
                  </li>
                </Link>
                <li>
                  <Link href="/login">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:hidden myshadow font-bold top-[66px] duration-75 w-[40%] bg-white text-black h-[100vh] absolute block left-[-100%]">
              <ul className="flex flex-col text-lg gap-20 pt-10 items-center cursor-pointer">
                <Link href="/">
                  <li className="hover:text-[#45ce55] hover:font-bold capitalize">
                    blog
                  </li>
                </Link>
                <Link href="/add">
                  <li className="hover:text-[#45ce55] hover:font-bold capitalize">
                    create
                  </li>
                </Link>
                <Link href="/listing">
                  <li className="hover:text-[#45ce55] hover:font-bold capitalize">
                    listing
                  </li>
                </Link>
                <li>
                  <Link href="/user">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
