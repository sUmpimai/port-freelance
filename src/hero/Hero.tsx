import React from "react";

function Hero() {
    return (
        <div className="w-full h-[calc(100vh-69px)] bg-[url('https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2')] bg-center bg-no-repeat bg-cover">
            <div className="max-w-7xl mx-auto">
                <div className="w-1/2 lg:px-8 lg:mx-0 h-[calc(100vh-69px)] space-y-5 grid content-center">
                    <h1 className="font-bold text-2xl text-sky-900">Hi, I'm Suwimol Umpimai</h1>
                    <p className="text-4xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                    <button className="rounded-full w-60 duration-500 text-white bg-sky-500 font-semibold p-3 shadow-sm hover:bg-sky-700 hover:-translate-y-1 hover:duration-500">Let's get in touch</button>
                </div> 
            </div>         
        </div>
    )
};

export default Hero;
