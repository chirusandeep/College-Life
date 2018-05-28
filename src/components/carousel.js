
import React, { Component } from 'react';
import { Carousel, CarouselCaption, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, View } from 'mdbreact';
import { Container, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import './carousel.css';

export default class CarouselPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 4
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render() {
    const { activeItem } = this.state;

    return (

      <div className="style">
        <Carousel
          activeItem={this.state.activeItem}
          next={this.next}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View >
                <img className="d-block w-100" src="http://www.backgroundimageshd.com/wp-content/uploads/2017/12/City-Full-HD-Wallpaper-1920x108023.jpg" alt="First slide" />

              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View >
                <img className="d-block w-100" src="http://www.backgroundimageshd.com/wp-content/uploads/2017/12/boal-wallpaper-1920x1080222.jpg" alt="Second slide" />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View >
                <img className="d-block w-100" src="http://www.backgroundimageshd.com/wp-content/uploads/2017/12/Black-Wallpapers-HD-1920x108020.jpg" alt="Third slide" />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View >
                <img className="d-block w-100" src="http://www.backgroundimageshd.com/wp-content/uploads/2017/12/1920x1080-Wallpaper15.jpg" alt="Mattonit's item" />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
          <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
          <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
          <CarouselIndicators>
            <CarouselIndicator active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 4 ? true : false} onClick={() => { this.goToIndex(4); }}></CarouselIndicator>
          </CarouselIndicators>
        </Carousel>
        
        <div className="card-container">
        
          <h4 className="mt-5 md-2">Departments</h4>
       
          <div className="row">
            
            
              <div className="col-md-3">
              <div className="cardsty">
                <Card>
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                  <div className="hoverable">
                  <CardBody>
                    <CardTitle>Computer Science</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                  </div>
                </Card>
              </div>
            </div>
            
              <div className="col-md-3">
              <div className="cardsty">
                <Card>
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                  <div className="hoverable">
                  <CardBody>
                    <CardTitle>ECE</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                  </div>
                </Card>
              </div >
            </div>
            
              <div className="col-md-3">
              <div className="cardsty">
                <Card>
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                  <div className="hoverable">
                  <CardBody>
                    <CardTitle>EEE</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                  </div>
                </Card>
              </div >
            </div>
            
              <div className="col-md-3">
              <div className="cardsty">
                <Card>
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                 <div className="hoverable">
                  <CardBody>
                    <CardTitle>MECH</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                  </div>
                </Card>
              </div >
            </div>
            <div className="col-md-3">
              <div className="cardsty">
                <Card>
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                  <div className="hoverable">
                  <CardBody>
                    <CardTitle>Civil</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                  </div>
                </Card>
              </div >
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
