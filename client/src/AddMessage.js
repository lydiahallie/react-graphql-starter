import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export default class AddMessage extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      title: "",
      body: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const inputFields = Object.keys(this.state);
    return (
      <div>
        {inputFields.map(field => (
          <input
            placeholder={field}
            name={field}
            onChange={e => this.handleChange(e)}
            value={this.state[field]}
          />
        ))}
        <Mutation
          mutation={ADD_MESSAGE}
          variables={this.state}
          refetchQueries={() => [{ query: GET_MESSAGES }]}
        >
          {addMessage => <button onClick={addMessage}>Add Message</button>}
        </Mutation>
      </div>
    );
  }
}

const GET_MESSAGES = gql`
  {
    messages {
      body
    }
  }
`;

const ADD_MESSAGE = gql`
  mutation AddMessage($body: String!, $title: String!, $author: String!) {
    addMessage(body: $body, title: $title, author: $author) {
      author
    }
  }
`;
