/* $(document).ready(function () { /* jqDoc Ready функция проверяет готов ли наш сайт к манипуляциям
console.log ("сайт готов к манипуляциям") 
});   */


/* $(document).ready(function () { /* навести на этаж и при клике и получить номер этого этажа
  $(".home-image path" ).on("click", function(){
    console.log ("кликнули на этаж")

  });
}); */


/* выведем в консоль какой конкретно этаж мы кликнули*/
/* $(document).ready(function () { 
  $(".home-image path" ).on("click", function(){
    console.log ($(this).attr("data-floor")) /* мы смогли получить номер текущего этажа
  });
}); */

/* создадим переменную*/
$(document).ready(function () { 
  var currentFloor = 2; // переменная где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа*/
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа*/

  // функция при наведении мышью на этаж 
  floorPath.on("mouseover", function(){
     floorPath.removeClass("current-floor"); // удаляем активный класс у этажей 
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); /* записываем значение этажа счётчик справа*/
  });

  counterUp.on("click", function() { // отслеживаем клик по кнопке вверх
    /* console.log ("кликнули по кнопке вверх"); */
    if (currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; /*при клике увеличим значение этажа  currentFloor на 1 */
    usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом чтобы было 01, а не 1
    $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик справа
    floorPath.removeClass("current-floor");  // удаляем активный класс у этажей 
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем конкретный этаж
    }
  });
  counterDown.on("click", function() {
    /* console.log ("кликнули по кнопке вниз"); */
    if (currentFloor > 2) {
      currentFloor--; /*при клике уменьшим значение  currentFloor на 1 */
      usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
       floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });  
});
