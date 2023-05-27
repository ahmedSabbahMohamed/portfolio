import {AiFillLinkedin} from "react-icons/ai";

function Footer() {
    return(
        <footer className="container pt-8 flex justify-between items-center">
            <div className="">
                <h2 className="text-xl dark:text-white">AHMED SABBAH</h2>
            </div>
            <ul className="text-5xl flex justify-center md:justify-start py-3 text-gray-600 dark:text-gray-400">
                <li>
                    <AiFillLinkedin className="" />
                </li>
            </ul>
        </footer>
    );
}

export default Footer;