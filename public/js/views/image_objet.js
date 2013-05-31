(function ($) {
	'use strict';
	window.ImageObjetView = Backbone.View.extend({
		tagName  : "div",
		className : "image-objet",
		template : _.template("<img src='<?=e.image?>'/>"),
		initialize: function () {
			_.bindAll(this,"onMoved");

			this.listenTo(this.model, 'change', this.render);
			this.$el.draggable({cursor: "crosshair"})
					.on("drag",this.onMoved)
					.css({"position":"absolute"});

			this.render();
		},
		onMoved : function(){
			this.model.set("position",{
				x : this.$el.position().left,
				y : this.$el.position().top
			});
			this.model.save();
		},
		render: function () {
			var position = this.model.get("position");
			var size	 = this.model.get("size");
			this.$el.css({
				left   : position.x + "px",
				top    : position.y + "px",
				width  : size.width + "px",
				height : size.height + "px",
				"-webkit-transform": "rotate(" + this.model.get("rotation") + "deg)"
			});
			this.$el.html(this.template({e : this.model.toJSON()}));
			return this;
		}
	});
})(jQuery);