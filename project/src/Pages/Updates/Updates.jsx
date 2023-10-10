import './Updates.css';
import crew from "../../img/crew.jpg";
import update from "../../img/updates-main.jpg";
import materials from "../../data/materials.json";

function Updates() {
    return (
        
        <div className="Updates">
            <section className='offer'>
                <div className="top__section">
                    <img src={update} alt="" />
                    <h1>Updates</h1>
                </div>
            </section>
            <div className="container">
                    <section>
                        <article>
                            <div className="img-item">
                                <img src={crew} alt="dearMoon crew" />
                            </div>
                            <div className="text-item">
                                <h3>DECEMBER 8, 2022</h3>
                                <h2>MEET THE DEARMOON CREW</h2>
                                <div className="text-about">
                                    <p>
                                        Japanese entrepreneur Yusaku Maezawa announced today ten crewmembers, including two backups, who will join him on the dearMoon mission. The dearMoon crew will be the first humans Starship will launch, fly around the Moon, and safely return to Earth. Over the course of their weeklong journey, this crew of artists, content creators, and athletes from all around the world will also travel within 200 km of the lunar surface.
                                    </p>
                                    <p>
                                        More than one million people in 249 countries and regions around the world applied to fly on Starship as part of the dearMoon mission. This flight is an important step toward enabling access for people who dream of traveling to space. In sharing their experiences flying around the Moon, this crew will inspire everyone back home on Earth, and we look forward to flying them.
                                    </p>
                                </div>
                            </div>
                        </article>
                        
                                {materials.map((el) => 
                                    <article>
                                        <div className="img-item">
                                            <img src={el.imglink} alt="dearMoon crew" />
                                        </div>
                                        <div className="text-item">
                                            <h3>{el.data}</h3>
                                            <h2>{el.title}</h2>
                                            <div className="text-about">
                                                {el.body}
                                            </div>
                                        </div>
                                    </article>
                                )}

                        
                    </section>
            </div>  
        </div>
       
    )
}

export default Updates;