(function ($) {
	'use strict';
	window.ImageObjetView = Backbone.View.extend({
		tagName  : "div",
		className : "image-objet",
		template : _.template("<img src='<?=e.image?>'/>"),
		initialize: function () {
			this.listenTo(this.model, 'change', this.render);

			this.render();
		},
		render: function () {
			console.log( this.template({e : this.model.toJSON() }) );
			
			this.$el.html(this.template({e : this.model.toJSON()}));
			return this;
		},
	});
})(jQuery);