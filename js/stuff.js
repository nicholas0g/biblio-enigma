function admin() { 
    newin = window.open('admin/index.html','Area Amministratori','scrollbars=no,resizable=no, width=400,height=300,status=no,location=no,toolbar=no');
} 
function info() { 
    newin = window.open('richiesta.html','Inviaci una richiesta','scrollbars=no,resizable=no, width=600,height=400,status=no,location=no,toolbar=no');
} 
function rnd(){
	var cells = document.getElementsByTagName('td'),
		colors = ['E52B50','800000','960018','CD5C5C','DC143C','B20000','DB244F','C41E3A','CE3018','B22222','D21F1B','BA6262','A61022'];

	for(var i = 0; i < cells.length; i++) {
		cells[i].style.backgroundColor = '#' + colors[Math.floor(Math.random() * colors.length)];
	}
	}	

