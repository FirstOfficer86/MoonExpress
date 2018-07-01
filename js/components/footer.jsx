import React from "react";

export default class Footer extends React.Component {
    scrollTo = (e) => {
        e.preventDefault();
        const section = document.getElementById(e.target.hash.replace('#', ''));
        const top = window.scrollY + section.getBoundingClientRect().top - 100;
        window.scrollTo({
            top: top,
            behavior: "smooth"
        });
    }

    render() {
        return <div id='footer'>
            <div className="copyright">
                <p>Copyright 2018 | All rights reserved. - MoonExpress</p>
            </div>
            <div className='contact-div'>
                <p><a href='mailto: contact@moonexpress.com'>Email</a></p>
                <p><a href='tel: 123456'>Text</a></p>
                <p><a href='sms: 123456'>Call</a></p>
            </div>
            <div className='socialmedia'>
                <a href='https://www.facebook.com/' target='_blank'><img style={{width:'50px', height:'50px'}} src={'./image/fb.png'}/></a>
                <a href='https://www.instagram.com/?hl=en' target='_blank'> <img style={{width:'50px', height:'50px'}} src={'./image/instagram.png'}/></a>
                <a href='https://www.pinterest.com/' target='_blank'> <img style={{width:'50px', height:'50px'}} src={'./image/pinterest.png'}/></a>
                <a href='https://twitter.com/' target='_blank'> <img style={{width:'50px', height:'50px'}} src={'./image/twitter.png'}/></a>
            </div>
            <div className='footer-logo'>
                <h2><a href="#home-div" onClick={(e) => this.scrollTo(e)}>Moonexpress</a></h2>
            </div>



        </div>
    }
}