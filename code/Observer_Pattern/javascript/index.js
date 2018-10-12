/**
 * 观察者模式（Observer Pattern）也叫做发布订阅模式（Publish/subscribe)
 * 定义:Define a one-to-many dependency between objects so that when one object changes state,all its
dependents are notified and updated automatically.(
    定义对象间一种一对多的依赖关系,使得每当一个对象改变状态,则所有依赖它的对象都会得到通知并被自动更新
)
 */
'use strict';

function ObserverCache() {
  this._cache = {};
}

ObserverCache.prototype = {
  includes(type) {
    return this._cache[type] !== undefined;
  },
  /**
   *
   * @param {*} type
   * @param {fn|| obj} params
   */
  push(type, params) {
    if (!this._cache[type]) {
      this._cache[type] = [params];
      return false;
    } else {
      this._cache[type].push(params);
      return true;
    }
  },
  subscribe(type, events) {
    let fns = this._cache[type];
    if (!fns) return;
    let len = fns.length;
    for (let index = 0; index < len; index++) {
      fns[index].call(null, events);
    }
  },
  emit(type, fn) {
    let params = this._cache[type];
    if (!params) return;
    let len = params.length;
    for (let index = 0; index < len; index++) {
      fn.call(null, params[index]);
    }
    delete this._cache[type];
  },
  remove(type, fn) {
    let fns = this._cache[type];
    if (Array.isArray(fns)) {
      let index = fns.indexOf(fn);
      if (index > 0) {
        fns.splice(index, 1);
      }
    }
  }
};
let observer = (function() {
  let _messages = new ObserverCache();
  let _fireList = new ObserverCache(); //存储闲发布在订阅的信息
  return {
    // 注册
    regist(type, fn) {
      if (!_messages.push(type, fn)) {
        if (_fireList.includes(type)) {
          _fireList.emit(type, fn);
        }
      }
    },
    //发布
    fire(type, args) {
      let events = {
        type: type,
        data: args || {}
      };
      if (!_messages.includes(type)) {
        _fireList.push(type, events);
        return;
      }
      _messages.subscribe(type, events);
    },
    //移除
    remove(type, fn) {
      _messages.remove(type, fn);
    }
  };
})();

observer.regist('learn', function(e) {
  console.log('-----学习', e.data);
});

observer.fire('learn', { msg: '学数学' });

observer.fire('test', { msg: 'test' });
observer.regist('test', e => {
  console.log(e);
});
