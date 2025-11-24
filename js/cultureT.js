window.onload = function () {
  var ps = document.querySelectorAll("header p");
  var as = document.querySelectorAll("header a");
  ps.forEach(function (e, index) {
    if (index == 0) {
      e.style.marginLeft = "2px";
    } else {
      e.style.marginLeft = "20px";
    }
    if (as[index].innerText != "朝代服饰") {
      e.style.display = "none";
    }
  });
  as.forEach(function (e, index) {
    e.addEventListener("click", function () {
      ps.forEach(function (p, indexP) {
        if (index == indexP) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });
    });
  });

  var dynastyAS = document.querySelectorAll("#dynasty a");
  dynastyAS.forEach(function (e, index) {
    e.addEventListener("click", function () {
      dynastyAS.forEach(function (DY, indexA) {
        if (index == indexA) {
          DY.classList.add("dynastyStyle");
        } else {
          DY.classList.remove("dynastyStyle");
        }
      });
    });
  });

  var imgList = document.getElementById("imgList");
  var lis = document.querySelectorAll("#carousel li");
  var carousel = document.getElementById("carousel");
  function moveTo(number) {
    var mv = number * 391;
    imgList.style.left = -mv + "px";
    lis.forEach(function (ele, index) {
      if (index == number - 1) {
        ele.classList.add("BGC");
      } else {
        ele.classList.remove("BGC");
      }
    });
  }
  var currentTndex = 1;
  var autoMoveFlag = setInterval(showNext, 2000);

  carousel.onmouseenter = function () {
    clearInterval(autoMoveFlag);
  };
  carousel.onmouseleave = function () {
    autoMoveFlag = setInterval(showNext, 2000);
  };

  function showNext() {
    currentTndex++;
    if (currentTndex == 5) {
      currentTndex = 0;
      imgList.style.transition = "none";
      imgList.style.left = "0px";
      imgList.clientHeight;
      imgList.style.transition = "all 0.5s ease";
      moveTo(1);
    } else {
      moveTo(currentTndex);
    }
  }

  lis.forEach(function (ele, index) {
    ele.onclick = function () {
      currentTndex = index + 1;
      moveTo(index + 1);
    };
  });

  var as = document.querySelectorAll("#dynasty a");
  as.forEach(function (e) {
    e.style.width = window.innerWidth / as.length + "px";
  });
  window.addEventListener("resize", function () {
    var header = document.querySelector("header");
    header.style.width = window.innerWidth + "px";
    var bottom = document.getElementById("bottom");
    bottom.style.width = window.innerWidth + "px";
    var as = document.querySelectorAll("#dynasty a");
    as.forEach(function (e) {
      e.style.width = window.innerWidth / as.length + "px";
    });
  });

  var B3img = document.querySelectorAll("#background3 img");
  var B3div = document.querySelectorAll("#background3 div");
  var B3span = document.querySelectorAll("#background3 span");
  B3img.forEach(function (e, index) {
    e.onclick = function () {
      e.nextSibling.style.opacity = "1";
      e.nextSibling.style.zIndex = "3";
      e.previousSibling.style.opacity = "0.5";
      e.previousSibling.style.zIndex = "2";
    };
  });

  B3div.forEach(function (e, index) {
    e.onclick = function () {
      e.nextSibling.nextSibling.style.opacity = "0";
      e.nextSibling.nextSibling.style.zIndex = "0";
      e.style.opacity = "0";
      e.style.zIndex = "0";
    };
  });

  B3span.forEach(function (e, index) {
    e.onclick = function () {
      e.previousSibling.previousSibling.style.opacity = "0";
      e.previousSibling.previousSibling.style.zIndex = "0";
      e.style.opacity = "0";
      e.style.zIndex = "0";
    };
  });
};
