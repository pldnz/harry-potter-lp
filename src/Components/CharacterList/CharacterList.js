import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CharacterList.scss";
import Limit from "../Generics/Limit/Limit";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharactersList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 8;

    useEffect(() => {
        // Carrega os primeiros 8 itens ao montar o componente
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://hp-api.onrender.com/api/characters`
            );
            // Adiciona os próximos 8 personagens
            const newCharacters = response.data.slice(offset, offset + limit);
            setCharacters((prevCharacters) => [
                ...prevCharacters,
                ...newCharacters,
            ]);
            setOffset((prevOffset) => prevOffset + limit);
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
        }
        setLoading(false);
    };

    return (
        <div className="character-list">
            <Limit styles={"character-list-limit"}>
                <h1 className="character-list-title">
                    Harry Potter Characters
                </h1>

                <p className="character-list-subtitle">
                    Learn more about the main characters of this amazing
                    franchise.
                </p>

                <ul>
                    {characters.map((character, index) => (
                        <li key={index}>
                            <CharacterCard character={character} />
                        </li>
                    ))}
                </ul>
                {loading && (
                    <span className="loading cinzel-decorative-bold">
                        Carregando...
                    </span>
                )}
                {!loading && offset < 300 && (
                    <button
                        aria-label="show more characters"
                        onClick={fetchCharacters}
                    >
                        Show More
                    </button>
                )}
            </Limit>
        </div>
    );
};

export default CharactersList;
