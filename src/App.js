import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <Navbar />
        <Main />
      </div>
    </ChakraProvider>
  );
}

export default App;
