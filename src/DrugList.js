import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import f1 from './img/drugs/f1.jpg';
import f2 from './img/drugs/f2.png';
import f3 from './img/drugs/f3.jpg';
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const f1title = "Helyderma";
const f1text = "descrizione";

const f2title = "Aspirina C";
const f2text = "all'arancia";

const f3title = "Regolint";
const f3text = "descr regolint";

class DrugList extends Component {//https://github.com/express-labs/pure-react-carousel#slide- docs per lo slide
    render(){
        return(
          <div className="col-10 mx-auto text-center">
          <CarouselProvider
        naturalSlideWidth={5}
        naturalSlideHeight={5}
        totalSlides={3}>

        <Slider> 
        <Slide onFocus={this.focused} index={0}><Item img={f1} title={f1title} text={f1text} /></Slide>
        <Slide onFocus={this.focused} index={1}><Item img={f2} title={f2title} text={f2text} /></Slide>
        <Slide onFocus={this.focused} index={2}><Item img={f3} title={f3title} text={f3text} /></Slide>
          </Slider>

          <hr />
          
          <div class="btn-group" role="group">
          <ButtonBack className="btn btn-primary">Indietro</ButtonBack>
          <ButtonNext className="btn btn-primary">Avanti</ButtonNext>
          </div>
          
          </CarouselProvider>
          </div>
        );
    }
}

class Item extends Component {
  focused(){
    const element = <h4>{this.props.title}</h4>;
    ReactDOM.render(element, document.getElementById('title'));
    const element1 = <p>{this.props.text}</p>;
    ReactDOM.render(element1, document.getElementById('desc'));
  }

  render(){
      return(
          <Image className="rounded mx-auto d-block" src={this.props.img} hasMasterSpinner="false"/>
      );
  }
}

export default DrugList;