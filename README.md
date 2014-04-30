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
&lt;div class="tabs"&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;a href="#ancre1" data-toggle="tab"&gt;Onglet 1&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="#ancre2" data-toggle="tab"&gt;Onglet 2&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="#ancre3" data-toggle="tab"&gt;Onglet 3&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="#ancre4" data-toggle="tab"&gt;Onglet 4&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;
&lt;div class="contenus"&gt;
	&lt;div id="ancre1"&gt;Contenu&lt;/div&gt;
	&lt;div id="ancre2"&gt;Contenu&lt;/div&gt;
	&lt;div id="ancre3"&gt;Contenu&lt;/div&gt;
	&lt;div id="ancre4"&gt;Contenu&lt;/div&gt;
&lt;/div&gt;
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