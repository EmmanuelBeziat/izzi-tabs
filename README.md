Tabs
===========

Un simple plugin d'onglets en jQuery, utilisable aussi bien pour la navigation d'un site qu'un simple bloc de présentation.

#Utilisation

Le principe est basé sur les ancres html.
Appelez simplement la méthode tabs() sur un objet jQuery, qui soit (ou contienne) une liste html contenant des liens avec l'attribut <code>data-toggle</code> ayant la valeur <code>tab</code>.
```javascript
$('#element').tabs();
```

## Exemple
```html
<div class="tabs">
	<ul>
		<li><a href="#ancre1" data-toggle="tab">Onglet 1</a></li>
		<li><a href="#ancre2" data-toggle="tab">Onglet 2</a></li>
		<li><a href="#ancre3" data-toggle="tab">Onglet 3</a></li>
		<li><a href="#ancre4" data-toggle="tab">Onglet 4</a></li>
	</ul>
</div>
<div class="contenus">
	<div id="ancre1">Contenu</div>
	<div id="ancre2">Contenu</div>
	<div id="ancre3">Contenu</div>
	<div id="ancre4">Contenu</div>
</div>
```

#Options
<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Valeur par défaut</th>
			<th>Valeurs possibles</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>mode</th>
			<td><code>fade</code></td>
			<td><code>fade</code>, <code>slide</code></td>
			<td>Choisi un type d'animation de changement d'onglets.</td>
		</tr>
		<tr>
			<th>anchors</th>
			<td><code>false</code></td>
			<td><code>true</code>, <code>false</code></td>
			<td>Gère ou non l'utilisation des ancres dans l'url pour définir l'onglet activé par défaut ; si la valeur est <code>true</code>, entrer l'url d'une page avec l'ancre activera automatiquement l'onglet correspondant.</td>
		</tr>
		<tr>
			<th>time</th>
			<td>400</td>
			<td>nombre ou valeurs clé de temps jquery (<code>slow</code>, <code>fast</code>)</td>
			<td>Gère le temps de l'animation de changement de contenu.</td>
		</tr>
		<tr>
			<th>class</th>
			<td>selected</td>
			<td>N'importe quelle chaîne de caractères</td>
			<td>Permet de choisir le nom de la classe attribuée à l'onglet actuellement sélectionné.</td>
		</tr>
	</tbody>
</table>

#Évolutions envisagées
*Rendre l'attribut data-toggle facultatif
*Proposer d'autres modes d'affichage