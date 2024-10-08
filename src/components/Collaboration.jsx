import React from "react";
import { brainwaveSymbol } from "../assets";
import { collabApps } from "../constants";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import "./CollabCSS.css";

const Collaboration = () => {
    return (
        // <Section crosses className="bg-transparent">
        <div className="container lg:flex bg-transparent sm:pt-16 " id="more">
            <div className="max-w-[25rem] py-8 align">
                <h2 className="text-4xl lg:text-6xl text-center lg:text-left font-semibold mb-4 md:mb-8">
                    Wargames
                </h2>

                <p className="text-lg mb-4 lg:text-left text-center font-semibold">
                    Dive into our thrilling Wargames competition! Tackle
                    challenging puzzles, showcase your skills and compete with
                    the best.  Are you ready to be the champion?
                </p>

                <div className="flex justify-center lg:justify-start">
            <button
                className="text-lg font-semibold bg-[#dec67a] hover:bg-[#c6b065] text-gray-800 py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                onClick={() => {
                    document
                        .getElementById("register")
                        .scrollIntoView({ behavior: "smooth" });
                }}
            >
                Register Now
            </button>
        </div>
            </div>

            <div className="lg:ml-auto xl:w-[38rem] mt-10 lg:mt-0">
                <div className="relative left-1/2 flex w-[18rem] lg:w-[22rem] aspect-square border-2 border-white rounded-full -translate-x-1/2 scale:75 md:scale-100">
                    <div className="flex w-60 aspect-square m-auto border-2 border-white rounded-full">
                        <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                            <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-full">
                                <img
                                    src={brainwaveSymbol}
                                    width={64}
                                    height={64}
                                    alt="brainwave"
                                />
                            </div>
                        </div>
                    </div>

                    <ul className="absolute inset-0 animate-spin-slow">
                        {collabApps.map((app, index) => (
                            <li
                                key={app.id}
                                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                                    index * 45
                                }`}
                            >
                                <div
                                    className={`relative -top-[1.6rem] flex w-[4rem] h-[4rem]
                       bg-gray-200
                        border-2 border-white rounded-xl animate-spin-reverse`}
                                >
                                    <img
                                        className="m-auto"
                                        width={app.width}
                                        height={app.height}
                                        alt={app.title}
                                        src={app.icon}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>

                    <LeftCurve />
                    <RightCurve />
                </div>
            </div>
        </div>
        // </Section>
    );
};

export default Collaboration;
