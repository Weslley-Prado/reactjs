import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';



class MapReact extends Component {


    constructor(props) {
        super(props);

        this.state = {
            lat: '',
            lgn:'',
            zoom:11
          };
      
          this.latChange = this.latChange.bind(this);
          this.lgnChange = this.lgnChange.bind(this);

          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        latChange(event) {
          if(this.state.lat ===''){
              this.setState({lat:-29.167391})  
              return;
          }
          this.setState({lat: event.target.value});
        }

        lgnChange(event){
            if(this.state.lgn ===''){
                this.setState({lgn:-117.161087}) 
                return;
            }
            this.setState({lgn: event.target.value});

        }
      
        handleSubmit(event) {
          event.preventDefault();
        }


    //     this.state = { 
    //         center: {
    //             lat:'',
    //             lng:''
    //         },
    //         zoom: 10
    //     }

    //   this.entrar = this.entrar.bind(this)

    // }

    // entrar(){
    //     this.setState({lat:this.state.lat,lgn:this.state.lgn})
    // }

    render() {
        return (

            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>

                <form >                    
                        <input value={this.state.lat} onChange={this.latChange} />
                        Longitude:
                        <input value={this.state.lgn} onChange={this.lgnChange} />
                    <input type="submit" value="Enviar" />
                </form>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAD4K4vZN0IagbESNGPdGlap_LWdLYQUOE', }}
                    defaultCenter={{lat:-29.167391, lgn: -117.161087}}
                    defaultZoom={this.state.zoom}>
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapReact;