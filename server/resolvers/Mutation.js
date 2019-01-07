import { messages } from "../fake_data";

const Mutation = {
  addMessage: (_, { title, body, author }) => {
    const newMessage = { title, body, author };
    messages.push(newMessage);
    return newMessage;
  }
};

export default Mutation;
