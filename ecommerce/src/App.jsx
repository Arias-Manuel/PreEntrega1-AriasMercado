import "./App.css";

import NavBar from "./components/NavBar";

import ItemlistContainer from "./components/ItemListContainer";

import Gaming from "./components/Gaming";

function App() {
  return (
    <>
      <NavBar background={"transparent"} />
      <Gaming tittle={Gaming} />

      <ItemlistContainer greetings={"¡Saludos!"} />

      <ItemlistContainer greetings={"En un momento abriremos :D"} />
    </>
  );
}

export default App;
