import React from "react";

import "./CharacterCard.scss";

import Gryffindor from "../../Assets/img/gryffindor.webp";
import Slytherin from "../../Assets/img/slytherin.webp";
import Hufflepuff from "../../Assets/img/hufflepuff.webp";
import Ravenclaw from "../../Assets/img/ravenclaw.webp";
import DefaultImage from "../../Assets/img/default.jpg";

const CharacterCard = ({ character }) => {
    return (
        <figure className={`character-card ${character.house}`}>
            <picture>
                {character.image ? (
                    <img src={character.image} alt={`${character.name}`} />
                ) : (
                    <>
                        {character.house === "Gryffindor" ? (
                            <img src={Gryffindor} alt={`${character.name}`} />
                        ) : character.house === "Slytherin" ? (
                            <img src={Slytherin} alt={`${character.name}`} />
                        ) : character.house === "Hufflepuff" ? (
                            <img src={Hufflepuff} alt={`${character.name}`} />
                        ) : character.house === "Ravenclaw" ? (
                            <img src={Ravenclaw} alt={`${character.name}`} />
                        ) : (
                            <img src={DefaultImage} alt={`${character.name}`} />
                        )}
                    </>
                )}
            </picture>
            <figcaption style={{ display: "flex", flexDirection: "column" }}>
                {character.name && <h2>{character.name}</h2>}
                {character.dateOfBirth && (
                    <span title="date of birth">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M92,140a12,12,0,1,1,12-12A12,12,0,0,1,92,140Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,116Zm-12.27,45.23a45,45,0,0,1-47.46,0,8,8,0,0,0-8.54,13.54,61,61,0,0,0,64.54,0,8,8,0,0,0-8.54-13.54ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.11,88.11,0,0,0-84.09-87.91C120.32,56.38,120,71.88,120,72a8,8,0,0,0,16,0,8,8,0,0,1,16,0,24,24,0,0,1-48,0c0-.73.13-14.3,8.46-30.63A88,88,0,1,0,216,128Z"></path>
                        </svg>
                        {character.dateOfBirth}
                    </span>
                )}
                {character.house && (
                    <span title="house">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
                        </svg>
                        {character.house}
                    </span>
                )}
                {character.patronus && (
                    <span title="patronus">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M212,80a28,28,0,1,0,28,28A28,28,0,0,0,212,80Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,120ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM44,120a12,12,0,1,1,12-12A12,12,0,0,1,44,120ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm0-40A12,12,0,1,1,80,60,12,12,0,0,1,92,48Zm72,40a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,48Zm23.12,100.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72ZM168,208a24,24,0,0,1-9.45-1.93,80.14,80.14,0,0,0-61.19,0,24,24,0,0,1-20.71-43.26,51.22,51.22,0,0,0,24.46-30.67,28,28,0,0,1,53.78,0,51.27,51.27,0,0,0,24.53,30.71A24,24,0,0,1,168,208Z"></path>
                        </svg>
                        {character.patronus}
                    </span>
                )}
                {character.actor && (
                    <span title="actor">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56Zm90.34,78.05L173.17,82.83a32,32,0,0,0-24-10.83H106.83a32,32,0,0,0-24,10.83L37.66,134.05a20,20,0,0,0,28.13,28.43l16.3-13.08L65.55,212.28A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.41-16.52L173.91,149.4l16.3,13.08a20,20,0,0,0,28.13-28.43Zm-11.51,16.77a4,4,0,0,1-5.66,0c-.21-.2-.42-.4-.65-.58L165,121.76A8,8,0,0,0,152.26,130L175.14,217a7.72,7.72,0,0,0,.48,1.35,4,4,0,1,1-7.25,3.38,6.25,6.25,0,0,0-.33-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.25,6.25,0,0,0-.33.63,4,4,0,0,1-2.26,2.07,4,4,0,0,1-5-5.45,7.72,7.72,0,0,0,.48-1.35L103.74,130A8,8,0,0,0,91,121.76L55.48,150.24c-.23.18-.44.38-.65.58a4,4,0,1,1-5.66-5.65c.12-.12.23-.24.34-.37L94.83,93.41a16,16,0,0,1,12-5.41h42.34a16,16,0,0,1,12,5.41l45.32,51.39c.11.13.22.25.34.37A4,4,0,0,1,206.83,150.82Z"></path>
                        </svg>
                        {character.actor}
                    </span>
                )}
                {character.alive && (
                    <span title="status">{character.alive}</span>
                )}
            </figcaption>
        </figure>
    );
};

export default CharacterCard;
