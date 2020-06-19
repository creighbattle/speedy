import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = {
            longitude: null,
            latitude: null,
            speed: 0,
            pressed: false
        }

    }

    async componentDidMount() {

        // const url = "https://speedlimit-io.p.rapidapi.com/get_speed_limit?longitude=-75.46798079999999&latitude=39.7279232";
        // const reponse = await fetch(url, {
        //     "headers": {
        //         "x-rapidapi-host": "speedlimit-io.p.rapidapi.com",
        //         "x-rapidapi-key": "2496fa6213msh5b286d3f657429cp173040jsn13b456d4488f"
        //     }
        // })
        // const data = await reponse.json();
        // console.log(data.max_speed);

        // this.position();


    }


    async position() {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        )

        if (this.state.latitude !== null && this.state.longitude !== null) {
            alert('hello')
        }

        const url = `https://speedlimit-io.p.rapidapi.com/get_speed_limit?longitude=${this.state.longitude}&latitude=${this.state.latitude}`;
        const reponse = await fetch(url, {
            "headers": {
                "x-rapidapi-host": "speedlimit-io.p.rapidapi.com",
                "x-rapidapi-key": "2496fa6213msh5b286d3f657429cp173040jsn13b456d4488f"
            }
        })
        const data = await reponse.json();
        //console.log(data.max_speed);
        this.setState({ speed: data.max_speed })

    }

    // showPosition() {
    //     fetch("https://speedlimit-io.p.rapidapi.com/get_speed_limit?longitude=-75.46798079999999&latitude=39.7279232", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "speedlimit-io.p.rapidapi.com",
    //             "x-rapidapi-key": "2496fa6213msh5b286d3f657429cp173040jsn13b456d4488f"
    //         }
    //     })
    //         .then(response => {
    //             response.json();
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }


    render() {
        return (
            <div>
                <button onClick={() => this.position()}>Show Speed</button>
                {this.state.speed != 0 &&
                    <div>
                        <h1>{this.state.speed}</h1>
                    </div>
                }
            </div>
        );
    }
}

export default Home;