import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, } from 'reactstrap'; 

        function RenderComments({comments}){
          const comment =  comments.map((comment) => {
            var d = new Date(comment.date); 
            let date = (d.toDateString() /* +" " + d.toTimeString().split(/\s/)[0] */);
            /* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} */
            return (
                  <div key={comment.id} className="comments"> 
                    <span>{date}</span>
                    <h4>{comment.comment}</h4>
                    <p>{comment.author}</p>
                  </div>
            );
          })
          return comment
        };
      
        const DishDetail = (props) => {
          const dish_detail = props.dish
          console.log(props.dish)
          if (dish_detail != null)

            return(
              <div className="container">
              <div className='row'>
                <div className='col-12'>
                  <h2> Dish Detail </h2>
                </div>
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
                      <RenderComments comments={props.dish.comments} />
                   </div>
              </div>
              </div>
            );
          else
              return(
                  <div></div>
              );

}

export default DishDetail;