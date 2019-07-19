// assert (断言)

const assert = require('assert').strict;

// 生成一个AssertionError, 用于比较错误信息
const {message} = new assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual'
});


// 验证输出的错误

try {
    assert.strictEqual(1, 2);    
} catch(err) {
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);;
}

// assert.strictEqual(actual, expected,[,message]);
assert.strictEqual(1,1);   //this is pass
// assert.strictEqual(1, 2);  // assertError
//assert.strictEqual(1,'1');  // assertError


// assert.ok(value, [,message])
// 测试value是否为真值，如果不是，抛出错误
assert.ok(true);
assert.ok(1);

//assert.ok();  // error
//assert.ok(false, 'no true')  // 抛出AssertionError: not true


// assert.ifError(value);  if value not be null or undefined, throw value
// assert.ifError(null);   //pass
// assert.ifError(0);    // throw AssertError


// assert.notDeepEqual(actual, expected,[message]);
// assert.notEqual(actual, expected, [,message]);

