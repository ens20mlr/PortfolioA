import React from "react";
import "./guldtorget.css"; // Skapa en ny CSS-fil för styling
import korea from "../assets/images/korea.jpeg"; // Lägg till din bild här

const Guldtorget = () => {
  return (
    <div className="project-container">
      <div className="project-content">
        <div className="project-text">
          <h1>Guldtorget</h1>
          <h3>Arkitekturprojekt</h3>
          <p>
            Guldtorget är ett innovativt arkitekturprojekt där vi har arbetat med
            hållbarhet och modern stadsutveckling. Projektet kombinerar estetik med 
            funktionalitet för att skapa en dynamisk och inbjudande stadsbild.
          </p>
          <ul className="project-details">
            <li><strong>Plats:</strong> Skellefteå</li>
            <li><strong>År:</strong> 2024</li>
            <li><strong>Material:</strong> Trä, Glas, Stål</li>
            <li><strong>Hållbarhetsfokus:</strong> Torgdesign</li>
          </ul>
        </div>
        <div className="project-image">
          <img src={korea} alt="Guldtorget" />
        </div>
      </div>
      
      <div className="project-extra">
        <h2>Om Projektet</h2>
        <p>
          Guldtorget är designat med hållbarhet i fokus. Byggnaden är skapad med 
          återvinningsbara material och har en energieffektiv design. Inspirationen 
          kommer från skandinavisk minimalism och urbana landskap.
        </p>
      </div>
    </div>
  );
};

export default Guldtorget;
