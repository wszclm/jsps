{
    let imgs = document.querySelectorAll('.banner-tu li');
    let dian = document.querySelectorAll('.banner-box li');
    let Banner = document.querySelector('.banner');
    let prev = document.querySelector('.banner-left');
    let next = document.querySelector('.banner-right')

    dian.forEach(function (value, index) {
        value.onclick = function () {
            for (let i = 0; i < dian.length; i++) {
                dian[i].classList.remove('active');
                imgs[i].classList.remove('active');
            }
            dian[index].classList.add('active');
            imgs[index].classList.add('active');
            n = index;
        }
    })
    let n = 0;

    function banner1(dir = "r") {
        if (dir === "r") {
            n++;
        } else if (dir === "l") {
            n--;
        }

        if (n === dian.length) {
            n = 0;
        }
        if (n === -1) {
            n = imgs.length - 1;
        }
        for (let i = 0; i < dian.length; i++) {
            dian[i].classList.remove('active');
            imgs[i].classList.remove('active');
        }
        dian[n].classList.add('active');
        imgs[n].classList.add('active');
    }

    let t1 = setInterval(banner1, 2000);
    Banner.onmouseover = function () {
        clearTimeout(t1)
    }
    Banner.onmouseout = function () {
        t1 = setInterval(banner1, 2000);
    }
    next.onclick = function () {
        banner1();
    }
    prev.onclick = function () {
        banner1('l');
    }
}
{
    let next = document.querySelector('.mxdpy');
    let prev = document.querySelector('.mxdpz');
    let paner = document.querySelector('.mxdp-bot');
    next.onclick = function () {
        next.classList.remove('active');
        prev.classList.add('active');
        paner.style.transform = "translateX(-1226px)";
    };
    prev.onclick = function () {
        prev.classList.remove('active');
        next.classList.add('active');
        paner.style.transform = "translateX(0px)";
    };
    let n = 0;
    let t1 = setInterval(function banner1() {
        n++;
        if (n % 2 == 0) {
            next.classList.remove('active');
            prev.classList.add('active');
            paner.style.transform = "translateX(-1226px)";
        } else if (n % 2 === 1) {
            prev.classList.remove('active');
            next.classList.add('active');
            paner.style.transform = "translateX(0px)";
        }
    }, 2000);
    paner.onmouseover = function () {
        clearTimeout(t1)
    }
    paner.onmouseout = function () {
        t1 = setInterval(function banner1() {
            n++;
            if (n % 2 == 0) {
                next.classList.remove('active');
                prev.classList.add('active');
                paner.style.transform = "translateX(-1226px)";
            } else if (n % 2 === 1) {
                prev.classList.remove('active');
                next.classList.add('active');
                paner.style.transform = "translateX(0px)";
            }
        }, 2000);
    }
}
{
    let lists = document.querySelectorAll(".jiadian");
    lists.forEach(function (value) {
        content(value)
    })

    function content(context) {
        let jdwz = context.querySelectorAll('.jdyouwenzi');
        let jdb = context.querySelectorAll('.jdbb li');
        jdwz.forEach(function (v, index) {
            v.onmouseover = function () {
                for (let i = 0; i < jdwz.length; i++) {
                    jdwz[i].classList.remove('jdyouwenzi1');
                    jdb[i].classList.remove('active');
                }
                jdwz[index].classList.add('jdyouwenzi1');
                jdb[index].classList.add('active');
            }
        })
    }
}


{
    let lists = document.querySelectorAll(".zhuyao_bottom .zhuyaoa");
    lists.forEach(function (value) {
        content(value)
    })

    function content(context) {
        let things = context.querySelectorAll('.zhuyaob li');
        let banner = context.querySelector('.zhuyaob');
        let perv = context.querySelector('.zy_left');
        let next = context.querySelector('.zy_right');
        let boxs = context.querySelectorAll('.zy_box1')
        let n = 0;
        let max = things.length;
        boxs.forEach(function (vle, index) {
            vle.onclick = function () {
                for (let i = 0; i < boxs.length; i++) {
                    boxs[i].classList.remove('active');
                }
                boxs[index].classList.add('active');
                banner.style.marginLeft = -index * 296 + "px";
                n = index;
            }
        })

        function banner1(dir = "r") {
            if (dir === "r") {
                n++;
            } else if (dir === "l") {
                n--;
            }
            if (n >= max) {
                n = max - 1;
                return;
            }
            if (n < 0) {
                n = 1;
                return;
            }
            for (let i = 0; i < boxs.length; i++) {
                boxs[i].classList.remove('active');
            }
            boxs[n].classList.add('active');
            banner.style.marginLeft = -n * 296 + "px";
        }

        next.onclick = function () {
            banner1()
        }
        perv.onclick = function () {
            banner1('l')
        }
    }
}
{
    let shop=document.querySelector(".shop");
    let shopnei=document.querySelector(".shopnei");
    shop.onmouseover=function (e) {
        e.stopPropagation()
        shopnei.style.display="block";
    }
    shop.onmouseleave=function () {
        shopnei.style.display="none";
    }
}
{
    let father=document.querySelector('.banner')
    let bnzs=document.querySelectorAll('.bnz');
    let bannerzs=document.querySelectorAll('.banner-zi li');
    bannerzs.forEach(function (val,index) {
        val.onmouseenter=function (e) {
            e.stopPropagation()
            for (let i=0;i<bannerzs.length;i++){
                bnzs[i].style.display="none";
                bannerzs[i].classList.remove('active');
            }
            bnzs[index].style.display="block";
            this.classList.add('active');
        }
        father.onmouseleave=function () {
            for (let i=0;i<bannerzs.length;i++) {
                bnzs[i].style.display = "none"
                bannerzs[i].classList.remove('active');
            }
        }
    })
}
{
    let ss=document.querySelector('.jingbuyou');
    let ss1=document.querySelector('.jingbuyou3');
    let ss3=document.querySelector('.jby');
    let ss4=document.querySelector('.jingbuyouy');
    let ss5=document.querySelector('.jingbuyouz');
    ss3.onfocus=function () {
        ss1.style.display="block";
        ss3.style.cssText=`border: 1px solid #ff6600;`;
        ss4.style.cssText=`border-top: 1px solid #ff6600;
	border-right: 1px solid #ff6600;
	border-bottom: 1px solid #ff6600;`;
        ss5.style.display="none";
    }
    ss3.onblur=function () {
        ss1.style.display="";
        ss3.style.cssText=``;
        ss4.style.cssText=``;
        ss5.style.display="";
    }
}