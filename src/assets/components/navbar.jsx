import React from "react";
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
function Navbar(){
    return (
        <nav className="bg-slate-900 p-2 flex justify-around">
            <div className="flex gap-8">
                <img src={logo} alt="" className="w-12" />
                <h1 className="text-[30px] text-white"><span className="text-red-900">Anime</span>Flix</h1>
            </div>
            <div className="relative flex">
                <span className="absolute right-3 top-3 cursor-pointer">
                    <img src={search} alt="" className="w-6" />
                </span>
                <input type="text" name="search" id="" placeholder="Search for an anime" className="rounded-lg pl-4 p-2 focus:outline-none" />
            </div>
        </nav>
    )
}

export default Navbar