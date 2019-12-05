import React, {Component} from 'react';

const heart = [
    "/0hearts.png",
    "/1heart.png",
    "/2hearts.png",
    "/3hearts.png",
    "/4hearts.png",
    "/5hearts.png"
]



class Heart extends Component{
    constructor(props){
        super(props);
        this.state = {
            img: "3"
        }
        this.handleMove = this.handleMove.bind(this);
    }

    componentDidMount(){
        heart.forEach((pic)=>(new Image().src = pic))
    }
    handleMove(event){

    }
    render(){

        let img = 3;

        if (this.props.money < -7000){
            img = 0;
        }
        else if (this.props.money < -5000) {
            img = 1;
        }
        else if(this.props.money < 1000) {
            img = 2;
        }
        else if (this.props.money < 2000){
            img = 3;
        }
        else if (this.props.money < 4000){
            img = 4;
        }
        else if (this.props.money < 99999 ){
            img = 5;
        }

        return(
            <img id="heartbar" src= {heart[img]} /> 

            

            
        )
    }
}

export default Heart;


