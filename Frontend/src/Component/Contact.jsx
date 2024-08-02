import "../assets/css/contact.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import room1 from "../assets/img/bg_1.jpg.webp";

const Contact = () => {
    return (
        <div style={{ backgroundColor: "#f3f4f7", padding:"0px 0px 100px 0px" }}>
            <div className="about_hero_div">

            </div>
            <section >
                <div className="contact-main-div">
                    <div className="contact-div-img">
                        <img src={room1} alt="" />
                    </div>
                    <div className="contact-div-info">

                    </div>
                    
                </div>
                <div className="contact-main-div-2">
                    <div className="contact-div-img">
                        <img src={room1} alt="" />
                    </div>
                    <div className="contact-div-info" style={{backgroundColor:"rgb(245, 148, 164)"}}>

                    </div>
                    
                </div>
            </section>


        </div>
    )
}
export default Contact;