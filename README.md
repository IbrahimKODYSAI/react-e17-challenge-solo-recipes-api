# Challenge : React-Router Recipes

Le but du jeu : créer une application avec React-Router,
pour présenter dans chaque page une recette de cuisine
provenant de https://github.com/raywenderlich/recipes


## Resultat

Résultat : [GIF](https://static.oclock.io/challenges/React-E17-challenge-solo-recipes-api/resultat.gif)


## Instructions

* L'application doit venir récupérer ces recettes de cuisine : https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json

* Pour le design, on peut s'inspirer de l'exercice Recette React :wink:

* Utiliser le module [`slugify`](https://github.com/simov/slugify)
pour créer un "slug", c'est-à-dire un identifiant string unique,
qu'on utilisera pour avoir une URL sans caractères spéciaux.


## Help

### Baby steps

Allez-y doucement ! Faites une seule chose à la fois :
* D'abord, on affiche une recette en dur.
* Puis on fait un peu de style.
* Puis on en affiche une deuxième en dur.
* Puis on se rajoute un Router, en dur.
* Puis on dynamise petit à petit…
* **Surtout, ne commencez pas directement par l'API !** :scream:  
Vous pouvez par exemple télécharger le json et le mettre dans `src/datas/recipes.json`
pour vous passer d'une requête ajax dans un premier temp.

### Les librairies à utiliser

Pour ce challenge, on pourrait utiliser :
* `react-router` pour s'organiser en pages.
* `redux` pour organiser nos données.
* `react-redux` pour connecter nos composants à nos données.
* `axios` via un *middleware redux* pour aller chercher l'info sur l'API.
