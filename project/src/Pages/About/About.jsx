import earth from "../../img/earth.jpg";
import starship from "../../img/starship.jpg";
import dragon from "../../img/dragon.png";
import satellite from "../../img/satellite.jpg";
import start from "../../img/start.gif";
import mission from "../../img/mission.png";
import lend from "../../img/landing-zone.jpg";
import "./About.css";
import Button from "../../Component/Button/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from "react";

export default function About() {

    const col1 = useRef();
    const col2 = useRef()
    const block = useRef();
    const [activeState, setActiveState] = useState(false);

    function click() {
        setActiveState(activeState => !activeState);
        
        if (activeState) {
            col1.current.className = "active";
        }
        else {
            col1.current.className = "";
        }
    }
    

    return (
        <div className="About">
            <section>
                <div className="about__top">
                    <img src={earth} alt="earth" />
                    <div className="about__text">
                        “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.” -Elon Musk
                    </div>
                </div>
            </section>
            <div className="container">
                <section>
                <div className="about__number">
                    <div className="number__item">
                        270
                        <p>TOTAL LAUNCHES</p>
                    </div>
                    <div className="number__item">
                        270
                        <p>TOTAL LAUNCHES</p>
                    </div>
                    <div className="number__item">
                        270
                        <p>TOTAL LAUNCHES</p>
                    </div>
                </div>
                </section>
            </div>
            <section>
                <div className="block3">
                    <img src={starship} alt="starship" />
                    <div className="container">
                        <div className="text__block">
                            <h2>
                                MAKING HUMANITY MULTIPLANETARY
                            </h2>
                            <p>
                                Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, capable of carrying humans to Mars and other destinations in the solar system.
                            </p>
                            <Button text={"Learn more about starship"} />
                        </div>
                     </div>
                </div>
            </section>
            <section>
                <div className="container2">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="slide">
                                <img src={satellite} alt="" />
                                <div className="container">
                                    <div className="slide__item">
                                        <p className="data">May 2012</p>
                                        <h2>DRAGON REACHES THE SPACE STATION</h2>
                                        <p>
                                            Dragon becomes the first private spacecraft in history to visit the space station.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <img src={dragon} alt="" />
                                <div className="slide__item">
                                    <p className="data">March 2019</p>
                                    <h2>DRAGON DOCKS WITH ISS</h2>
                                    <p>
                                        Dragon docked with the International Space Station on March 3 at 3:02 a.m. PST, becoming the first American spacecraft to autonomously dock with the orbiting laboratory.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    </div>
            </section>
            <section>
                <div className="container">
                    <div className="reuse">
                        <div className="img__block">
                            <img src={start} alt="reuSABILITY" />
                        </div>
                        <div className="body__block">
                            <h2>REUSABILITY</h2>
                            <p>
                                SpaceX believes a fully and rapidly reusable rocket is the pivotal breakthrough needed to substantially reduce the cost of space access. The majority of the launch cost comes from building the rocket, which historically has flown only once.
                            </p>
                            <p>
                                Compare that to a commercial airliner – each new plane costs about the same as Falcon 9 but can fly multiple times per day and conduct tens of thousands of flights over its lifetime. Following the commercial model, a rapidly reusable space launch vehicle could reduce the cost of traveling to space by a hundredfold.
                            </p>
                            <p>
                                While most rockets are designed to burn up on reentry, SpaceX rockets can not only withstand reentry but can also successfully land back on Earth and refly again.
                            </p>
                        </div>
                    </div>
                </div>
                
            </section>
            
            <section>
                <div className="container">
                    <div className="landing">
                        <h2>LANDING</h2>
                        <p>
                            SpaceX’s family of Falcon launch vehicles are the first and only orbital class rockets capable of reflight. Depending on the performance required for the mission, Falcon lands on one of our autonomous spaceport droneships out on the ocean or one of our landing zones near our launch pads.
                        </p>
                        <div ref={block} className="switch">
                            <span ref={col1} onClick={click}  >DRONESHIP</span> |
                            <span ref={col2} onClick={click}  >LANDING ZONE</span>
                        </div>
                        <div className="switch__block">
                            <img src={lend} alt="" />
                        </div>

                    </div>

                </div>
            </section>
            
        </div>
    )
}