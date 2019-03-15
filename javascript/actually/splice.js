let arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8);
let del = 3;

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === del) {
        let num = arr1.splice(i, 1);
        console.log(num + ' be delete');
        i = i - 1;
    } else {
        console.log(arr1[i] + ' not delete');
    }
}


let arr2 = [1, 2, 3, 4, 5]
let dell = 4;
for (let j = arr2.length - 1; j >= 0; j--) {
    if(arr2[j] === dell) {
        let num = arr2.splice(j, 1);
        console.log(num + ' be delete');
    } else {
        console.log(arr2[j] + ' not delete');
    }
}

