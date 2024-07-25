import "../assets/css/home.css"
import Carouselslid from "./Carousels";
import room1 from "../assets/img/room-1.jpg.webp";
import arrow from "../assets/img/arrowline.webp";
import img1 from "../assets/img/home-midimg-1.webp";
import img2 from "../assets/img/home-midimg-2.webp";
const Home = () => {
    return (

        // <div >
        //     <section className="Main-div">
        //         <div style={{display:"flex"}}>
        //             <div style={{margin:"20px"}}>
        //                 <h1>100% Satusfaction Gurantee</h1>
        //                 <h2>Find Your <br />
        //                 Perfect Course</h2>
        //                 <p>Choose from over 210,000 online video courses with new additions <br /> Published every month ourses and learn how to code.</p>
        //             </div>
        //             <div>
        //                 <div>
        //                     <img src="" alt="" />
        //                     <img src="" alt="" />
        //                 </div>
        //                 <div></div>
        //             </div>
        //         </div>
        //     </section>


        <section>

            <div className="row" style={{ display: "flex", marginRight: "auto", marginLeft: "auto", position: "relative", margin: "80px" }}>
                <div className="col-md">
                    <div style={{ position: "relative", top: "0px", left: "275px" }}>
                        <img src={img1} alt="" style={{ height: "350px", width: "400px", borderRadius: "40px", top: "30px" }} />
                        <img src={arrow} alt="" />

                    </div>

                    <div style={{ position: "absolute", zIndex: "-1", top: "138px" }}>
                        <img src={img2} alt="" style={{ width: "500px", borderRadius: "40px" }} />

                    </div>
                </div>
                <div className="col-md" style={{ marginLeft: "300px" }}>
                    <h3 style={{ color: "green", fontFamily: "cursive", fontSize: "xx-large" }}>Guaranteed & Certified</h3>
                    <h1 style={{ marginLeft: "30", fontSize: "58px" }}>The Worlds Best Online Education Insititude</h1>
                    <p style={{ fontSize: "26px", color: "#2f4f4f" }}>Choose from over 210,000 online video courses with new Additions published every month</p>
                </div>
            </div>
            <Carouselslid />

            <div>
                <div class="header">
                    <h1>Apartment Room</h1>
                </div>
                <div class="content">
                    <div class="row">
                        <img src={room1} alt="Room Image" class="room-image" />
                        <div class="description">
                            <p>Hello</p>
                        </div>
                        <img src={room1} alt="Room Image" class="room-image" />
                        <div class="description">
                            <p>Hello</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="description">
                            <p>Hello</p>
                        </div>
                        <img src={room1} alt="Room Image" class="room-image" />
                        <div class="description">
                            <p>Hello</p>
                        </div>
                        <img src={room1} alt="Room Image" class="room-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;