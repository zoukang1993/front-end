// Buffer (缓冲)    //global variable


// 创建一个长度为10， 且用0填充的Buffer
const buf1 = Buffer.alloc(10);

// 创建一个长度为10， 且用0x1填充的Buffer
const buf2 = Buffer.alloc(10, 1);

// Buffer与字符编码
const buf = Buffer.from('hello world', 'ascii');

console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

