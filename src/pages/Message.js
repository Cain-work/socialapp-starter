import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

import { Form, Button, TextArea,  } from 'semantic-ui-react'
import DataService from '../components/DataService'
import MessageFeed from '../components/messageFeed/MessageFeed'



class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
    this.client = new DataService();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    this.client.createMessage(this.state).then((result) => {
      console.log(result.data);
    });
  };

  render() {
    return (
      <div className="Messages">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <h2>Messages</h2>
        <ul>
          <MessageFeed />
        </ul>

        <Form onSubmit={this.handleSubmit}>
          <div>
            <TextArea
              placeholer="Enter Message"
              style={{ minHeight: 200, maxWidth: 500 }}
              type="text"
              name="text"
              required
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Button size="large" content="Post it!" />
          </div>
        </Form>
      </div>
    );
  }
}

export default userIsAuthenticated(Messages);
