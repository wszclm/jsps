window.onload=function () {
    let jin=document.querySelector(".jin");
    let jin11=document.querySelectorAll(".jin11>li");
    console.log(jin11);

    function jin2(content) {
        let lie=content.querySelector(".lie");
        content.onmouseenter=function () {
            lie.classList.add("hot");
            animate(lie,{top:52})
        };
        content.onmouseleave=function () {
            lie.classList.remove("hot");
            lie.style.top="62px"
        };
    }
    jin2(jin11[1]);
    jin2(jin11[2]);
    jin2(jin11[3]);

    let ban=document.querySelector(".ban");
    let ba=document.querySelectorAll(".ba li");
    let cc=document.querySelectorAll(".cc li");
    let n=0;

    let t=setInterval(move,2000);
    function move() {
        n++;
        if(n>=ba.length){
            n=0;
        }
        ba.forEach(function (v,i) {
            v.classList.remove("hot");
        });
        ba[n].classList.add("hot");
        cc.forEach(function (v) {
            v.classList.remove("hot")
        });
        cc[n].classList.add("hot")
    }
    cc.forEach(function (v,i) {
        v.onclick=function () {
            cc.forEach(function (value) {
                value.classList.remove("hot");
            });
            cc[i].classList.add("hot");
            ba.forEach(function (value) {
                value.classList.remove("hot");
            });
            ba[i].classList.add("hot");
            n=i;
        }
    });
    ban.onmouseenter=function () {
        clearInterval(t)
    };
    ban.onmouseleave=function () {
        t=setInterval(move,2000)
    };

    let box=document.querySelectorAll(".box");
    box.forEach(function (content) {
        boxS(content)
    });
    function boxS(content) {
        let tu=content.querySelector(".tu");
        let tu1=content.querySelectorAll(".tu1");
        let cci=content.querySelectorAll(".cci>li");
        let wh=304;

        cci.forEach(function (v,i) {
            v.onclick=function () {
                cci.forEach(function (value) {
                    value.classList.remove("hot")
                });
                cci[i].classList.add("hot");
                tu.style.transform=`translateX(${-wh*i}px)`;
                console.log(i);
            }
        })
    }

    let rm=document.querySelector(".rmm");
    let btns=document.querySelectorAll(".rmtL>button");
    let nn=0;

    btns[0].onclick=function () {
        n--;
        if(n<0){
            n=0
        }
        rm.style.transform=`translateX(${-1220*n}px)`
    };
    btns[1].onclick=function () {
        n++;
        if(n>1){
            n=1
        }
        rm.style.transform=`translateX(${-1220*n}px)`
    };
    
    window.onscroll=function () {
        let st=document.documentElement.scrollTop;
        let fanHui=document.querySelector(".fanHui");
        fanHui.onclick=function () {
            animate(document.documentElement,{scrollTop:0})
        };
        if (st<5){
            jin.style.top="-62px";
            jin.classList.remove("hot");
        }
        if(st>5){
            jin.classList.add("hot");
            animate(jin,{top:0},200)
        }
        if(st>500){
            fanHui.style.display="block";
        }
        if(st<500){
            fanHui.style.display="none"
        }
    }
};