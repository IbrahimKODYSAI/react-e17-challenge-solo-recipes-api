// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux
import './instructions.scss';

// Composant
// on peut récuperer props, un objet contenant nos propriétés
// puis le destructurer
// const Instructions = (props) => {
//   const { instructions } = props;
// on peut également donner un alias, un autre nom à la propriété qu'on destructure
//   const { instructions: taches } = props;

// on peut aussi le destructurer dès la récupération
const Instructions = ({ instructions }) => {
  return (
    <ol className="instructions">
      {/* on ouvre une faille pour pouvoir venir parcourir */}
      {/* le tableau instruction */}
      {/* on utilise map pour retourner du JSX pour chaque entrée du tableau */ }
      {instructions.map((instruction) => {
        return (
          <li key={instruction} className="instructions-instruction">
            {/*
              lorsqu'on renvoie du JSX dans un map/ une boucle
              on doit spécifier une propriété key obligatoirement
              pour que react puisse fonctionner de manière optimale, rapide
              ce key doit être unique, on préfère utiliser un id
              ici on n'a pas d'id, on préfère utiliser directement la donnée que l'index
              (un tableau pouvant être réordonné)
            */}
            {instruction}
          </li>
        );
      })}
    </ol>
  );
};

// on valide nos props
Instructions.propTypes = {
  // en clé on met le nom de la props
  // en valeur on met la condition à respecter
  // on peut spécifier ce que doit contenir notre tableau
  instructions: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

// Export composant
export default Instructions;
