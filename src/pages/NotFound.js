import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <p>Page not found for {this.props.location.pathname}</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2nSZWOMux0qO3byzbQ09CnHPx4HbAqzmpnQ&usqp=CAU">
        </img>;
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
