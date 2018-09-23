import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';

export default class Banner extends Component {
    render() {
        return (
            <div className="clearfix banner">
                <div className="banner--inner"></div>
                <div className="banner--main">
                    <Container>
                        <div className="quote y-line">
                        <div className="h1 ">
                            <span className="t-delay-1">L</span>
                            <span className="t-delay-2">o</span>
                            <span className="t-delay-3">r</span>
                            <span className="t-delay-4">m</span>
                            &nbsp;
                            <span className="t-delay-5">e</span>
                            <span className="t-delay-6">I</span>
                            <span className="t-delay-7">p</span>
                            <span className="t-delay-8">s</span>
                            <span className="t-delay-9">u</span>
                            <span className="t-delay-10">m</span>
                            &nbsp;
                            <span className="t-delay-11">d</span>
                            <span className="t-delay-12">o</span>
                            <span className="t-delay-13">l</span>
                            <span className="t-delay-14">r</span>
                            &nbsp;
                            <span className="t-delay-15">s</span>
                            <span className="t-delay-16">i</span>
                            <span className="t-delay-17">t</span>
                            &nbsp;
                            <span className="t-delay-18">a</span>
                            <span className="t-delay-19">m</span>
                            <span className="t-delay-20">e</span>
                            <span className="t-delay-21">t</span>
                            &nbsp;
                            <br/>
                            <span className="t-delay-22">c</span>
                            <span className="t-delay-23">o</span>
                            <span className="t-delay-24">n</span>
                            <span className="t-delay-25">s</span>
                            <span className="t-delay-26">e</span>
                            <span className="t-delay-27">c</span>
                        
                            <span className="t-delay-28">t</span>
                            <span className="t-delay-29">e</span>
                            <span className="t-delay-30">t</span>
                            <span className="t-delay-31">u</span>
                            <span className="t-delay-32">r</span>
                            &nbsp;
                            <span className="t-delay-33">a</span>
                            <span className="t-delay-34">d</span>
                            <span className="t-delay-35">&nbsp;</span>
                            <span className="t-delay-36">i</span>
                            <span className="t-delay-37">p</span>
                            <span className="t-delay-38">i</span>
                            <span className="t-delay-39">s</span>
                            <span className="t-delay-40">c</span>
                            <span className="t-delay-41">i</span>
                            <span className="t-delay-42">n</span>
                            <span className="t-delay-43">g</span>
                            <span className="t-delay-44">e</span>                                    
                        </div>
                    </div>                  
                    <h2 className="quote pt-3 m-20"><span className="t-delay-48">Excepteur sint occaecat cupidatat non <br/> proident, sunt in culpa qui official</span> </h2>
                    <Button className="btn white-btn m-20"><span className="btn--inner">Learn More About US</span></Button>
             
                    </Container>
                </div>             
            </div>
        );
    }
}