(function ($) {
	'use strict';
	window.LinkObjetView = Backbone.View.extend({
		tagName  : "div",
		className : "link-objet",
		template : _.template("<iframe src='<?=e.link?>' />"),
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
			this.$el.html(this.template({e : this.model.toJSON()}));
			return this;
		}
	});
})(jQuery);
