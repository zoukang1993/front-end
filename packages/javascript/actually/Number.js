 // js 小数精度
 
 // 当你拿到 1.4000000000000001 这样的数据要展示时，建议使用 toPrecision 凑整并 parseFloat 转成数字后再显示，如下：
 parseFloat(1.40000000000001.toPrecision(12)) === 1.4;   // true

 // encapsulate function
 function encapsulate(num, precision = 12) {
    return parseFloat(num.toPrecision(precision));    
 }

 // 对于运算类操作，如 +-*/，就不能使用 toPrecision 了。正确的做法是把小数转成整数后再运算。以加法为例：
 function add(num1, num2) {
    const num1Digits = (num1.toString().split('.')[1] || "").length;
    const num2Digits = (num2.toString().split('.')[1] || "").length;
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
}

