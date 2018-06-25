import React from 'react';
import ReactDOM from 'react-dom';
import {Grid} from 'semantic-ui-react';
import Nav from './components/nav.jsx';
import HomePage from './components/home.jsx';
import MoonTable from './components/moons.jsx';
import Fade from './components/slider.jsx';

const biggestMoons = ["PIA00502","PIA00318","ARC-1979-AC79-7083","PIA00457","PIA02145","PIA01536"];

const galleryImages = ["PIA21390","PIA00405","PIA06594","PIA10748","PIA15280","7031833"];

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
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Grid columns={3} divided>
                                {this.state.items.map((item) => (
                                    <Grid.Column key={item.links[0].href}>
                                        <div style={{
                                            backgroundImage: `url('${item.links[0].href}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center center',
                                            width: '200px',
                                            height: '200px',
                                            margin: '0 auto'
                                        }} onClick={() => this.handleActiveId(item.data[0].nasa_id)} >
                                        </div>

                                    </Grid.Column>


                                ))}

                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                            <MoonTable moons={this.state.items.filter(item => item.data[0].nasa_id === this.state.activeMoon)}/>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
                {this.state.images.length === galleryImages.length &&
                <Fade images={this.state.images.map((item)=>item.links[0].href)}/>
                }
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);