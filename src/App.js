import "./App.scss";
import AuthContainer from "./components/auth/AuthContainer";

import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

 const AppContainer = styled.div`
  background: linear-gradient(135deg, #7ed56f, #28a745, #007bff, #6610f2);
  background-size: 400% 400%;
  animation: GradientAnimation 15s infinite;

  @keyframes GradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;


function App() {
  return (
    <div>
       <AppContainer>
       <Navbar />
      <AuthContainer />
      <Footer />
      </AppContainer>
    </div>
  );
}

export default App;
