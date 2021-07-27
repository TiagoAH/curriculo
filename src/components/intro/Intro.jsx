import "./intro.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";


export default function Intro() {
    const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Hi there, I'm", "Ola, sou o"],
    });
  }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/image.png" alt="" />
                    </div>  
            </div>
            <div className="right">
            <div className="wrapper">
                <h2><span ref={textRef}></span></h2>
                <h1>Tiago Henggeler</h1>
                <h3>
                Front End Developer
                </h3>
            </div>
            <a href="#works">
                <img src="assets/down.png" alt="" />
                </a>
        </div>
        </div>
    )
}
