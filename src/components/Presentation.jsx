import React from 'react'
import Perfil2 from './imagenes/Perfil2.jpg'
const Presentation = () => {

    const phrase = "The magic whe I see your eyes is my life all days, and my happyness all night"


    return (
         <div className="containerPresentation"> 
            <div className="darkMode">
                <input type="checkbox" name="" id="btn"/>
                <div className="box">
                    <i className="far fa-moon fa-2x"></i>
                    <i className="fas fa-sun fa-2x"></i>
                </div>
            </div>
            <div className="card">
                <img src={Perfil2} alt="profile"/>
                <h2 className="nameAuth">Milton Riscanevo</h2>
                <p className="title">Software Developer</p>
                <button className="btn" onClick={()=>{document.write(phrase);}}>About</button>

            </div>
        </div>
     );
}
 
export default Presentation;