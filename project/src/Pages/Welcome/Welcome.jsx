import datas from "../../data/welcomes.json";
import "./Welcome.css";
import { Link } from "react-router-dom";

export default function Welcome(){
    return (
        <div className="Welcome">
            {datas.map((el) => 
                <section key={el.id} className="block__item">
                    <div >
                        <img src={el.img} alt="img" />
                        <div className="container">
                            <div className="text__block">
                                <h3>{el.subtitle}</h3>
                                <h2>{el.title }</h2>
                                <Link to={el.path}><button>Learn More</button></Link>
                            </div>
                        </div>
                    </div>

                </section>
            )}
        </div>
    )
}