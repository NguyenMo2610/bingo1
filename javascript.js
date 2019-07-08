var usedNums = new Array();

function newCard() {
	var maxNum =25;
	var number =2;
	var node = document.getElementById("bingoTable");
	var html = '';

	if (document.getElementById("maxNum").value>=25&&document.getElementById("maxNum").value<=100) {
		maxNum = document.getElementById("maxNum").value
	}else {
		alert("Giá trị lớn nhất phải >=25 và <=100");
		return;
	}
	if (document.getElementById("number").value>=2) {
		number = document.getElementById("number").value
	}else {
		alert("Số người chơi >=2");
		return;
	}
	for (var i = 0; i < number; i++) {

		html += '<div class="container" style="width:50%;height:20%"><div class="display-container"><table class="table">';

		for(var y = 0; y < 5; y++) {
			html += '<tr>';
			for(var x = 0; x < 5; x++) {
				if(x==2&&y==2){
					html += '<td></td>';
					continue;
				}
				do {
					var newNum = Math.floor((Math.random() * maxNum) + 1);
				}while(usedNums[newNum]);
				usedNums[newNum] = true;
				html += '<td>' + newNum + '</td>';		
			}
			html += '</tr>';
		}
		for(var a=1; a<usedNums.length; a++) {
			usedNums[a] = false;
		}

		html += '</br></table></div></div>';
	}
	
	node.innerHTML = html;
}




