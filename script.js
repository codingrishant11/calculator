(function () {
    let text = document.querySelector('.inp');
    let btn = document.querySelectorAll('.btn');
    let esc = document.querySelector('.esc');
    let equal = document.querySelector('.btn-red');
    let cut = document.querySelector('.cut');

    btn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            text.value += value;
        });
    });

    equal.addEventListener('click', function (e) { 
        if (text.value  === '') {
            text.value = ""; 
        } else {
            let ans = eval(text.value);
            text.value = ans;
        }
    });
    
    equal.addEventListener('keypress', function (e) { 
        if (text.value  === '') {
            text.value = "m"; 
        } else {
            let ans = eval(text.value);
            text.value = ans;
        }
    });
    esc.addEventListener('click', function () {
        text.value = " ";
    });

    cut.addEventListener('click', function () {
        text.value = text.value.slice(0, -1);
    });
})();
