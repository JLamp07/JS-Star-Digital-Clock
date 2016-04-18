/*
			0
	*********
1 *				*	2
	*		3		*
	*********
4 *				*	5
	*				*
	*********
			6
*/

function getDigitalNumber(num) {
	var numberConfig = {
		0: [0,1,2,4,5,6],
		1: [2,5],
		2: [0,2,3,4,6],
		3: [0,2,3,5,6],
		4: [1,2,3,5],
		5: [0,1,3,5,6],
		6: [0,1,3,4,5,6],
		7: [0,2,5],
		8: [0,1,2,3,4,5,6],
		9: [0,1,2,3,5,6]
	};
	var html = '';
	
	if(typeof numberConfig[num] !== 'undefined') {
		var numberData = numberConfig[num];
		
		html += '<div class="digital-number">';
			html += '<div class="border-row letter-spacing border-part border-part-0 '+(numberData.indexOf(0) === -1 ? 'hide' : '')+'">********</div>';
			html += '<div class="border-row negative-top">';
			for(var i = 0; i < 5; i++){
				html += '<div class="border-col left border-part border-part-1 '+(numberData.indexOf(1) === -1 ? 'hide' : '')+'">*</div>';
				html += '<div class="border-col right border-part border-part-2 '+(numberData.indexOf(2) === -1 ? 'hide' : '')+'">*</div>';
			}
			html += '</div>';
			html += '<div class="border-row letter-spacing border-part border-part-3 '+(numberData.indexOf(3) === -1 ? 'hide' : '')+'">********</div>';
			html += '<div class="border-row negative-top">';
			for(var i = 0; i < 6; i++){
				html += '<div class="border-col left border-part border-part-4 '+(numberData.indexOf(4) === -1 ? 'hide' : '')+'">*</div>';
				html += '<div class="border-col right border-part border-part-5 '+(numberData.indexOf(5) === -1 ? 'hide' : '')+'">*</div>';
			}
			html += '</div>';
			html += '<div class="border-row negative-top letter-spacing border-part border-part-6 '+(numberData.indexOf(6) === -1 ? 'hide' : '')+'">********</div>';
		html += '</div>';
	}
	
	return html;
}

function getDigitalSeparator() {
	return '<div class="separator">*<br>*</div>';
}

function drawNumber(numbers) {
	var output = '';
	if(numbers < 10) {
		numbers = '0'+numbers;
	}
	for (var i = 0; i < numbers.toString().length; i++) {
		output += getDigitalNumber(numbers.toString().charAt(i));
	}
	return output;
}

function drawClock() {
	setInterval(function() {
		var output = '';
		var date = new Date();
		output += drawNumber(date.getHours());
		output += getDigitalSeparator();
		output += drawNumber(date.getMinutes());
		output += getDigitalSeparator();
		output += drawNumber(date.getSeconds());
		
		$('#digital-clock').html(output);
	}, 1000);
}

drawClock();
// $('#digital-clock').html(drawNumber(12)+getDigitalSeparator()+drawNumber(12));