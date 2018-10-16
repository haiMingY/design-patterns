/**
 *装饰模式（Decorator Pattern）
 定义:Attach additional
responsibilities to an object dynamically keeping the same interface.Decorators provide a flexible
alternative to subclassing for extending functionality.（动态地给一个对象添加一些额外的职责。
就增加功能来说，装饰模式相比生成子类更为灵活。）
 */

// 例子

var plane = {
  fire: function() {
    console.log('---------发射普通子弹');
  }
};
var missileDecorator = function() {
  console.log('发射导弹');
};
var atomDecorator = function() {
  console.log('发射原子弹');
};
var fire1 = plane.fire;

plane.fire = function() {
  fire1();
  missileDecorator();
};

var fire2 = plane.fire;

plane.fire = function() {
  fire2();
  atomDecorator();
};

plane.fire();

// 用 AOP 装饰函数用 AOP 装饰函数
Function.prototype.before = function(fn) {
  //在原函数调用之前调用
  let _self = this;
  return function() {
    fn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};
Function.prototype.after = function(fn) {
  //在原函数调用之后调用
  let _self = this;
  return function() {
    var ret = _self.apply(this, arguments);
    fn.apply(this, arguments);
    return ret;
  };
};
