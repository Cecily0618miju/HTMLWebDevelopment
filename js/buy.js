window.onload = function() {
    var ps = document.querySelectorAll("header p");
    var as = document.querySelectorAll("header a");
    ps.forEach(function(e,index){
        if(index == 0){
            e.style.marginLeft = "2px"
        }else{
            e.style.marginLeft = "20px"
        }
        if(as[index].innerText != "汉服商城"){
            e.style.display = "none"
        }
    })
    var spans = document.querySelectorAll("#suit span")
    var imgs = document.querySelectorAll("#imgShow img")
    var navigationas = document.querySelectorAll("#navigationUl a");
    imgs.forEach(function(e,index){
        e.addEventListener("click",function(){
            spans.forEach(function(eA,indexA){
                if(index == indexA){
                    if(index == 0){
                        if(!(/third/.test(e.src) && /third/.test(e.nextSibling.src))){
                            eA.classList.add("spanActive")
                        }
                        if(/second/.test(e.src) && /third/.test(e.nextSibling.src)){
                            spans.forEach(function(ele,indexC){
                                if(indexC == 1){
                                   
                                    ele.classList.remove("spanActive")
                                }
                            })
                            
                        }
                    }else{
                        if(!(/second/.test(e.src) && /second/.test(e.previousSibling.src))){
                            eA.classList.add("spanActive")
                        }
                        if(/third/.test(e.src) && /second/.test(e.previousSibling.src)){
                            spans.forEach(function(ele,indexC){
                                if(indexC == 0){
                                    ele.classList.remove("spanActive")
                                }
                            })
                        }
                    }
                }
            })
        })
    })

    spans.forEach(function(e,index){
        e.addEventListener("click",function(){
            var img = imgs[index]
            if(index == 0){
                img.src = "img/buy/second1.png"
                img.nextSibling.src = "img/buy/second2.png"
            }else{
                img.src = "img/buy/third2.png"
                img.previousSibling.src = "img/buy/third1.png"
            }
            spans.forEach(function(eA,indexA){
                if(index == indexA){
                    if(eA.classList.contains("spanActive")){
                        eA.classList.remove("spanActive")
                        if(index == 0){
                            img.src = "img/buy/second1.png"
                            img.nextSibling.src = "img/buy/third1.png"
                        }else{
                            img.src = "img/buy/third1.png"
                            img.previousSibling.src = "img/buy/second1.png"
                        }
                    }else{
                        eA.classList.add("spanActive")
                    }
                }else{
                    eA.classList.remove("spanActive")
                }
            })
        })
    })

    var img = document.querySelectorAll("img");
    var overlay = document.getElementById('overlay');

    var imgArray = Array.prototype.slice.call(img);

    imgArray.forEach(function(e) {
        e.addEventListener('dblclick', function() {
            var isFullscreen = e.classList.contains('fullscreen');
            
            if (isFullscreen) {
                e.classList.remove('fullscreen');
            } else {
                e.classList.add('fullscreen');
            }
            overlay.style.display = isFullscreen ? 'none' : 'block';
            document.body.style.overflow = isFullscreen ? 'auto' : 'hidden';
            
        });
    });

    overlay.addEventListener('click', function() {
        imgArray.forEach(function(e) {
            e.classList.remove('fullscreen');
        });
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    


}