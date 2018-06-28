window.onload=function () {
    let shopZi = document.getElementsByClassName("shop")[0];
    let shopNei = document.getElementsByClassName("shopnei")[0];
    shopZi.onmouseenter = function () {
        shopNei.style.height = "98px";
        shopNei.style.boxShadow = "0 2px 2px 1px #ccc";
    };
    shopZi.onmouseleave = function () {
        shopNei.style.height = "0px";
        shopNei.style.boxShadow = "none";
    };

    let aside = document.getElementsByClassName("banner-zi")[0];
    let lis = aside.getElementsByTagName("li");
    let bnz = document.getElementsByClassName("bnz");

    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseenter = function () {
            for (let j = 0; j < lis.length; j++) {
                lis[j].className = "";
                bnz[j].style.display = "none"
            }
            lis[i].className = "active";
            bnz[i].style.display = "block"
        };
        lis[i].onmouseleave = function () {
            lis[i].className = "";
            bnz[i].style.display = "none";
        }
    }

    function zh(jiadian) {
        let wenZi = jiadian.getElementsByClassName("jdyouwenzi");
        let lis1 = jiadian.getElementsByClassName("jdb");

        for (let i = 0; i < wenZi.length; i++) {
            wenZi[i].onmouseenter = function () {

                for (let j = 0; j < wenZi.length; j++) {
                    wenZi[j].classList.remove(`jdyouwenzi1`);
                    // lis1[j].classList.remove(`active`)
                    lis1[j].style.display = "none"
                }
                wenZi[i].classList.add(`jdyouwenzi1`);
                // lis1[i].classList.add(`active`)
                lis1[i].style.display = "block"
            }
        }

    }

    let jiaDian = document.getElementsByClassName("jiadian")[0];
    let jiaDian2 = document.getElementsByClassName("jiadian2")[0];
    let peijian = document.getElementsByClassName("peijian")[0];
    let zhoubian = document.getElementsByClassName("zhoubian")[0];
    zh(jiaDian);
    zh(jiaDian2);
    zh(peijian);
    zh(zhoubian);

    let jIng = document.getElementsByClassName("jingbuwenzi");
    let jbz = document.getElementsByClassName("jbz");
    for (let i = 0; i < jIng.length; i++) {
        jIng[i].onmouseenter = function () {
            for (let j = 0; j < jIng.length; j++) {
                jbz[j].style.height = "0px";
                jbz[j].style.boxShadow = "none";
            }
            jbz[i].style.height = "229px";
            jbz[i].style.boxShadow = "0 2px 2px 1px rgba(0,0,0,0.5)";
        };
        jbz[i].onmouseenter = function () {
            for (let j = 0; j < jIng.length; j++) {
                jbz[j].style.height = "0px";
                jbz[j].style.boxShadow = "none";
            }
            jbz[i].style.height = "229px";
            jbz[i].style.boxShadow = "0 2px 2px 1px rgba(0,0,0,0.5)";
        };
        jIng[i].onmouseleave = function () {
            jbz[i].style.height = "0px";
            jbz[i].style.boxShadow = "none";
        };
        jbz[i].onmouseleave = function () {
            jbz[i].style.height = "0px";
            jbz[i].style.boxShadow = "none";
        }
    }
    {
    let banner = document.querySelector(".banner");
    let bannerImg = document.querySelectorAll(".banner-tu li");
    let bannerBox = document.querySelectorAll(".banner-box li");
    let next = document.querySelector(".banner-right");
    let prev = document.querySelector(".banner-left");

    let n = 0;

    function move() {
        n++;
        if (n === bannerImg.length) {
            n = 0;
        }
        bannerImg.forEach(function (val) {
            val.className = ""
        });
        bannerBox.forEach(function (val) {
            val.className = ""
        });
        bannerImg[n].className = "active";
        bannerBox[n].className = "active";
    }

    function moves() {
        n--;
        if (n < 0) {
            n = bannerImg.length - 1;
        }
        bannerImg.forEach(function (val) {
            val.className = ""
        });
        bannerBox.forEach(function (val) {
            val.className = ""
        });
        bannerImg[n].className = "active";
        bannerBox[n].className = "active";
    }

    let t = setInterval(move, 2000);
    banner.onmouseenter = function () {
        clearInterval(t)
    };
    banner.onmouseleave = function () {
        t = setInterval(move, 2000);
    };
    let flag = true;
    next.onclick = function () {
        if(flag===false){
            return;
        }
        flag=false;
        move();
    };
    prev.onclick = function () {
        if(flag===false){
            return;
        }
        flag=false;
        moves();
    };
    for (let i = 0; i < bannerBox.length; i++) {
        bannerBox[i].onclick = function () {

            bannerBox.forEach(function (val) {
                val.className = ""
            });
            bannerImg.forEach(function (val) {
                val.className = ""
            });
            bannerBox[i].className = "active";
            bannerImg[i].className = "active";
            n = i;
        }
    }
    bannerImg.forEach(function (ele, index) {
        ele.addEventListener("transitionend",
            function () {
                flag = true;
            })
    })
}
    {
        let lists = document.querySelectorAll(".zhuyao_bottom .zhuyaoa");
        lists.forEach(function (value) {
            content(value)
        });

        function content(context) {

            let bnn=context.querySelectorAll(".zhuyaob li");
            let bnnBox=context.querySelectorAll(".zy_box1");
            let zuo=context.querySelector(".zy_left");
            let you=context.querySelector(".zy_right");
            let now=0;
            let next=0;
            let bnnWidth=parseInt(getComputedStyle(bnn[0],null).width);
            let flag=true;
            function move() {
                next++;
                bnnBox[now].classList.remove("active");
                bnnBox[next].classList.add("active");
                bnn[next].style.left=bnnWidth+"px";
                animate(bnn[now],{left:-bnnWidth});
                animate(bnn[next],{left:0},function () {
                    flag=true;
                });
                now=next;
            }
            function moves() {
                next--;
                bnnBox[now].classList.remove("active");
                bnnBox[next].classList.add("active");
                bnn[next].style.left=-bnnWidth+"px";
                animate(bnn[now],{left:bnnWidth});
                animate(bnn[next],{left:0},function () {
                    flag=true;
                });
                now=next;
            }
            you.onclick=function () {
                if(flag===false){
                    return;
                }
                if(next==bnnBox.length-1){
                    return;
                }
                flag=false;
                move();
            };
            zuo.onclick=function () {
                if(flag===false){
                    return;
                }
                if(next==0){
                    return;
                }
                flag=false;
                moves();
            };
            bnnBox.forEach(function (val,index) {
                val.onclick=function () {
                    if(now<index){
                        bnn[index].style.left=bnnWidth+"px";
                        animate(bnn[now],{left:-bnnWidth});
                        animate(bnn[index],{left:0});
                    }
                    if(now>index){
                        bnn[index].style.left=-bnnWidth+"px";
                        animate(bnn[now],{left:bnnWidth});
                        animate(bnn[index],{left:0});
                    }
                    bnnBox[now].classList.remove("active");
                    bnnBox[index].classList.add("active");
                    next=now=index;
                }
            })

        }
    }
    {
        let zuo=document.querySelector(".mxdpz");
        let you=document.querySelector(".mxdpy");
        let dong=document.querySelector(".mxdp-bot");
        let wi=document.querySelector(".mingxingdanping");
        let whi=parseInt(window.getComputedStyle(wi,null).width);
        let n=0;

        you.onclick=function () {
            you.classList.remove("active");
            zuo.classList.add("active");
            n++;
            if(n==2){
                n=1;
            }
            dong.style.transform=`translateX(${-whi*n}px)`
        };
        zuo.onclick=function () {
            zuo.classList.remove("active");
            you.classList.add("active");
            n--;
            if(n==-1){
                n=0;
            }
            dong.style.transform=`translateX(${-whi*n}px)`
        }
    }
};
