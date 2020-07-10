import React from "react";
import SortingPage from "./components/sortingPage/sortingPage";
import NavBar from "./components/navbar/navbar";
import { Container } from "@material-ui/core";
import "./App.scss";

const title = "algovisualizations";

function App() {
  return (
    <main>
      <NavBar title={title} />
      <Container>
        <SortingPage />
      </Container>
    </main>
  );
}

export default App;
