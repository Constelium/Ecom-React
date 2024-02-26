import { useEffect } from "react";
import "./DynamicText.css";

const DynamiqueText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");

    let array = ["Digital canvas", "Dashboard", "Everything"];
    let wordIndex = 0;

    const createWord = () => {
      // Supprimer le contenu précédent
      target.innerHTML = "";

      const word = document.createElement("span");
      target.appendChild(word);

      word.classList.add("word");
      word.textContent = array[wordIndex];

      // Incrémenter wordIndex pour passer au mot suivant
      wordIndex = (wordIndex + 1) % array.length;
    };

    // Changer le mot toutes les 2 secondes
    setInterval(createWord, 2000);

    // Initialiser avec le premier mot
    createWord();
  }, []);

  return (
    <span className="dynamic-text">
      <span>Constelium, display your</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamiqueText;