import {AiFillHtml5} from "react-icons/ai";
import {SiCss3, SiTailwindcss, SiReact, SiJavascript} from "react-icons/si";
import {FaSass, FaFigma} from "react-icons/fa";

export default function Services() {
    return(
        <section className="container">
            <div>
                <h3 className="text-7xl font-bold text-center py-6 text-teal-600 dark:text-teal-400">Services i offer</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            <li className="serv">
                <AiFillHtml5 className="inline-block mr-2" />
                HTML
            </li>
            <li className="serv">
                <SiCss3 className="inline-block mr-2" />
                CSS3
            </li>
            <li className="serv">
                <SiJavascript className="inline-block mr-2" />
                JavaScript
            </li>
            <li className="serv">
                <SiReact className="inline-block mr-2" />
                React
            </li>
            <li className="serv">
                <SiTailwindcss className="inline-block mr-2" />
                Tailwindcss
            </li>
            <li className="serv">
                <FaSass className="inline-block mr-2" />
                SASS
            </li>
            <li className="serv">
                <FaFigma className="inline-block mr-2" />
                Figma
            </li>
          </ul>
        </section>
    );
}