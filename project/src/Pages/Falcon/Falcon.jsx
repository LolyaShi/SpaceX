import mainImg from "../../img/main-img.png";
import falcon9 from "../../img/falcon9.gif";

function Falcon() {
    return (
        <div className="Main">
            <section>
                <div className="top-section">
                    <h1>Falcon 9</h1>
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
                            <h2>Falcon 9
                                <br/>Overview</h2>
                            <table>
                                <tr>
                                    <th>HEIGHT</th>
                                    <td>70 m / 229.6 ft</td>
                                </tr>
                                <tr>
                                    <th>DIAMETER</th>
                                    <td>3.7 m / 12 ft</td>
                                </tr>
                                <tr>
                                    <th>MASS</th>
                                    <td>549,000 kg / 1,210,000 lb</td>
                                </tr>
                                <tr>
                                    <th>PAYLOAD TO LEO</th>
                                    <td>22,800 kg / 50,000 lb</td>
                                </tr>
                                <tr>
                                    <th>PAYLOAD TO GTO	</th>
                                    <td>8,300 kg / 18,860 lb</td>
                                </tr>
                                <tr>
                                    <th>PAYLOAD TO MARS</th>
                                    <td>4,000 kg / 8,800 lbt</td>
                                </tr>
                            </table>
                        </div>
                        <div className="item__about">
                            <h2>UNMATCHED <br/> PERFORMANCE</h2>
                            <p>
                                Stage 1 of the Falcon 9 rocket completed its descent and landed at SpaceX's Landing Zone 1 at nearby Cape Canaveral Space Force Station, becoming the first booster for a commercial crew flight to return to the station for recovery.
                            </p>
                        </div>
                    </div>
                    <div className="img-item">
                        <img src={falcon9} alt="falcon" />
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Falcon;