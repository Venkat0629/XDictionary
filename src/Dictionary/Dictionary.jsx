import React, { useState } from "react";
import styles from "./Dictionary.module.css";

export default function XDictionary() {
  const [text, setText] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleChange = (event) => setText(event.target.value);
  const handleClick = () => fetchMeaning(text);
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const fetchMeaning = (word) => {
    try {
      const meaning = dictionary.find(
        (item) => item.word.toLowerCase() === word.toLowerCase()
      );
      if (meaning !== undefined) setMeaning(meaning.meaning);
      else setMeaning("Word not found in the dictionary.");
    } catch (error) {
      console.error("Error fetching meaning of word:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Search for a word..."
      />
      <button onClick={handleClick}>Search</button>{" "}
      <h4 className={styles.wrapper}> Definition: </h4>
      {meaning && <p className={styles.text}>{meaning}</p>}
    </div>
  );
}
