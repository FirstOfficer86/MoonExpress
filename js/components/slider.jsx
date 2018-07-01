import React from "react";
import Slider from 'react-slick';


export default class Fade extends React.Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            centerPadding: '100px',


        };
        return (
            <div id='slider' >
                <br />
                <Slider {...settings}>
                    {this.props.images.map(image=>(
                        <div className='slider-image' key={image} >
                            <div  style={{
                                backgroundImage: `url('${image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                width: '100%',
                                height: '750px',
                                margin: '0 auto',
                            }}>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}