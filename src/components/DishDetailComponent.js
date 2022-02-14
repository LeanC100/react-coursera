import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, } from 'reactstrap'; 

class DishDetail extends Component {

        menu(){
          const comment =this.props.dish.comments.map((comments) => {
            var d = new Date(comments.date); 
            let date = (d.toDateString() /* +" " + d.toTimeString().split(/\s/)[0] */);
            /* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} */
            return (
                <div key={comments.id} className="comments"> 
                  <span>{date}</span>
                  <h4>{comments.comment}</h4>
                  <p>{comments.author}</p>
                </div>
            );
          });
          return comment
        }
      
      render() {
        const dish_detail = this.props.dish
        console.log(this.props.dish)
          if (dish_detail != null)

            return(
              <div>
                <h2> Dish Detail </h2>

                <div className='row'>
                  <div  className="col-12 col-md-5 m-1">

                  <Card key={dish_detail.id}  onClick={() => this.props.onClick(dish_detail.id)}>
                      <CardImg top src={dish_detail.image} alt={dish_detail.name} />
                      <CardBody>
                        <CardTitle>{dish_detail.name}</CardTitle>
                        <CardText>{dish_detail.description}</CardText>
                      </CardBody>
                  </Card>
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                      <div>{this.menu()}</div>
                  </div>
                </div>
              </div>
            );
          else
              return(
                  <div></div>
              );
      }

}

export default DishDetail;