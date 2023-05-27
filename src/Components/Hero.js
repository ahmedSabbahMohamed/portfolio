import {AiFillLinkedin} from "react-icons/ai";
import avatar from "../images/avatar.jpeg";

export default function() {
    return(
        <section className="container my-10 flex flex-col-reverse gap-10 md:flex-row md:justify-between items-center">
            <div className="text-center md:text-left">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
                    AHMED SABBAH
                </h2>
                <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                    Frontend Developer.
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl md:text-left md:mx-0 dark:text-gray-200">
                    Freelancer providing services for programming and design content
                    needs. Join me down below and let's get cracking!
                </p>
                <div className="text-5xl flex justify-center md:justify-start py-3 text-gray-600 dark:text-gray-400">
                    <AiFillLinkedin />
                </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-cyan-500 text- to-teal-500 rounded-full">
            <img src={avatar} alt="avatar" className="rounded-full border-4 border-teal-400 md:w-full md:h-auto dark:grayscale-10" />
            </div>
        </section>
    );
}