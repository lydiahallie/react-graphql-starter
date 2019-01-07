import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import id from "short-id";

export default () => (
  <Query query={GET_MESSAGES}>
    {({ data, loading }) => {
      if (loading) return "Loading...";
      return (
        data &&
        data.messages &&
        data.messages.map(msg => <p key={id.generate()}>{msg.body}</p>)
      );
    }}
  </Query>
);

const GET_MESSAGES = gql`
  {
    messages {
      body
    }
  }
`;
