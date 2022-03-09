import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'; 
  import { Link } from 'react-router-dom';

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
        function RenderDish({dish}){
          return (
            <Card key={dish.id}  onClick={() => this.props.onClick(dish.id)}>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
            );
        };      
        const DishDetail = (props) => {
          const dish_detail = props.dish
          console.log(props.dish)
          if (dish_detail != null)

            return(

                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
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