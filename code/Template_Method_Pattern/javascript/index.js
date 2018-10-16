/**
 * 模板方法模式（Template Method Pattern）
 * Define the skeleton of an algorithm in an operation,deferring some steps to subclasses.Template
 *Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's
 *structure.(定义一个操作中的算法的框架,而将一些步骤延迟到子类中,使得子类可以不改变一个算法的结构即可重新定义该算法的某些特定步骤)
 *
 *模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。通常
 *在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺
 *序。子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法
 */

//例子  咖啡与茶是一个经典的例子，经常用来讲解模板方法模式

//咖啡
/**
 * 步骤; (1) 把水煮沸
 * (2) 用沸水冲泡咖啡
 * (3) 把咖啡倒进杯子
 * (4) 加糖和牛奶
 */

/*function Coffee() {}

Coffee.prototype.boilWater = function() {
  console.log('将水煮沸');
};
Coffee.prototype.brewCoffeeGriends = function() {
  console.log('用沸水冲泡咖啡');
};
Coffee.prototype.pourInCup = function() {
  console.log('把咖啡倒进杯子');
};
Coffee.prototype.addSugarAndMilk = function() {
  console.log('加糖和牛奶');
};

Coffee.prototype.init = function() {
  this.boilWater();
  this.brewCoffeeGriends();
  this.pourInCup();
  this.addSugarAndMilk();
};

var coffee = new Coffee();
coffee.init();*/

// 茶

/**
 * 步骤
 * (1) 把水煮沸
 * (2) 用沸水浸泡茶叶
 * (3) 把茶水倒进杯子
 * (4) 加柠檬
 */
/*
function Tea() {}
Tea.prototype.boilWater = function() {
  console.log('将水煮沸');
};
Tea.prototype.steepTeaBag = function() {
  console.log('用沸水泡茶');
};
Tea.prototype.pourInCup = function() {
  console.log('把茶倒进杯子');
};
Tea.prototype.addLemon = function() {
  console.log('加柠檬');
};

Tea.prototype.init = function() {
  this.boilWater();
  this.steepTeaBag();
  this.pourInCup();
  this.addLemon();
};

var tea = new Tea();
tea.init();
*/
// 分离出共同点 用Beverage表示
var Beverage = function() {};
Beverage.prototype.boilWater = function() {
  console.log('把水煮沸');
};
Beverage.prototype.brew = function() {}; // 空方法，应该由子类重写
Beverage.prototype.pourInCup = function() {}; // 空方法，应该由子类重写
Beverage.prototype.addCondiments = function() {}; // 空方法，应该由子类重写
Beverage.prototype.init = function() {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};

/***
 * 基于 Beverage创建咖啡和茶
 */

var Coffee = function() {};
Coffee.prototype = new Beverage();
Coffee.prototype.brew = function() {
  console.log('用沸水冲泡咖啡');
};
Coffee.prototype.pourInCup = function() {
  console.log('把咖啡倒进杯子');
};
Coffee.prototype.addCondiments = function() {
  console.log('加糖和牛奶');
};

var coffee = new Coffee();
coffee.init();

var Tea = function() {};
Tea.prototype = new Beverage();
Tea.prototype.brew = function() {
  console.log('用沸水泡茶');
};
Tea.prototype.pourInCup = function() {
  console.log('把茶倒进杯子');
};
Tea.prototype.addCondiments = function() {
  console.log('加柠檬');
};

var tea = new Tea();
tea.init();
