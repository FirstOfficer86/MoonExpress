import React from 'react';
import ReactDOM from 'react-dom';
import {Grid} from 'semantic-ui-react';
import Nav from './components/nav.jsx';
import HomePage from './components/home.jsx';
import MoonTable from './components/moons.jsx';
import Fade from './components/slider.jsx';
import SpaceVideo from './components/video.jsx';
import Footer from './components/footer.jsx';

import '../scss/main.scss';

const biggestMoons = ["PIA19048","JPL-2015_10_28-PIA17202","PIA00716","PIA00457","PIA02145","PIA01536"];

const galleryImages = ["as11-40-5902","as11-44-6551","PIA17474","0102627","9019795","7031833","PIA00130"," as11-40-5874","hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o"];

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            activeMoon: "",
            images: []
        }
    }

    componentDidMount(){
        biggestMoons.forEach(nasa_id=>this.fetchImage(nasa_id));
        galleryImages.forEach(nasa_id=>this.fetchGallery(nasa_id));
    }

    fetchImage =(nasa_id) => {
        fetch(`https://images-api.nasa.gov/search?nasa_id=${nasa_id}`,{
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(this.state.items);
                this.setState({
                    items: [...this.state.items, data.collection.items[0]]
                });
            });
    };

    fetchGallery =(nasa_id) => {
        fetch(`https://images-api.nasa.gov/search?nasa_id=${nasa_id}`,{
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(this.state.images)
                this.setState({
                    images: [...this.state.images, data.collection.items[0]]
                });
            });
    };

    handleActiveId = (nasa_id) => {
        this.setState({
            activeMoon: nasa_id
        })
    };

    render() {
        return (
            <div className='container'>
                <Nav />
                <HomePage/>
                <Grid id='main-div-moons' stackable columns={2} divided>
                    <Grid.Row>
                        <Grid.Column className='div-moons-left'>
                            <Grid stackable columns={3}  divided>
                                {this.state.items.map((item) => (
                                    <Grid.Column  key={item.links[0].href}>
                                        <div className='slider-image' style={{
                                            backgroundImage: `url('${item.links[0].href}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center center',
                                            border: '2px solid white',
                                            width: '250px',
                                            height: '250px',
                                            margin: '0 auto'
                                        }} onClick={() => this.handleActiveId(item.data[0].nasa_id)} >
                                        </div>

                                    </Grid.Column>


                                ))}

                            </Grid>
                        </Grid.Column>
                        <Grid.Column className='moon-info'>
                            <MoonTable moons={this.state.items.filter(item => item.data[0].nasa_id === this.state.activeMoon)}/>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
                <SpaceVideo/>
                {this.state.images.length === galleryImages.length &&
                <Fade images={this.state.images.map((item)=>item.links[0].href)}/>
                }
                <Footer/>

            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);