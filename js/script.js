$(document).ready (function(){

$( "button" ).click(function(){ // функция срабатывает по нажатию кнопки
var taskArray = [];

function loadingbar(){ //loading bar
if(!Modernizr.meter){
				alert('Извините, но Ваш браузер не поддерживает HTML5 прогресс бар!');
			} else {
				var progressbar = $('#progressbar'),
					max = progressbar.attr('max'),
					time = (300/max)*5,	
			        value = progressbar.val();

			    var loading = function() {
			        value += 1;
			        addValue = progressbar.val(value);
			        
			        $('.progress-value').html(value + '%');

			        if (value == max) {
			            clearInterval(animate);			           
			        }
			    };

			    var animate = setInterval(function() {
			        loading();
			    }, time);
			};
		};
loadingbar();

$("textarea[name=task]").each(function() { // функция перевода текста из текстового поля в массив
   taskArray.push($(this).val());
});


var gluing = taskArray.join('');
var massiv = [];
massiv = gluing.split('');

var asdf;

function unique(massiv){ //функция поиска уникального элемента
	
	for (var i = 0; i < massiv.length; i++){
	var non_exclusive = false;
	for (var j = 0; j < massiv.length; j++){
	if (massiv[i] == massiv[j] && i != j){
	non_exclusive = true;
	break;
	} 
	}
	if(!non_exclusive){
	asdf = massiv[i];
	return $('resultaty').innerHTML = 'Найденный элемент'+' : '+ massiv[i];
	}
}
return "Исключений нет!";
}
function setElem(){
	 document.getElementById("resultaty").innerHTML = unique(massiv);
}
setTimeout(setElem,1700);



$("#bar").addClass("active");
});
});

