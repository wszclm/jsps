window.onload=function () {
    {
        let father = document.querySelector('.nav3');
        let nav = document.getElementsByClassName("nav3-zi")[0];
        let lis = nav.getElementsByTagName("li");
        let bnz = document.getElementsByClassName("bnz");
        for (let i = 0; i < lis.length; i++) {
            lis[i].onmouseenter = function (e) {
                for (let j = 0; j < lis.length; j++) {
                    bnz[j].style.display = "none";
                    lis[j].className = ""
                }
                bnz[i].style.display = "block";
                lis[i].className = "active"
            };
            // bnz[i].onmouseenter=function () {
            //     for(let j=0;j<lis.length;j++){
            //         bnz[j].style.display="none";
            //         lis[j].className=""
            //     }
            //     bnz[i].style.display="block";
            //     lis[i].className="active"
            // };

            // bnz[i].onmouseleave=function () {
            //     bnz[i].style.display="none";
            //     lis[i].className=""
            // }
        }
        father.onmouseleave = function () {
            for (let i = 0; i < bnz.length; i++) {
                bnz[i].style.display = "none";
                lis[i].className = ""
            }
        };
    }
{
    let wzdh = document.getElementsByClassName("wzdh");
    let wzdht = document.getElementsByClassName("wzdht");

    for (let i = 0; i < wzdh.length; i++) {
        wzdh[i].onmouseenter = function () {
            for (let j = 0; j < wzdh.length; j++) {
                wzdht[j].style.border = "none";
                wzdht[j].style.height = "0"
            }
            // wzdht[i].style.display="block";
            wzdht[i].style.border = " 1px solid #dfddde";
            wzdht[i].style.height = "120px"
        };
        wzdh[i].onmouseleave = function () {
            wzdht[i].style.border = "none";
            wzdht[i].style.height = "0"
        }
    }
}
    {
        let banner=document.querySelector(".nav3-tu");
       let img=document.querySelectorAll(".nav3-tu li");
       let cc=document.querySelectorAll(".banner-box li");
       let zuo=document.querySelector(".banner-left");
       let you=document.querySelector(".banner-right");

       let n=0;
        cc.forEach(function (value, index) {
            value.onclick=function () {
                for (let i=0;i<cc.length;i++){
                    cc[i].classList.remove('active');
                    img[i].classList.remove('active');
                }
                cc[index].classList.add('active');
                img[index].classList.add('active');
                n=index;
            }
        });
        function move() {
            n++;
            if (n===cc.length){
                n=0;
            }
            for (let i=0;i<cc.length;i++){
                cc[i].classList.remove('active');
                img[i].classList.remove('active');
            }
            cc[n].classList.add('active');
            img[n].classList.add('active');
        }
        function moves() {
            n--;

            if (n===-1){
                n=img.length-1;
            }
            for (let i=0;i<cc.length;i++){
                cc[i].classList.remove('active');
                img[i].classList.remove('active');
            }
            cc[n].classList.add('active');
            img[n].classList.add('active');
        }

        let t=setInterval(move,2000);
        banner.onmouseenter = function () {
            clearInterval(t)
        };
        banner.onmouseleave = function () {
            t = setInterval(move, 2000);
        };

        let flag=true;
        you.onclick=function () {
            if(flag){
                flag=false;
                move();
            }
        };
        zuo.onclick=function () {
            if(flag) {
                flag=false;
                moves();
            }
        };
        img.forEach(function (ele,index) {
            ele.addEventListener("transitionend",
                function(){
                    flag=true;
                })
        })
    }
    {
        let topdar = document.querySelector(".topdar");
        let aside = document.querySelector("aside");
        let floor = document.querySelectorAll(".noz");
        let btn=document.querySelectorAll("aside ul li");
        let top=document.querySelector("#as1");
        let arr=[];
        floor.forEach(function (v) {
            arr.push(v.offsetTop)
        });
        window.onscroll = function () {
            let wh = document.body.scrollTop || document.documentElement.scrollTop;
            if (wh > 1000) {
                topdar.style.top = "0"
            } else if (wh < 1000) {
                topdar.style.top = "-50px"
            }
            if (wh > 2000) {
                aside.style.display = "block"
            } else if (wh < 2000) {
                aside.style.display = "none";
            }
            floor.forEach(function (v,i) {
                if(wh>arr[i]-100){
                    btn.forEach(function (value) {
                        value.classList.remove("active");
                    });
                    btn[i].classList.add("active");
                }
            });
            btn.forEach(function (value,index) {
                value.onclick=function () {
                    animate(document.documentElement,{scrollTop:arr[index]-60})
                }
            });
            top.onclick=function () {
                animate(document.documentElement,{scrollTop:0})
            }
        }
    }
};