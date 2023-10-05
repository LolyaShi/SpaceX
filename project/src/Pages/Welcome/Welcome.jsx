import Button from "../../Component/Button/Button";
import datas from "../../data/welcomes.json";
import "./Welcome.css";
import { Link } from "react-router-dom";


export default function Welcome() {
    const btnText = "Learn More";
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
                               {/*  <Link to={el.path}><button>Learn More</button></Link>*/}
                               <span className="btn"> <Button text = {btnText} next={el.path} /></span>
                            </div>
                        </div>
                    </div>

                </section>
            )}
        </div>
    )
}