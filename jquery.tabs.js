/**
* Système d'onglets automatisé
* Version : 2.1
* Par Emmanuel "Manumanu" B. (www.emmanuelbeziat.com)
**/

(function($) {
	$.fn.tabs = function(params) {

		// valeurs par défauts des options
		params = $.extend({
			'mode':	'fade',
			'anchors': false,
			'duration': 400,
			'class': 'selected'
		}, params);

		this.each(function() {

			// Variables
			var page = $('html, body');
			var tabContainer = $(this);
			var tabFirst = tabContainer.find('li:first a');
			var tabCurrent = null;
			var tabID = null;
			var tabAnchor = window.location.hash;

			// Attribuer l'onglet par défaut comme étant le premier, ou utiliser l'ancre
			if (params.anchors == true && tabAnchor != '' && tabContainer.find('a[data-toggle="tab"]'))
				tabFirst = tabContainer.find('a[href="' + tabAnchor + '"]');

			// Appliquer la class select sur l'onglet actuel
			tabFirst.addClass(params.class);

			// Afficher l'élément par défaut correspondant à celui de l'onglet par défaut ou l'onglet ancré
			tabCurrent = tabFirst.attr('href');
			$(tabCurrent).show().siblings().hide();

			// Gestion de l'événement clic
			tabContainer.find('a[data-toggle="tab"]').on('click', function(event) {

				tabID = $(this).attr('href');
				
				// Si l'élément n'est pas déjà sélectionné
				if (tabID != tabCurrent) {
					
					// Afficher le contenu demandé et masquer le contenu restant
					switch (params.mode) {
						case ('fade'):
							$(tabID).fadeIn(params.duration).siblings().hide();
							break;
						case ('slide'):
							$(tabID).siblings().slideUp();
							$(tabID).delay(params.duration).slideDown();
							break;
						default:
							$(tabID).fadeIn(params.duration).siblings().hide();
							break;
					}
		
					// Retirer la classe des autres onglets et l'ajouter sur l'élément sélectionné
					$(this).addClass(params.class).parent('li').siblings().children('a').removeClass(params.class);
					tabCurrent = tabID;
				}

				// Empêche le déclenchement du lien si voulu
				if (params.anchors == true)
					setTimeout(function() { page.scrollTop(0, 0);}, 1);
				else
					event.preventDefault();
			});
		});

		// Chainage jQuery
		return this;
	};
})(jQuery);