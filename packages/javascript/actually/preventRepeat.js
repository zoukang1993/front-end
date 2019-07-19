function preventRepeat() {
    let last = new Date();
    return function() {
        let now = new Date();
        let diff = now - last;
        if(diff > 1) {
            console.log(diff);
        }
        
        last = now;
    }
}

let pr = preventRepeat();
pr();


function preventSubmit() {
    var submitBtn = document.getElementById("submit");

    // method one
    submitBtn.onclick = function (event) {
        alert("preventDefault!");
        return false;
    };
    
    // method two
    submitBtn.onclick = function (event) {
       alert("preventDefault!");
       var event = event || window.event;
       event.preventDefault(); // 兼容标准浏览器
       window.event.returnValue = false; // 兼容IE6~8
   };
}