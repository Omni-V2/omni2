"use client";
import React, { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState(false);

    return (
        <div>
            <div>
                <input
                    className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-45 py-1 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    id="username"
                    type="text"
                    placeholder="Search..."
                />
                <div className="absolute right-0 inset-y-0 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-3 mr-1 h-4 w-4 text-gray-400 hover:text-gray-500 hover:semibold"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            </div>
            <div className="absolute left-0 inset-y-0 flex items-center ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 text-gray-400 hover:text-gray-500 hover:semibold hover:drop-shadow-xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Search;
