window.onload = function() {
    var ps = document.querySelectorAll("header p");
    var as = document.querySelectorAll("header a");
    ps.forEach(function(e,index){
        if(index == 0){
            e.style.marginLeft = "2px"
        }else{
            e.style.marginLeft = "20px"
        }
        if(as[index].innerText != "文化学堂"){
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
    
    window.addEventListener('resize', function() {
        var bottom = document.getElementById("bottom");
        bottom.style.width = window.innerWidth + "px";
    });
}