// 迭代器模式（Iterator Pattern）
// Provide a way to access the elements of an aggregate object sequentially without exposing its
// underlying representation.（它提供一种方法访问一个容器对象中各个元素，而又不需暴露该
// 对象的内部细节。）

/**
 * @description 内部迭代,在内部定义好迭代规则,使用方便
 * @param {Array} arr
 * @param {Function} callback
 */
let each = function each(arr, callback) {
  let index = 0;
  while (index < arr.length) {
    callback(arr[index], index, arr);
    index++;
  }
};
each([1, 2, 3, 4], function(el, index, arr) {
  console.log(el);
});

/**
 * @description 外部迭代
 * @param {Array} arr
 */
let Iterator = function(arr) {
  let index = 0;
  return {
    length: arr.length,
    next() {
      index++;
    },
    isDone() {
      return index >= arr.length;
    },
    getCurrItem() {
      return arr[index];
    }
  };
};

var compare = function(iterator1, iterator2) {
  if (iterator1.length !== iterator2.length) {
    console.log('iterator1 和 iterator2 不相等');
  }
  while (!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      console.log('iterator1 和 iterator2 不相等');
    }
    iterator1.next();
    iterator2.next();
  }
  console.log('iterator1 和 iterator2 相等');
};
var iterator1 = Iterator([1, 2, 3]);
var iterator2 = Iterator([1, 2, 3, 4]);
compare(iterator1, iterator2); // 输出：iterator1 和 iterator2 相等
