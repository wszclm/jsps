window.onload=function () {
    let jin = document.querySelector(".jin");
    let jin11 = document.querySelectorAll(".jin11>li");

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
    }
};
