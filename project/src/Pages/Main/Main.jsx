import './Main.css';
import mainImg from "../../img/main-img.png";
import falcon from "../../img/falcon.png";

function Main() {
    return (
        <div className="container">
            <div className="Main">
                <section>
                    <div className="top-section">
                        <h1>Falcon Heavy</h1>
                        <p>
                            The most powerful operational rocket in the world by a factor of two
                        </p>
                        
                    </div>
                    <img src={mainImg} alt="earth" />
                </section>
                <section>
                    <div className='main-section'>
                        <div className="text-item">
                            <div className="item__data">
                                <h2>Falcon Heavy
                                    <br/>Overview</h2>
                                <table>
                                    <tr>
                                        <th>HEIGHT</th>
                                        <td>70 m / 229.6 ft</td>
                                    </tr>
                                    <tr>
                                        <th>DIAMETER</th>
                                        <td>12.2 m / 39.9 ft</td>
                                    </tr>
                                    <tr>
                                        <th>MASS</th>
                                        <td>1,420,788 kg / 3,125,735 lb</td>
                                    </tr>
                                    <tr>
                                        <th>PAYLOAD TO LEO</th>
                                        <td>63,800 kg / 140,660 lb</td>
                                    </tr>
                                    <tr>
                                        <th>PAYLOAD TO GTO	</th>
                                        <td>26,700 kg / 58,860 lb</td>
                                    </tr>
                                    <tr>
                                        <th>PAYLOAD TO MARS</th>
                                        <td>16,800 kg / 37,040 lbt</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="item__about">
                                <h2>UNMATCHED <br/> PERFORMANCE</h2>
                                <p>
                                    With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.
                                </p>
                            </div>
                        </div>
                        <div className="img-item">
                            <img src={falcon} alt="falcon" />
                        </div>
                    </div>
                </section>
            
            </div>
        </div>
    )
}

export default Main;