import datas from "../../data/welcomes.json";
import "./Welcome.css";

export default function Welcome(){
    return (
        <div className="Welcome">
            {datas.map((el) => 
                <section className="block__item">
                    <div >
                        <img src={el.img} alt="img" />
                        <div className="container">
                            <div className="text__block">
                                <h3>{el.subtitle}</h3>
                                <h2>{el.title }</h2>
                                <a href=""><button>Learn More</button></a>
                            </div>
                        </div>
                    </div>

                </section>
            )}
        </div>
    )
}