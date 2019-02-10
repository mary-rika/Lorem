import React, { Component } from 'react';
import { Col, Row,Container } from 'reactstrap';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <p>National Helping 08349 384437</p>
                    <Row className="justify-content-between">
                        <Col md={8}>
                            <a href="/">Related Organisation</a>
                            <a href="/">Terms & Condition</a>
                            <a href="/">Accessebility</a>
                        </Col>
                        <Col md={4}>
                            <span className="c-right">@copyright 2018</span>
                        </Col>
                    </Row>
                </Container>               
            </footer>
        );
    }
}