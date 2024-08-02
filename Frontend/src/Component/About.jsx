import "../assets/css/about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import room1 from "../assets/img/bg_1.jpg.webp";
// import { MdOutlineIron } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";import { FaShower } from "react-icons/fa";
import { MdOutlineLocalLaundryService,MdOutlineIron } from "react-icons/md";import { GrCertificate } from "react-icons/gr";
const About = () => {
    return (
        <>
            <div className="about_hero_div">

            </div>
            <section style={{ margin: "70px 0px" }}>
                <div className="last-secction">
                    <h1>Latest news from our blog</h1>
                </div>
                <div className="row-last-blog">
                    <Card style={{ width: '28rem', }}>
                        <Card.Img variant="top" src={room1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem' }}>
                        <Card.Img variant="top" src={room1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem' }}>
                        <Card.Img variant="top" src={room1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </section>
            <section>
                <div className="about-section" >
                    <div className="about-img-part">
                        <img src={room1} alt="" />
                        <h2>The most recommended vacation rental</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary <br />regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your <br /> mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost <br /> unorthographic life One day however a small line of blind text by the name of Lorem Ipsum <br /> decided to leave for the far World of Grammar.</p>
                    </div>
                    <div className="about-text-part">
                        <h2>What we offer</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary <br /> regelialia. It is a paradisematic country, in which roasted parts of sentences fly into <br /> your mouth.</p>
                        <div style={{margin:"20px",}}>
                            <div style={{ display: "flex" }}>
                                <div style={{ display: "flex" }}>
                                    <div className="icon-div" ><IoFastFoodSharp className="icon-about" /></div>
                                    <div >
                                        <h3>Tea Coffee</h3>
                                        <p>A small river named Duden <br /> flows by their place and <br /> supplies it with the <br /> necessary</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div className="icon-div" ><FaShower className="icon-about" /></div>
                                    <div >
                                        <h3>Hot Showers</h3>
                                        <p>A small river named Duden <br /> flows by their place and <br /> supplies it with the <br /> necessary</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div style={{ display: "flex" }}>
                                    <div className="icon-div" ><MdOutlineLocalLaundryService className="icon-about" /></div>
                                    <div >
                                        <h3>Laundry</h3>
                                        <p>A small river named Duden <br /> flows by their place and <br /> supplies it with the <br /> necessary</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div className="icon-div" ><GrCertificate className="icon-about" /></div>
                                    <div >
                                        <h3>Air Conditioning</h3>
                                        <p>A small river named Duden <br /> flows by their place and <br /> supplies it with the <br /> necessary</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div style={{ display: "flex" }}>
                                    <div className="icon-div" ><GrCertificate className="icon-about" /></div>
                                    <div >
                                        <h3>Free Wifi</h3>
                                        <p>A small river named Duden <br /> flows by their place and <br /> supplies it with the <br /> necessary</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div className="icon-div" ><GrCertificate className="icon-about" /></div>
                                    <div >
                                        <h3>Kitchen</h3>
                                        <p>A small river named Duden <br /> flows by their place and <br /> supplies it with the <br /> necessary</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div style={{ display: "flex" }}>
                                <div style={{ display: "flex" }}>
                                    <div className="icon-div" ><MdOutlineIron className="icon-about" /></div>
                                    <div >
                                        <h3>Ironing</h3>
                                        <p>A small river named Duden <br /> flows by their place and <br /> supplies it with the <br /> necessary</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div className="icon-div" ><GrCertificate className="icon-about" /></div>
                                    <div >
                                        <h3>Lovkers</h3>
                                        <p>A small river named Duden <br /> flows by their place and <br /> supplies it with the <br /> necessary</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ margin: "70px 20px", backgroundColor: "#f3f4f7" }}>
                <div className="last-secction">
                    <h1>Latest news from our blog</h1>
                </div>
                <div className="row-last-blog" style={{ paddingBottom: "100px" }}>

                    <Card style={{ width: '28rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Card.Img variant="top" src={room1} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Card.Img variant="top" src={room1} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Card.Img variant="top" src={room1} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        </>
    )
}
export default About;