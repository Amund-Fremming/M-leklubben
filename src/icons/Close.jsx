import React from "react";

const Close = () => {
    
    return(
        <div className="text-4xl absolute right-8 top-6 mt-2 cursor-pointer md:hidden hover:text-red-600 transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    );
}

export default Close;