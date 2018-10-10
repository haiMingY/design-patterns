/**
 * 单例模式:
 *  定义:Ensure a class has only one instance, and provide a global point of access to itEnsure a class has only one instance, and provide a global point of access to it
 *      (确保一个类只有一个实例,并提供一个全局访问点)
 *  优点:减少内存开支
 */

/**
 * @description 单例模式示例
 * @constructor Singleton
 * @param {string} name
 */

// 照搬书中所写
/*
let Singleton = function Singleton(name) {
  this.name = name;
  this.instance = null;
};

Singleton.prototype.getName = function getName() {
  console.log('--------name', this.name);
};

Singleton.getInstance = function getInstance(name) {
  if (!this.instance) this.instance = new Singleton(name);
  return this.instance;
};


*/

let Singleton = (function() {
  let instance = null;

  function SingletonConstructor(name) {
    this.name = name;
  }
  SingletonConstructor.prototype.getName = function getName(name) {
    console.log('--------name', this.name);
  };
  return {
    getInstance: function getInstance(name) {
      if (!instance) instance = new SingletonConstructor(name);
      return instance;
    }
  };
})();

let a = Singleton.getInstance('李四');
let b = Singleton.getInstance('王四');

console.log(a === b);

a.getName();
b.getName();
