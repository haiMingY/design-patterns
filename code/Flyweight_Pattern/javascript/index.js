/**
 * 享元模式（Flyweight Pattern） Use sharing to support large numbers of fine-grained objects efficiently
 * 使用共享对象可有效地支持大量的细粒度的对象
 * 享元模式的定义为我们提出了两个要求：细粒度的对象和共享对象。我们知道分配太多
的对象到应用程序中将有损程序的性能，同时还容易造成内存溢出，那怎么避免呢？就是享
元模式提到的共享技术
 */
//模特的例子

function Model(sex) {
  this.sex = sex; //性别
  this.underwear = ''; //衣服
}

Model.prototype.takePhoto = function() {
  console.log('sex=' + this.sex + ',underwear=' + this.underwear);
};
// 定义一个男模特,一个女模特
var maleModel = new Model('male'),
  femaleModel = new Model('female');

for (let index = 0; index < 10; index++) {
  maleModel.underwear = 'underwear' + index;
  maleModel.takePhoto();
}

/*
享元模式要求将对象的属性划分为内部状态与外部状态（状态在这里通常指属性）。
享元模式的目标是尽量减少共享对象的数量，关于如何划分内部状态和外部状态，下面的几条经验提供了一些指引
1.内部状态存储与对象内部
2.内部状态可以被一些对象共享
3.内部状态独立于具体的场景,通常不会改变
4.外部状态取决于具体的场景，并根据场景而变化，外部状态不能被共享
*/
