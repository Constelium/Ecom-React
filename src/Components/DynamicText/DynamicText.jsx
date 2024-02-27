import { useEffect } from "react";
import "./DynamicText.css";

const DynamiqueText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");

    let array = ["Digital canvas", "Dashboard", "Everything"];
    let wordIndex = 0;

    const createWord = () => {
      target.innerHTML = ""; // Supprimer le contenu précédent

      const word = document.createElement("span");
      target.appendChild(word);

      word.classList.add("word");
      word.textContent = array[wordIndex];

      wordIndex = (wordIndex + 1) % array.length; // Incrémenter wordIndex pour passer au mot suivant
    };

    setInterval(createWord, 2000); // Changer le mot toutes les 2 secondes

    createWord(); // Initialiser avec le premier mot
  }, []);

  return (
    <span className="dynamic-text">
      <span>Constelium : display your</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamiqueText;
