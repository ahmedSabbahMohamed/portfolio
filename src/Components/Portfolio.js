import web1 from "../images/web1.jpg";
import web2 from "../images/web2.jpg";
import web3 from "../images/web3.jpg";
import web4 from "../images/web4.jpg";
import web5 from "../images/web5.jpg";
import web6 from "../images/web6.jpg";

export default function Portfolio() {
    return(
        <section className="py-10 container">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-16">
            <div className="">
              <img
                className="rounded-md w-3/4 mx-auto md:w-full h-auto md:h-96"
                layout="responsive"
                src={web1}
              />
              <div className="pt-4 pl-4 text-center md:text-left">
                <a href="https://ahmedsabbahmohamed.github.io/news-homepage-main/" className="text-2xl text-gray-900 dark:text-gray-100 hover:text-red-400 dark:hover:text-teal-300" target="_blank">news-homepage-main</a>
                <div className="flex justify-center md:justify-start gap-4 mt-1">
                    <span className="text-gray-600 dark:text-gray-400">HTML</span>
                    <span className="text-gray-600 dark:text-gray-400">CSS3</span>
                    <span className="text-gray-600 dark:text-gray-400">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="rounded-md w-3/4 mx-auto md:w-full h-auto md:h-96"
                layout="responsive"
                src={web2}
              />
            <div className="pt-4 pl-4 text-center md:text-left">
                <a href="https://ahmedsabbahmohamed.github.io/easybank-landing-page-master/" className="text-2xl text-gray-900 dark:text-gray-100 hover:text-red-400 dark:hover:text-teal-300" target="_blank">Easybank landing page</a>
                <div className="flex justify-center md:justify-start gap-4 mt-1">
                    <span className="text-gray-600 dark:text-gray-400">HTML</span>
                    <span className="text-gray-600 dark:text-gray-400">SASS</span>
                    <span className="text-gray-600 dark:text-gray-400">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="rounded-md w-3/4 mx-auto md:w-full h-auto md:h-96"
                layout="responsive"
                src={web3}
              />
            <div className="pt-4 pl-4 text-center md:text-left">
                <a href="https://ahmedsabbahmohamed.github.io/ecommerce-product-page-main/" className="text-2xl text-gray-900 dark:text-gray-100 hover:text-red-400 dark:hover:text-teal-300" target="_blank">E-commerce product page</a>
                <div className="flex justify-center md:justify-start gap-4 mt-1">
                    <span className="text-gray-600 dark:text-gray-400">React</span>
                    <span className="text-gray-600 dark:text-gray-400">CSS3</span>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="rounded-md w-3/4 mx-auto md:w-full h-auto md:h-96"
                layout="responsive"
                src={web4}
              />
              <div className="pt-4 pl-4 text-center md:text-left">
                <a href="https://ahmedsabbahmohamed.github.io/bookmark-landing-page-master/?email=&submit=Contact+Us" className="text-2xl text-gray-900 dark:text-gray-100 hover:text-red-400 dark:hover:text-teal-300" target="_blank">Bookmark landing page</a>
                <div className="flex justify-center md:justify-start gap-4 mt-1">
                    <span className="text-gray-600 dark:text-gray-400">HTML</span>
                    <span className="text-gray-600 dark:text-gray-400">SASS</span>
                    <span className="text-gray-600 dark:text-gray-400">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="rounded-md w-3/4 mx-auto md:w-full h-auto md:h-96"
                layout="responsive"
                src={web5}
              />
              <div className="pt-4 pl-4 text-center md:text-left">
                <a href="https://ahmedsabbahmohamed.github.io/intro-component-with-signup-form-master/" className="text-2xl text-gray-900 dark:text-gray-100 hover:text-red-400 dark:hover:text-teal-300" target="_blank">Intro component with sign-up form</a>
                <div className="flex justify-center md:justify-start gap-4 mt-1">
                    <span className="text-gray-600 dark:text-gray-400">React</span>
                    <span className="text-gray-600 dark:text-gray-400">Tailwindcss</span>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="rounded-md w-3/4 mx-auto md:w-full h-auto md:h-96"
                layout="responsive"
                src={web6}
              />
              <div className="pt-4 pl-4 text-center md:text-left">
                <a href="https://ahmedsabbahmohamed.github.io/calculator-app-main/" className="text-2xl text-gray-900 dark:text-gray-100 hover:text-red-400 dark:hover:text-teal-300" target="_blank">Calculator app</a>
                <div className="flex justify-center md:justify-start gap-4 mt-1">
                    <span className="text-gray-600 dark:text-gray-400">React</span>
                    <span className="text-gray-600 dark:text-gray-400">CSS3</span>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}