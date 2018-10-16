/**
 *
 *状态模式
 Allow an object to alter its behavior when its internal state changes.The object will appear to
change its class.（当一个对象内在状态改变时允许其改变行为，这个对象看起来像改变了其
类。）
 */

// 例子超级玛丽
var MarrayState = function() {
  var _currentState = {};
  var states = {
    jump() {
      console.log('jump 跳跃');
    },
    move() {
      console.log('move 移动');
    },
    shoot() {
      console.log('shoot 射击');
    },
    squat() {
      console.log('squat 蹲下');
    }
  };

  var Action = {
    changeState: function() {
      var args = arguments;
      var _currentState = {};

      if (args.length) {
        for (let index = 0; index < args.length; index++) {
          _currentState[args[i]] = true;
        }
      }
      return this;
    },
    //执行动作
    goes() {
      console.log('----执行');
      for (const key in _currentState) {
        states[key] && states[key]();
      }

      return this;
    }
  };

  return {
    change: Action.changeState,
    goes: Action.goes
  };
};
