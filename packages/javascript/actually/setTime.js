let a = 0;

let addNum = () => {
    a　+= 1;
    console.log(a);
    return a;
};

let timer = setInterval(addNum, 1000);

