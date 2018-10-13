/**
 * 命令模式是一个高内聚的模式
 *  定义:Encapsulate a request as an object,thereby
letting you parameterize clients with different requests,queue or log requests,and support undoable
operations(将一个请求封装成一个对象,从而让你使用不同的请求把客户端参数化，对请
求排队或者记录请求日志，可以提供命令的撤销和恢复功能)
*  命令模式的由来，其实是回调（ callback ）函数的一个面向对象的替代品。
JavaScript 作为将函数作为一等对象的语言，跟策略模式一样，命令模式也早已融入到了
JavaScript语言之中。运算块不一定要封装在 command.execute 方法中，也可以封装在普通函数中。
函数作为一等对象，本身就可以被四处传递。
 */
