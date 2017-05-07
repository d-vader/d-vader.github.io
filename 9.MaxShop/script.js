  var toggleUp = document.querySelector(".gallery__to-left");
  var toggleDown = document.querySelector(".gallery__to-right");
  var slide1 = document.querySelector("#gallery__item-1");
  var slide2 = document.querySelector("#gallery__item-2");
  var slide3 = document.querySelector("#gallery__item-3");
  var slide4 = document.querySelector("#gallery__item-4");
  var top1 = slide1.style.top;
  var top2 = slide2.style.top;
  var top3 = slide3.style.top;
  var top4 = slide4.style.top;


  var arr = [top1, top2, top3, top4];
  var arr2 = [slide1, slide2, slide3, slide4];


  toggleDown.addEventListener("click", function () {
      for (var i = 0; i < 4; i++) {
          arr[i] = parseInt(arr[i]);
          if (arr[i] < 270) {
              arr[i] = arr[i] + 95 + "px";
              arr2[i].style.top = arr[i];
          } else {
              arr[i] = "0px";
              arr2[i].style.top = arr[i];
          }
      }


  });

  toggleUp.addEventListener("click", function () {
      for (var i = 0; i < 4; i++) {
          arr[i] = parseInt(arr[i]);
          if (arr[i] > 90 ) {
              arr[i] = arr[i] - 95 + "px";
              arr2[i].style.top = arr[i];
          } else {
              arr[i] = "285px";
              arr2[i].style.top = arr[i];
          }
      }


  });