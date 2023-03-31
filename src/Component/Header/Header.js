import React from 'react';
import { GiBowTieRibbon } from "react-icons/gi";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-yellow-50  text-indigo-900 lg:px-14  shadow-md ">
  <div className="navbar-start">
                    <div className="dropdown">
                            
      <label tabIndex={1} className="btn btn-ghost btn-circle">
                       <GiBowTieRibbon className='text-xl text-rose-600'></GiBowTieRibbon>
                            
                        </label>
                        
     
                        <a className="btn btn-ghost normal-case lg:text-2xl text-violet-700 font-serif">Knowledge Gather</a>
    </div>
  </div>
  <div className="navbar-start">

  </div>
                <div className="navbar-end font-serif font-bold">
                      <ul className=' flex  p-2 text-purple-900' >
                    <li className=' mx-3'  ><a>Home</a></li>
                    <li className=' mx-3' ><a>Blog</a></li>
                    <li><a>About</a></li>
                        </ul>
    <button className="btn btn-ghost btn-circle ">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle ">
      <div className="indicator ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item bg-green-600"></span>
      </div>
                    </button>
                    
  </div><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.pinimg.com/originals/3d/b8/00/3db80054370f32b41119d17531755f37.jpg" />
        </div>
      </label>
            </div>
          
        </div>
    );
};

export default Header;