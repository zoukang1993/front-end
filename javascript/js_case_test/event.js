//事件代理
let ul = document.querySelector('ul');
elem.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
        //some code
    }
});

//阻止事件冒泡
// stopPropagatin()
elem.addEventListener('click', function(event) {
        event.stopPropagation();

        //or
        //event.stopImmediatePropagation();
});

//Event对象   event = new Event(typeArg, eventInit);
let ev = new Event(
    'look',
    {
        'bubbles': true,
        'cancelable':false
    }
);

document.dispatchEvent(ev);

function myEventHandler(event) {
    let actualEvent = event || window.event;
    let actualTarget = actualEvent.target || actualEvent.srcElement;
    //todo
}

//event.bubbles, event.eventPhase
function goInput(e) {
    if (!e.bubbles) {
        passInon(e);
    } else {
        doOutput(e);
    }
}

//event.eventPhase  表示事件所处的阶段
let phase = event.eventPhase;

//event.cancelable 返回一个布尔值,表示事件是否可以取消,只读属性
let bool = event.cancelable;

//defaultPrevented 返回一个布尔值,表示该事件是否调用过preventDefault方法
if (e.defaultPrevented) { //.. }

//event.currentTarget  event.target

//event.eventPhase  表示事件所处的阶段
let phase = event.eventPhase;

//event.cancelable 返回一个布尔值,表示事件是否可以取消,只读属性
let bool = event.cancelable;

//defaultPrevented 返回一个布尔值,表示该事件是否调用过preventDefault方法
if (e.defaultPrevented) { //.. }

//event.currentTarget  event.target

//event.eventPhase  表示事件所处的阶段
let phase = event.eventPhase;

//event.cancelable 返回一个布尔值,表示事件是否可以取消,只读属性
let bool = event.cancelable;

//defaultPrevented 返回一个布尔值,表示该事件是否调用过preventDefault方法
if (e.defaultPrevented) { //.. }

//event.currentTarget  event.target

// event.type  let string = event.type;
// event.detail
// event.timeStamp    let number = event.timeStamp;
// event.isTrusted   let boll = event.isTrusted;


//event.preventDefault()   阻止事件的默认行为

//event.stopProgation()  阻止事件的DOM中继续传播, 防止再触发定义在别的节点上的监听函数

//event.stopImmediatePropagation()


//自定义事件和事件模拟
//新建事件实例
let event = new Event('build');

//添加监听函数
elem.addEventListener('build', function(e) {}, false);

//触发事件
elem.dispatchEvent('event');
