# React

[@rimthong](https://twitter.com/rimthong) & [@BenjaminDreux](https://twitter.com/BenjaminDreux)

---

#  Présentation v1

---

# Virtual DOM

* Version pure JS du DOM
* diff(VDOM, DOM) & DOM.apply(diff)
* Pas touche au DOM

---

# Pourquoi ?

* un update -> _demande_ de repaint
* demande de repaint =\=> repaint
* comme un rendu de page par une api
* flu_idiffier le passage des données dans l'app
* Flux -> proposition de pattern

---

# Composant React

* Web components (Polymer)
* Directive (angular)
* Plugin JQuery

---

# React Vs. Web components

Les techno de base ne sont pas supporté nativement aujourd'hui

voir:
* http://caniuse.com/#search=object.observe
* http://caniuse.com/#search=shadowdom
* http://caniuse.com/#search=import
* http://caniuse.com/#search=template (moins vrai)

Sauf pour chrome

---

# Browserify

* Module pour Front end js _a la node_
* Utilisable aujourd'hui, pas quand ES6 sera terminé
* Pipeline de preprocesseur(jsx, cs, minify, uglify...)

---

# Pis les tests alors? 

JEST

* Jasmine ++ (it.only, xit, pit, xdescribe)
* Auto mocking
* Output de test qui aident
* Pas un requis pour tester du REACT

---

# Alternatives

* Riot.js (Muut, diqus like)
* Raynos/mercury (Uber) -> semble plus rapide que React
* OM (Interface Clojure script pour React )
* ELM (language appart)

---

# Des questions?

___
