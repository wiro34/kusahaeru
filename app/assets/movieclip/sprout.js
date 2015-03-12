(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sprout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{grow:0});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14));

	// レイヤー 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AAAAsIDGAAIAAGqIjGAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AAAAOIDGAAIAAGqIjGAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AAAgLIDHAAIAAGoIjHAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AAAgkIDHAAIAAGoIjHAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AAAg7IDHAAIAAGoIjHAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AAAhQIDHAAIAAGoIjHAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AAAhiIDHAAIAAGoIjHAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AAAhzIDHAAIAAGoIjHAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AAAiBIDHAAIAAGoIjHAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AAAiNIDHAAIAAGoIjHAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AAAiXIDHAAIAAGoIjHAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AAAieIDHAAIAAGoIjHAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AAAikIDHAAIAAGoIjHAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AAAinIDHAAIAAGoIjHAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AAAioIDIAAIAAGoIjIAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:19.9,y:47}).wait(1).to({graphics:mask_graphics_1,x:19.9,y:44.1}).wait(1).to({graphics:mask_graphics_2,x:19.9,y:41.4}).wait(1).to({graphics:mask_graphics_3,x:19.9,y:38.8}).wait(1).to({graphics:mask_graphics_4,x:19.9,y:36.6}).wait(1).to({graphics:mask_graphics_5,x:19.9,y:34.5}).wait(1).to({graphics:mask_graphics_6,x:20,y:32.6}).wait(1).to({graphics:mask_graphics_7,x:20,y:31}).wait(1).to({graphics:mask_graphics_8,x:20,y:29.6}).wait(1).to({graphics:mask_graphics_9,x:20,y:28.4}).wait(1).to({graphics:mask_graphics_10,x:20,y:27.4}).wait(1).to({graphics:mask_graphics_11,x:20,y:26.6}).wait(1).to({graphics:mask_graphics_12,x:20,y:26.1}).wait(1).to({graphics:mask_graphics_13,x:20,y:25.8}).wait(1).to({graphics:mask_graphics_14,x:20,y:25.7}).wait(1));

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003300").ss(2,1,1).p("AAJjGQgjCZAgDdQABALACAM");
	this.shape.setTransform(28.5,30.1);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(15));

	// レイヤー 3
	this.instance = new lib.leef_01();
	this.instance.setTransform(26.2,47.3,0.211,0.211,0,0,0,-14.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.78,scaleY:0.78,x:16.4,y:11},9,cjs.Ease.get(0.2)).to({scaleX:1,scaleY:1,x:14.4,y:5.3},5,cjs.Ease.get(1)).wait(1));

	// レイヤー 4
	this.instance_1 = new lib.leef_02();
	this.instance_1.setTransform(32.7,48.1,0.204,0.204,0,0,0,14.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.72,scaleY:0.72,x:41.5,y:13.8},9,cjs.Ease.get(0.2)).to({scaleX:1,scaleY:1,x:45.7,y:9.6},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.2,10.2,12.5,39.8);


// symbols:
(lib.leef_02 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AA3AsQjWAXARhpQCag3CFCTQg7gOgfAEg");
	this.shape.setTransform(14.5,3.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.4,29,10.9);


(lib.leef_01 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AiPAoQChiQB+BEQAABeiNABQg7AAhXgTg");
	this.shape.setTransform(-14.4,3.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.9,-2.1,29,11.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;