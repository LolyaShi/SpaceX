import mainImg from "../../img/main-img.png";
import dragon from "../../img/Dragon.gif";

function Dragon() {
    return (
        <div className="Main">
            <section>
                <div className="top-section">
                    <h1>Dragon</h1>
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
                            <h2>Dragon
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
                               The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.
                            </p>
                        </div>
                    </div>
                    <div className="img-item">
                        <img src={dragon} alt="Dragon" />
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Dragon;