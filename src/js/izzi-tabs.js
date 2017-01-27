/*!
 * A simple tabs plugin. Use it for navigation or as a simple showoff section.
 * Version : 1.0.0
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/js-izzi-tabs
 **/

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.IzziTabs = factory();
	}
}(this, function () {
	var IzziTabs = function (el, options){
		'use strict';

		var self = Object.create(IzziTabs.prototype);

		/**
		 * Default settings
		 */
		self.options = {
			linkSelector: '[data-tabs]',
			linkClassActive: 'is-active',
			tabSelector: '[data-tabs-item]',
			tabClassActive: 'is-active',
			onClick: null
		};

		/**
		 * User defined options
		 */
		if (options) {
			Object.keys(options).forEach(function (key){
				self.options[key] = options[key];
			});
		}

		/**
		 * By default, search for an item with 'data-sticky' attribute
		 */
		if (!el) {
			self.tabs = document.querySelector('.js-izzi-tabs');
		}

		if (el && 'string' === typeof el) {
			self.tabs = document.querySelector(el);
		}
		else if (el && 'object' === typeof el) {
			self.tabs = el;
		}
		else {
			throw new Error('[IzziTabs] Unable to get a valid object');
		}

		self.links = document.querySelectorAll(self.options.linkSelector);

		var init = function () {
			build.call(this);
		};

		/**
		 * [1] remove classes on all tabs and add it on clicked tab
		 * [1] remove classes on all tabs content and add it on clicked tab
		 */
		function activeTab(element) {
			var tabsContainer = document.querySelector(self.options.tabSelector).parentNode;
			var tabItem = tabsContainer.querySelector(element.getAttribute('href'));

			if (element.classList.contains(self.options.linkClassActive)) {
				return;
			}

			// [1]
			Array.prototype.forEach.call(self.links, function (sibling) {
				sibling.classList.remove(self.options.linkClassActive);
			});

			element.classList.add(self.options.linkClassActive);

			Array.prototype.forEach.call(tabsContainer.childNode, function (sibling) {
				sibling.classList.remove(self.options.tabClassActive);
			});

			tabItem.classList.add(self.options.tabClassActive);

			// callback
			if ('function' === typeof self.options.onClick) {
				self.options.onClick();
			}
		}

		/**
		 * Main build function
		 * 1.
		 * 2. Fire events when focus and blur happen
		 */
		function build() {
			Array.prototype.forEach.call(self.links, function (link) {

				link.addEventListener('click', function (event) {
					event.preventDefault();

					activeTab(link);
				});
			});
		}


		init();
		return self;
	};
	return IzziTabs;
}));