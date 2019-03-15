// static 定义只能通过类调用的方法
class Foo {
    static method() {
        return 'hello';
    }
}

Foo.method();   // hello

class Bar extends Foo {
    static method() {
        return super.method() + ' too ';
    }
}

Bar.method();   // hello too

// ES7 类的实例属性和静态属性
// class MyClass {
//     myProps = 1;
//     static myStaticProps = 2;
//     constructor() {
//         console.log(this.props);   // 1
//         console.log(MyClass.myStaticProps);
//     }
// }
