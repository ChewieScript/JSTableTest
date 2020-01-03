let logic = false;
function inputTable(){
	if (logic == false) {
		
	let tableWidth = document.getElementsByName('width'),
	tableHeight = document.getElementsByName('height');
	let Table = document.createElement('table');
	let Tbody = document.createElement('tbody');
	let q = prompt("Молодой человек, вам на сколько строк и ячеек?");
	for (let i = 1; i <= q; i=i + 1) {
		let a = document.createElement('tr');
			for ( let f = 1; f <= q; f = f + 1){
			let b	= document.createElement('td');
			b.id = 'tdc';
			a.append(b)
}
Tbody.append(a)
logic = true;


}



Table.append(Tbody);
Table.id = 'NoneTable';
document.body.append(Table);


} else
	alert('Таблица уже созданна, молодой человек');
}
function noneTable() {
	let logicinput = true;
	if (logic == true) {
		document.getElementsByTagName('table')[0].style.display = 'none';
		logicinput = false
		
} else 
	alert('А скрывать нечего, молодой человек')
}
function displayTable() {
	if (logic == true) {
		document.getElementsByTagName('table')[0].style.display = 'table';
		
} else 
	alert('А разворачивать нечего, молодой человек')
}
function deleteTable() {
	if (logic == true) {
		document.getElementsByTagName('table')[0].remove();
		logic = false;
		
		
	} else 
		alert('Хм, кажется, молодой человек, пустоту удалить нельзя');
	
	
}
function colorTable() {

	let col=prompt('А какой цвет молодой человек?')
	
	document.getElementById('tdc').style.background = col;
}
function color(){
	let col=prompt('А какой цвет молодой человек?')
   var x = document.getElementsByTagName('td');
   for(i=0;i<x.length;i++) {
     x[i].style.backgroundColor =col;
   }
}



//function TableNone(){
	//document.getElementById("NoneTable").className = "tablenone";
	//document.write('<input type="button" onclick="TableDisplay()" value="а теперь снова создdай!">');
//}
//function TableDisplay(){
//	document.getElementById("NoneTable").className = "inputd";
//}
//document.write('<input type="button" onclick="TableNone()" value="а теперь снова создай!">');