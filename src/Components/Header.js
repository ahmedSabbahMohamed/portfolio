import {BsMoonStarsFill} from "react-icons/bs";

export default function Header(props) {
    return(
        <header className="container">
            <nav className="flex justify-between items-center">
                <div className="">
                    <h1 className="text-xl dark:text-white">
                        AHMED SABBAH
                    </h1>
                </div>
                <ul className="flex justify-between items-center">
                    <li>
                        <BsMoonStarsFill
                            className=" cursor-pointer text-2xl dark:text-white"
                            onClick={props.mode}
                        />
                    </li>
                    <li className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                        <a href="#">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}