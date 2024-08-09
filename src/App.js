import React from "react";
import Header from "./Components/Header/Header";
import CharactersList from "./Components/CharacterList/CharacterList";
import CharacterModal from "./Components/CharacterModal/CharacterModal";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div>
            <Header />

            <CharactersList />

            <CharacterModal />

            <Footer />
        </div>
    );
}

export default App;
