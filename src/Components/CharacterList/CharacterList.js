import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CharacterList.scss";

const CharactersList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 10;

    useEffect(() => {
        // Carrega os primeiros 10 itens ao montar o componente
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://hp-api.onrender.com/api/characters`
            );
            // Adiciona os próximos 10 personagens
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

    useEffect(() => {
        console.log(characters);
    }, [characters]);

    return (
        <div>
            <h1>Lista de Personagens</h1>
            <ul>
                {characters.map((character, index) => (
                    <li key={index} className={`${character.house}-card`}>
                        {character.name}
                    </li>
                ))}
            </ul>
            {loading && <p>Carregando...</p>}
            {!loading && offset < 300 && (
                <button onClick={fetchCharacters}>Carregar Mais</button>
            )}
        </div>
    );
};

export default CharactersList;
