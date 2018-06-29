window.onload=function () {
    let jin = document.querySelector(".jin");
    let jin11 = document.querySelectorAll(".jin11>li");
    console.log(jin11);

    function jin2(content) {
        let lie = content.querySelector(".lie");
        content.onmouseenter = function () {
            lie.classList.add("hot");
            animate(lie, {top: 52})
        };
        content.onmouseleave = function () {
            lie.classList.remove("hot");
            lie.style.top = "62px"
        };
    }

    jin2(jin11[1]);
    jin2(jin11[2]);
    jin2(jin11[3]);

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

    window.onscroll=function () {
        let st=document.documentElement.scrollTop;
        let fanHui=document.querySelector(".fanHui");
        fanHui.onclick=function () {
            animate(document.documentElement,{scrollTop:0})
        };
        if (st===0){
            jin.style.top="-62px";
            jin.classList.remove("hot");
        }
        if(st>0){
            jin.classList.add("hot");
            animate(jin,{top:0},200)
        }
    }

};