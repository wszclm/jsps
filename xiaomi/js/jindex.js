$(function () {
   $(".shopzi").mouseenter(function () {
       $(".shopnei").stop(true).slideDown("slow").css({"height":"98px","boxShadow":"0 2px 2px 1px #ccc"})
   });
    $(".shopzi").mouseleave(function () {
        $(".shopnei").stop(true).slideUp("slow")
    });

   $(".banner-zi li").mouseenter(function () {
       let index=$(this).index();
       $(this).addClass("active");
       $(".bnz").css({"display":"none"});
       $(".bnz").eq(index).css({"display":"block"}).addClass("active")
   });
    $(".banner-zi li").mouseleave(function () {
        $(this).removeClass("active");
        let index=$(this).index();
        $(".bnz").eq(index).css({"display":"none"}).removeClass("active")
    });
    $(".jiadian").each(function () {
        let that=$(this);
        $(this).find(".jdyouwenzi").mouseenter(function () {
            let index=$(this).index();
            console.log(index);
            that.find(".jdb").css({"display":"none"});
            that.find(".jdb").eq(index).css({"display":"block"});
            that.find(".jdyouwenzi").removeClass("jdyouwenzi1");
            that.find(".jdyouwenzi").eq(index).addClass("jdyouwenzi1")
        })
    });

    let imgs=$(".banner-tu li");
    let btns=$(".banner-box li");
    let left=$(".banner-left");
    let right=$(".banner-right");
    let ban=$(".banner");
    let t=setInterval(move,2000);
    let flag=true;
    let m=0;
    function move() {
        m++;
        if(m==imgs.length){
            m=0;
        }
        imgs.removeClass("active").eq(m).addClass("active");
        btns.removeClass("active").eq(m).addClass("active");
    }
    function movel() {
        m--;
        if(m==-1){
            m=imgs.length-1;
        }
        imgs.removeClass("active").eq(m).addClass("active");
        btns.removeClass("active").eq(m).addClass("active");
    }
    left.click(function () {
        movel()
    });
    right.click(function () {
       move()
    });
    ban.mouseenter(function () {
        clearInterval(t)
    });
    ban.mouseleave(function () {
        t=setInterval(move,2000);
    });
    btns.click(function () {
       let index=$(this).index();
       btns.removeClass("active").eq(index).addClass("active");
       imgs.removeClass("active").eq(index).addClass("active");
       m=index;
    });
    
    $(".zhuyaoa").each(function () {
        let that=$(this);
        let ban=that.find(".zhuyaob>li");
        let cc=that.find(".zy_box1");
        let zuo=that.find(".zy_left");
        let you=that.find(".zy_right");
        let next=0;let now=0;
        let flag=true;
        let w=ban.width();

        you.click(function () {
            if(flag==false){
                return
            }
            if(next==ban.length-1){
                 return
            }
            flag=false;
            mov()
        });
        function mov() {
            next++;
            cc.removeClass("active");
            ban.eq(now).animate({"left":-w+"px"},function () {
                flag=true
            });
            ban.eq(next).animate({"left":"0px"},"slow");
            cc.eq(next).addClass("active");
            ban.eq(now).css("left",w+"px");
            now=next;
        }
        zuo.click(function () {
            if(flag==false){
                return;
            }
            if(next==0){
                 return
            }
            flag=false;
           movl()
        });
        function movl() {
            next--;
            cc.removeClass("active");
            ban.eq(now).animate({"left":w+"px"},function () {
                flag=true
            });
            ban.eq(next).animate({"left":"0px"},"slow");
            cc.eq(next).addClass("active");
            ban.eq(now).css("left",-w+"px");
            now=next;
        }
        cc.each(function (i,v) {

            $(v).click(function () {
                if(now<i){
                    ban.eq(now).animate({"left":-w+"px"});
                    ban.eq(i).animate({"left":"0px"},"slow");
                    ban.eq(now).css("left",w+"px");
                }
                if(now>i){
                    ban.eq(now).animate({"left":w+"px"});
                    ban.eq(i).animate({"left":"0px"},"slow");
                    ban.eq(now).css("left",-w+"px");
                }
                cc.removeClass("active");
                cc.eq(i).addClass("active");
                next=now=i
            })
        })

    });


});
window.onload=function () {

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
        };
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
    };

