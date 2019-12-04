import React, {Component} from 'react';

const heart = [
    "/0hearts.png",
    "/1heart.png",
    "/2hearts.png",
    "/3hearts.png",
    "/4hearts.png",
    "/5hearts.png"
]



class Tamagotchi extends Component{
    constructor(props){
        super(props);
        this.state = {
            img: "3",
            money:props.money
        }
        this.handleMove = this.handleMove.bind(this);
    }

    componentDidMount(){
        heart.forEach((pic)=>(new Image().src = pic))
    }
    handleMove(event){
        if (this.state.money < -7000){
            console.log('run!');
            this.setState({img: 0});
        }
        else if (this.state.money < -5000) {
            console.log('run!');
            this.setState({img: 1});
        }
        else if(this.state.money < 1000) {
            console.log('run!');
            this.setState({img: 2});
        }
        else if (this.state.money < 2000){
            console.log('run!');
            this.setState({img: 3});
        }
        else if (this.state.money < 4000){
            console.log('run!');
            this.setState({img: 4});
        }
        else if (this.state.money < 99999 ){
            console.log('run!');
            this.setState({img: 5});
        }
    }
    render(){
        return(
            <img id="heartbar" src= {heart[this.state.img]} /> 

            

            
        )
    }
}

export default Tamagotchi;


