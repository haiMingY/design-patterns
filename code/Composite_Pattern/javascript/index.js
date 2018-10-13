/**
 * 组合模式(Composite Pattern)也叫合成模式，有时又叫做部分-整体模式（Part-Whole），
主要是用来描述部分与整体的关系
定义:Compose objects into tree structures to represent part-whole hierarchies.Composite lets clients
treat individual objects and compositions of objects uniformly.
(将对象组合成树形结构以表示 "部分-整体"的层次结构,使得用户对单个对象和组合对象的使用具有一致性)
 */

//文件夹和文件之间的关系，非常适合用组合模式来描述。文件夹里既可以包含文件，又可以
// 包含其他文件夹，最终可能组合成一棵树

/**
 * 文件夹类
 * @param {string} name
 */
function Folder(name) {
  this.name = name;
  this.files = [];
}
Folder.prototype = {
  add: function(file) {
    this.files.push(file);
  },
  scan: function() {
    console.log('开始扫描文件夹', this.name);
    for (let index = 0; index < this.files.length; index++) {
      let file = this.files[index];
      file && file.scan();
    }
  }
};

function File(name) {
  this.name = name;
}

File.prototype = {
  add: function() {
    throw new Error('no');
  },
  scan: function() {
    console.log('----开始扫描文件', this.name);
  }
};

var folder = new Folder('学习资料');
var folder1 = new Folder('JavaScript');
var folder2 = new Folder('jQuery');
var file1 = new File('JavaScript 设计模式与开发实践');
var file2 = new File('精通 jQuery');
var file3 = new File('重构与模式');
folder1.add(file1);
folder2.add(file2);
folder.add(folder1);
folder.add(folder2);
folder.add(file3);

var folder3 = new Folder('Nodejs');
var file4 = new File('深入浅出 Node.js');
folder3.add(file4);
var file5 = new File('JavaScript 语言精髓与编程实践');

folder.add(folder3);
folder.add(file5);
folder.scan();
