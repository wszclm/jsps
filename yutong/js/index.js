{
    let imgs = document.querySelectorAll('.banner li');
    let boxs = document.querySelectorAll('.banner_box li');
    let father = document.querySelector('.bannerfa');

    boxs.forEach(function (value, index) {
        value.onclick = function () {
            for (let i = 0; i < boxs.length; i++) {
                boxs[i].classList.remove('active');
                imgs[i].classList.remove('active');
            }
            boxs[index].classList.add('active');
            imgs[index].classList.add('active');
            n = index;
        }
    })
    let n = 0;

    function banner(dir="r") {
        if (dir === "r") {
            n++;
        } else if (dir === "l") {
            n--;
        }
        if (n === boxs.length) {
            n = 0;
        }
        if (n === -1) {
            n = imgs.length - 1;
        }
        for (let i = 0; i < boxs.length; i++) {
            boxs[i].classList.remove('active');
            imgs[i].classList.remove('active');
        }
        boxs[n].classList.add('active');
        imgs[n].classList.add('active');
    }

    let t1 = setInterval(banner, 2000);
    father.onmouseover = function () {
        clearTimeout(t1)
    }
    father.onmouseout = function () {
        t1 = setInterval(banner, 2000);
    }
}

{
    let items=document.querySelectorAll('.h_bot li');
    let mains=document.querySelectorAll('.h_bn');
    items.forEach(function (value, index) {
        value.onmouseover=function () {
            for (let i=0;i<items.length;i++){
                items[i].classList.remove("active");
                mains[i].style.display="none";
            }
            items[index].classList.add("active");
            mains[index].style.display="block";
        }
        value.onmouseleave=function () {
            for (let i=0;i<items.length;i++){
                items[i].classList.remove("active");
                mains[i].style.display="none";
            }
        }
    })
}
{
    let evm=document.querySelector('.h_midr4');
    let evm1=document.querySelector('.evm');
    evm.onmouseover=function () {
        evm1.style.display="block"
    }
    evm.onmouseleave=function () {
        evm1.style.display=""
    }
}
{
    let items=document.querySelectorAll('.main32 .main31_t h3');
    let mains=document.querySelectorAll('.main32_t1');
    items.forEach(function (value,index) {
        value.onmouseover=function () {
            for (let i=0;i<items.length;i++){
                items[i].classList.remove("active");
                mains[i].classList.remove("active");
            }
            items[index].classList.add("active");
            mains[index].classList.add("active");
        }
    })
}
{
    let items=document.querySelectorAll('.main33 .main31_t h3');
    let mains=document.querySelectorAll('.main33_b5');
    items.forEach(function (value,index) {
        value.onmouseover=function () {
            for (let i=0;i<items.length;i++){
                items[i].classList.remove("active");
                mains[i].classList.remove("active");
            }
            items[index].classList.add("active");
            mains[index].classList.add("active");
        }
    })
}
