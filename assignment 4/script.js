var names=new Array();
names[0]="yaakov";
names[1]="john";
names[2]="jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laula";
names[9]="jim";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye " + names[i])
	}
	else{
		console.log("Hello " + names[i])
	}
}