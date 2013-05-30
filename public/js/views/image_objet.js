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
			this.$el.css({
				left   : this.model.get("position").x + "px",
				right  : this.model.get("position").x + "px",
				width  : this.model.get("size").width + "px",
				height : this.model.get("size").height + "px",
				"-webkit-transform": "rotate(" + this.model.get("rotation") + "deg)"
			});
			console.log(this.model.toJSON());
			this.$el.html(this.template({e : this.model.toJSON()}));
			return this;
		}
	});
})(jQuery);