let color = 'red'

switch(color){
	case 'red':
		console.log('Stop!');
		break;
	case 'yellow':
		console.log('Attention!');
		break;
	case 'green':
		console.log('GO!');
		break;
	default:
		console.log('This color is not allowed!');
		break;
}

date = new Date();
weekDay = date.getDay();
let day;

if(weekDay === 1) day = 'Esmaspäev';
else if(weekDay === 2) day = 'Teisipäev';
else if(weekDay === 3) day = 'Kolmapäev';
else if(weekDay === 4) day = 'Neiljapäev';
else if(weekDay === 5) day = 'Reede';
else if(weekDay === 6) day = 'Laupäev';
else if(weekDay === 0) day = 'Pühapäev';
else console.log('Miskit lappes ei vä?')
console.log(day)