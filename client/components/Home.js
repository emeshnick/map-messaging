import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  mainContainer: {
    padding: "5rem",
  },
};
class Home extends React.Component {
  render() {
    return (
      <Container style={styles.mainContainer}>
        <h1>Map Messaging</h1>
      </Container>
    );
  }
}

export default Home;
