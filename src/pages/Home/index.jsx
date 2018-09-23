import React, { Component } from 'react';
import Banner from './Banner';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import classnames from 'classnames';
import { Col, Row, Container, Button } from 'reactstrap';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transition: false,
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                transition: true
            })
        }, 2000)
    }
    render() {
        let classes = classnames({ addAnimation: this.state.transition });
        return (
            <main className={`main ${classes}`}>         
                <NavBar/>
                <Banner />
                <Container className="intro">
                    <Row>
                        <Col md={8} className="intro--col">                     
                            <div className="intro--left inner">
                                <a href="/" className="intro--link">Lorem Ipsum</a>
                                <div className="inner--text">
                                    <h3 className="inner--text_title mb-2 h3">Lorem Ipsum</h3>
                                    <p className="m-20">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                    </p>
                                    <a className="bold m-20" href="/">Read More<i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="intro--col">
                            <div className="intro--right ">    
                                <div className="intro--right_box inner">
                                    <a href="/" className="intro--link">Lorem Ipsum</a>
                                    <div className="inner--text">
                                        <h3 className="inner--text_title h3 mb-1">Lorem Ipsum</h3>
                                        <p className="m-20">
                                            Lorem Ipsum has been the industry's standard dummy
                                        </p>
                                        <a className="bold m-20" href="/">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                                <div className="intro--right_box inner">
                                    <a href="/" className="intro--link">Lorem Ipsum</a>
                                    <div className="inner--text">
                                        <h3 className="inner--text_title h3 mb-1">Lorem Ipsum</h3>
                                        <p className="m-20">
                                            Lorem Ipsum has been the industry's standard dummy
                                        </p>
                                        <a className="bold m-20" href="/">Read More<i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="pub">
                    <Container>
                    <h3 className=" pub--title"> Publications</h3>
                        <Row>
                            <Col lg={4}>
                                <div className="pub--col">
                                    <p className="pb-2"><i className="far fa-clock mr-1"></i>January 2015</p>
                                    <h4 className="pb-4">
                                        Lorem Ipsum has been the industry's standard dummy
                                    </h4>
                                    <Button className="pdf-btn">Download PDF <i className="fas fa-cloud-download-alt"></i></Button>
                                </div>    
                            </Col>

                            <Col lg={4}>
                                <div className="pub--col">
                                    <p className="pb-2"><i className="far fa-clock mr-1"></i>January 2015</p>
                                    <h4 className="pb-4">
                                        Lorem Ipsum has been the industry's standard dummy
                                    </h4>
                                    <Button className="pdf-btn">Download PDF <i className="fas fa-cloud-download-alt"></i></Button>
                                </div>    
                            </Col>

                            <Col lg={4}>
                                <div className="pub--col">
                                    <p className="pb-2"><i className="far fa-clock mr-1"></i>January 2015</p>
                                    <h4 className="pb-4">
                                        Lorem Ipsum has been the industry's standard dummy
                                    </h4>
                                    <Button className="pdf-btn">Download PDF <i className="fas fa-cloud-download-alt"></i></Button>
                                </div>    
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </main>
        );
    }
}