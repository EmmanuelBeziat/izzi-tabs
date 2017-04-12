![version](https://img.shields.io/badge/version-1.0.0-orange.svg?style=flat-square)

# IzziTabs

A lightweight and simple plugin to have sticky stuff.

---

#Install

Using `npm` command, it’s as simple as this :
```bash
npm i -D izzi-tabs
```

If you use bower, you can just do

```bash
$ bower i izzi-tabs
```

Or you could just download the files on GitHub.

# How to use

```javascript
var izziTabs = new IzziTabs('.izzi-tabs');
```

You can pass either a html object, or a selector in a string.

Then, you should have a markup similar to this:

```html
<nav class="tab-links izzi-tabs">
	<a href="#tab1" class="tab-links__item is-active">tab1</a>
	<a href="#tab2" class="tab-links__item">tab2</a>
	<a href="#tab3" class="tab-links__item">tab3</a>
	<a href="#tab4" class="tab-links__item">tab4</a>
</nav>

<div class="tab-content">
	<div class="tab-content__item is-active" id="tab1">
		<!-- -->
	</div>

	<div class="tab-content__item" id="tab2">
		<!-- -->
	</div>

	<div class="tab-content__item" id="tab3">
		<!-- -->
	</div>

	<div class="tab-content__item" id="tab4">
		<!-- -->
	</div>
</div>
```

The plugin work with a simple anchor system.

Check the demo files for an example.

# Options

You can also pass options to the plugin to change it’s default settings, like this:

```javascript
var izziTabs = new IzziTabs('.izzi-tabs', {
	tabLinkSelector: 'tab-link',
	tabLinkActiveClass: 'tab-link--active',
	afterShowTab: function () {
		console.log('after show');
	}
});
```

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Default value</th>
			<th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>tabLinkSelector</th>
			<td>'.tab-links__item'</td>
			<td>string</td>
			<td>Define a CSS selector to find your link items</td>
		</tr>
		<tr>
			<th>tabLinkActiveClass</th>
			<td>'is-sticky'</td>
			<td>string</td>
			<td>The class name to be applied to the link item you activate</td>
		</tr>
		<tr>
			<th>tabItemSelector</th>
			<td>'.tab-content__item'</td>
			<td>string</td>
			<td>Define a CSS selector to find your open tab panel</td>
		</tr>
		<tr>
			<th>tabItemActiveClass</th>
			<td>'is-active'</td>
			<td>string</td>
			<td>The class name to be applied to the panel you activate</td>
		</tr>
		<tr>
			<th>beforeShowTab</th>
			<td>null</td>
			<td>function</td>
			<td>A callback function to be called before the panel is showed</td>
		</tr>
		<tr>
			<th>afterShowTab</th>
			<td>null</td>
			<td>function</td>
			<td>A callback function to be called after the panel is showed</td>
		</tr>
	</tbody>
</table>

# TODO

* Add possibility to easily animate the tab panel
