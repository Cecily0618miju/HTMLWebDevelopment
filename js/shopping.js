window.onload = function() {
    var ps = document.querySelectorAll("header p");
    var as = document.querySelectorAll("header a");
    ps.forEach(function(e,index){
        if(index == 0){
            e.style.marginLeft = "2px"
        }else{
            e.style.marginLeft = "20px"
        }
        if(as[index].innerText != "朝代服饰"){
            e.style.display = "none"
        }
    })
    as.forEach(function(e,index){
        e.addEventListener("click",function(){
            ps.forEach(function(p,indexP){
                if(index == indexP){
                    p.style.display = "block"
                }else{
                    p.style.display = "none"
                }
            })
        })
    })

    var lis = document.querySelectorAll("#mainUl li");
    lis.forEach(function(e,index){
        if(index == 1 || index == 4 || index == 7){
            e.style.margin = "0px 135px"
        }
    })

    var navigationas = document.querySelectorAll("#navigationUl a");
    navigationas.forEach(function(e,index){
        e.addEventListener("click",function(){
            navigationas.forEach(function(eA,indexA){
                if(index == indexA){
                    eA.classList.add("bgcAndC")
                }else{
                    eA.classList.remove("bgcAndC")
                }
            })
        })
    })

    var shopping = document.getElementById("shoppingFirst")
    if(shopping != null){
        shopping.addEventListener("dblclick",function(){
            window.location.replace("buy.html")
        })
    }

    var as = document.querySelectorAll("#dynasty a")
    as.forEach(function(e){
        e.style.width = window.innerWidth/as.length + "px";
    })
    window.addEventListener('resize', function() {
        var header = document.querySelector("header")
        header.style.width = window.innerWidth + "px";
        var bottom = document.getElementById("bottom");
        bottom.style.width = window.innerWidth + "px";
        var as = document.querySelectorAll("#dynasty a")
        as.forEach(function(e){
            e.style.width = window.innerWidth/as.length + "px";
        })
    });
    
}