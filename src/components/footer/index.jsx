import React from 'react'
import {MdFavorite} from 'react-icons/md'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col md={6}>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={6}>
                                <ul style={{listStyleType: 'none'}}>
                                    <li><a href="https://github.com/ownosstudios/coroverify_fe">Contribute</a></li>
                                    {/* <li><a href="">Donate</a></li> */}
                                    <li><a href="https://forms.gle/rAPPFaDS3w6X9iMQ7" target="_blank" rel="noreferrer">Feedback</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col>
                    <div className="text-center">
                        Made with <MdFavorite /> and JavaScript, by <a href="http://ownos.studio">Ownos Studios</a> and the <a href="https://github.com/ownosstudios/coroverify_fe">community</a>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer