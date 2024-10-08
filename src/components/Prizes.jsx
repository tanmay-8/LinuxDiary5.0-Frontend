import swagImg from "../assets/Prizes/swags.webp";
import merchandiseImg from "../assets/Prizes/merchandise.png";
import cashPrizeImg from "../assets/Prizes/cashPrize.webp";

const Prizes = () => {
    return (
        <div className="pt-10 pb-5 lg:pt-20 lg:pb-10">
            <h1 className="text-white font-bold text-center text-4xl lg:text-6xl mt-10 lg:mt-20 p-2">
                Participate and win
            </h1>

            <div className="flex flex-col lg:flex-row justify-center lg:gap-16 mx-8 lg:mx-32 my-12 lg:my-16 p-2">
                <div className="w-ful lg:mt-10 lg:h-1/3 lg:w-1/3 mb-12 lg:mb-0 bg-gradient-to-b from-[rgba(71,194,215,0.4)] to-[rgba(39,158,178,0.4)] backdrop-blur-[2px] border border-[rgba(255,255,255,0.2)] rounded-xl flex flex-col items-center justify-center shadow-2xl group hover:bg-cyan-500 p-4">
                    <img
                        className="h-60  lg:h-72 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110"
                        src={swagImg}
                        alt="Swags"
                    />
                    <h2 className="text-white text-center text-2xl font-bold py-6 group-hover:text-white">
                        Exciting Swags
                    </h2>
                </div>

                <div className="w-full lg:h-3/4 lg:w-1/3 mb-12 lg:mb-0 bg-gradient-to-b from-[rgba(71,194,215,0.4)] to-[rgba(39,158,178,0.4)] backdrop-blur-[2px] border border-[rgba(255,255,255,0.2)] rounded-xl flex flex-col items-center justify-center shadow-2xl group hover:bg-cyan-500 p-4">
                    <img
                        className="h-60 lg:h-80 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110"
                        src={merchandiseImg}
                        alt="Merchandise"
                    />
                    <h2 className="text-white text-center text-2xl font-bold py-6 group-hover:text-white">
                        Interesting <br></br> Merchandise
                    </h2>
                </div>

                <div className="w-full mt-10 lg:h-1/3 lg:w-1/3 bg-gradient-to-b from-[rgba(71,194,215,0.4)] to-[rgba(39,158,178,0.4)] backdrop-blur-[2px] border border-[rgba(255,255,255,0.2)] rounded-xl flex flex-col items-center justify-center shadow-2xl group hover:bg-cyan-500 p-4">
                    <img
                        className="h-60 lg:h-72 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110"
                        src={cashPrizeImg}
                        alt="Cash Prize"
                    />
                    <h2 className="text-white text-center text-2xl font-bold py-6 group-hover:text-white">
                    Astonishing Prizes
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Prizes;