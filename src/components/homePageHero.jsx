import hamburgerIcon from "../assets/hamburger-icon.svg";
import rookIcon from "../assets/rook.png";
import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.svg";
import github from "../assets/github.svg";
import arrow from "../assets/arrow.svg";
export function SquareXTwitter(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
      ></path>
    </svg>
  )
}


const HomePageHero = () => {
  return (
    <section className="w-full h-screen" id="home">
      <header className="p-4">
        {/* Mobile hamburger Icon */}
        <button className="sm:hidden w-full">
          <img
            src={hamburgerIcon}
            alt=""
            className="h-10 ml-auto"
            onClick={() => alert("Hello Jaideep")}
          />
        </button>

        {/* Laptop navigatoin bar */}
        <div className="max-sm:hidden flex justify-center mx-auto">
          <ul className="flex sm:gap-8 lg:gap-24 secondary-font text-2xl p-4">
            <li className="list-hover">
              <a href="#home">Home</a>
            </li>
            <li className="list-hover">
              <a href="#about">About</a>
            </li>
            <li className="list-hover">
              <a href="#projects">Projects</a>
            </li>
            <li className="list-hover">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="flex sm:h-3/4 justify-center items-start p-8 px-6 max-sm:flex-col">
        <div className="flex justify-center items-center mt-24 sm:mt-12">
          <div>
            <h1 className="text-3xl font-bold sm:text-5xl primary-font ">
              Jaideep <span className="text-lime-500">Singh</span> Sekhon
            </h1>
            <h3 className="mt-2 sm:text-2xl secondary-font ml-2">
              Aspiring Backend Developer
            </h3>
            <ul className="flex mt-3 justify-start items-center gap-2">
              <li className="list-hover p-1 ">
                <a
                  href="https://www.linkedin.com/in/jaideepsekhon/"
                  target="_blank"
                >
                  <img src={linkedin} className="h-10 w-10" alt="" />
                </a>
              </li>
              <li className="list-hover p-1">
                <a href="https://github.com/jssAFC" target="_blank">
                  <img src={github} className="h-10 w-10 pb-1" alt="" />
                </a>
              </li>
              <li className="list-hover p-1">
                <a href="https://twitter.com/sekhon_jaideep_" target="_blank">
                  <SquareXTwitter className="h-10 w-10 text-black" />
                </a>
              </li>
            </ul>
          </div>
          <img
            src={rookIcon}
            className="rotate-8 max-sm:h-40 max-sm:w-52 max-sm:hidden"
            alt=""
          />
        </div>
        <div className="sm:hidden mx-auto text-gray-300 mt-44 bg-gray-100 rounded-full border shadow-black shadow-2xl">
          <a href="#about">
            <img src={arrow} alt="" className="h-10 w-11" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
