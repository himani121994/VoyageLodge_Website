import "../assets/css/about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import room1 from "../assets/img/bg_1.jpg.webp";

const About = ()=>{
    return(
        <>
         <div className="about_hero_div">
         
         </div>
         <section style={{  }}>
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