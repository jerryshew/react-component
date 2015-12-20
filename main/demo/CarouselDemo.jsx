import React from 'react';
import {Carousel} from "./index.js";

export default class CarouselDemo extends React.Component {
    render() {
        let items = <div>
                        <Carousel.Item key='0'>
                            <img src="https://raw.githubusercontent.com/jerryshew/design/master/png/ambition-morty.png"/>
                        </Carousel.Item>
                        <Carousel.Item key='1'>
                            <img src="https://raw.githubusercontent.com/jerryshew/design/master/png/awkward-morty.png"/>
                        </Carousel.Item>
                        <Carousel.Item key='2'>
                            <img src="https://raw.githubusercontent.com/jerryshew/design/master/png/despise.png"/>
                        </Carousel.Item>
                        <Carousel.Item key='3'>
                            <img src="https://raw.githubusercontent.com/jerryshew/design/master/png/pride-morty.png"/>
                        </Carousel.Item>
                        <Carousel.Item key='4'>
                            <img src="https://raw.githubusercontent.com/jerryshew/design/master/png/surprise-morty.png"/>
                        </Carousel.Item>
                    </div>;

        let leftArrow = <p>go left</p>;
        let rightArrow = <p>go right</p>;
        return (
            <ol style={{'width': '600'}}>
                <li>
                    <h4>default carousel</h4>
                    <Carousel items={items}></Carousel>
                </li>
                <li>
                    <h4>auto play carousel</h4>
                    <Carousel items={items} autoPlay="true" delay='5000'></Carousel>
                </li>
                <li>
                    <h4>carousel with default control arrow links</h4>
                    <Carousel items={items} showArrow="true"></Carousel>
                </li>
                <li>
                    <h4>carousel with custom control arrow links</h4>
                    <Carousel items={items} leftArrow={leftArrow} rightArrow={rightArrow} showArrow="true"></Carousel>
                </li>
            </ol>
        );
    }
}
