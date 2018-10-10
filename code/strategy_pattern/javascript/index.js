/**
 * 策略模式
 *  定义:Define a family of algorithms,encapsulate each one,and make them interchangeable
 *      (定义一组算法,将每个算法都封装起来,并且使它们之间可以互相转换)
 */

/**
 * @description 缓动算法
 */

const tween = {
  linear: function(t, b, c, d) {
    return (c * t) / d + b;
  },
  easeIn: function(t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  strongEaseIn: function(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  strongEaseOut: function(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  sineaseIn: function(t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  sineaseOut: function(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
};

let Animate = function Animate(dom) {
  this.dom = dom; // 进行运动的 dom 节点
  this.startTime = 0; // 动画开始时间
  this.startPos = 0; // 动画开始时，dom 节点的位置，即 dom 的初始位置
  this.endPos = 0; // 动画结束时，dom 节点的位置，即 dom 的目标位置
  this.propertyName = null; // dom 节点需要被改变的 css 属性名
  this.easing = null; // 缓动算法
  this.duration = null; // 动画持续时间
};
let running = false;
Animate.prototype = {
  /**
   *
   * @param {string} propertyName
   * @param {number} endPos
   * @param {Number} duration
   * @param {string} easing
   */
  start(propertyName, endPos, duration, easing) {
    running = true;
    this.startTime = +new Date();
    this.startPos = this.dom.getBoundingClientRect()[propertyName];
    this.propertyName = propertyName;
    this.easing = tween[easing];
    this.duration = duration;
    this.endPos = endPos;
    let timer = setInterval(() => {
      if (this.step()) {
        clearInterval(timer);
        running = false;
      }
    }, 1000 / 60);
  },
  /**
   * @description 每一帧要做的事
   */
  step() {
    let t = +new Date(); //获取现在时间

    if (t > this.startTime + this.duration) {
      this.update(this.endPos);
      return true;
    }

    let pos = this.easing(
      t - this.startTime,
      this.startPos,
      this.endPos - this.startPos,
      this.duration
    );

    this.update(pos);
  },
  /**
   *
   * @param {number} pos 更新到 具体的位置数
   */
  update(pos) {
    // console.log(pos);
    this.dom.style[this.propertyName] = pos + 'px';
  },
  reset() {
    this.update(0);
  }
};

const radios = document.querySelector('#radios');
const run_distance = document.querySelector('#run_distance');
const run_time = document.querySelector('#run_time');
let config = {
  easing: 'linear',
  duration: 1000,
  endPos: 100
};
radios.addEventListener('click', e => {
  let target = e.target;
  if (target.nodeName === 'INPUT') {
    config.easing = target.value;
  }
});
if (!run_distance.value) run_distance.value = config.endPos;
if (!run_time.value) run_time.value = config.duration;
let a = new Animate(document.querySelector('#div'));

document.querySelector('#btn').addEventListener('click', () => {
  config.endPos = Number(run_distance.value) || config.endPos;
  config.duration = Number(run_time.value) || config.duration;
  if (!running) {
    a.reset();
    a.start('left', config.endPos, config.duration, config.easing);
  }
});
