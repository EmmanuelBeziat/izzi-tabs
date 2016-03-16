Tabs
===========

A simple tabs plugin with jQuery. Use it for navigation or as a simple showoff section.

#Install

If you use Bower :

```bash
$ bower install jquery-simple-tabs
```

Or else, you can just download the files manually on github.

#Use

The plugin is based on html anchors.
Just call the <code>tabs()</code> method on a jQuery object, which must be (or contain) a html list with links and having a <code>data-tabs</code> attribute.
```javascript
$('#element').tabs();
```

## Exemple
```html
<div class="tabs">
	<ul>
		<li><a href="#anchor1" data-tab>Tab 1</a></li>
		<li><a href="#anchor2" data-tab>Tab 2</a></li>
		<li><a href="#anchor3" data-tab>Tab 3</a></li>
		<li><a href="#anchor4" data-tab>Tab 4</a></li>
	</ul>
</div>
<div class="content">
	<div id="anchor1">Content</div>
	<div id="anchor2">Content</div>
	<div id="anchor3">Content</div>
	<div id="anchor4">Content</div>
</div>
```

```javascript
$('.tabs').tabs();
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
			<th>showFirst</th>
			<td><code>true</code></td>
			<td><code>false</code>, <code>slide</code>, <code>show</code></td>
			<td>Automatically show the first tab when loading</td>
		</tr>
		<tr>
			<th>selector</th>
			<td>'a[data-tab]'</td>
			<td>Any element to be targeted</td>
			<td>Help to target the link that must be used as a tab</td>
		</tr>
		<tr>
			<th>mode</th>
			<td><code>fade</code></td>
			<td><code>fade</code>, <code>slide</code>, <code>show</code></td>
			<td>Choose an animation style</td>
		</tr>
		<tr>
			<th>anchors</th>
			<td><code>false</code></td>
			<td><code>true</code>, <code>false</code></td>
			<td>Allow the use of hashes in url to define the active tab. If set on <code>true</code>, typing a url with the anchor will activate the targeted tab.</td>
		</tr>
		<tr>
			<th>duration</th>
			<td>400</td>
			<td>integer or jquery time value (<code>slow</code>, <code>fast</code>)</td>
			<td>Animation duration</td>
		</tr>
		<tr>
			<th>class</th>
			<td>active</td>
			<td>string</td>
			<td>Customize the active class on selected tab</td>
		</tr>
		<tr>
			<th>onComplete</th>
			<td>null</td>
			<td>Any function</td>
			<td>Trigger a function when a tab is selected</td>
		</tr>
	</tbody>
</table>

#Example
```javascript
$('.tabs').tabs({
	mode: slide,
	anchors: true,
	duration: slow,
	class: 'tabs-active',
	onComplete: function() {
		console.log('action');
	}
});
```

#Todo
* Make the use of data-toggle optionnal
* Use a CSS animation mode
