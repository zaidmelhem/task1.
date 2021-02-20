var students = [];

document.getElementById('submit').addEventListener('click', () => {
	let namestudent = document.getElementById('name');
	let idstudent = document.getElementById('idNumber');
	let gdpastudent = document.getElementById('gdpa');
	
	if (inputValidation(namestudent.value, idstudent.value, gdpastudent.value)) {
	
		insertStudent(namestudent.value, idstudent.value, gdpastudent.value);
		alert (" student add ! ")
	}else {
		alert ("you have forget input , please try again ") ; 
	}
	document.getElementById('name').value = "";
	document.getElementById('idNumber').value = "";
	document.getElementById('gdpa').value = ""; 
	
});

function inputValidation(name, id, gdpa) {
if (name == "" || id == "" || gdpa=="" ){
	return false ; 
}
return true ; 
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

document.getElementById('show').addEventListener('click', () => {
	
document.getElementById("table").style.display = "inline-block";

 var x = document.getElementById('table') ; 

  for (var i = 1 ; i < students.length+1 ; i++){
	     var r =  x.insertRow(i);
		 var ci = r.insertCell(0) ;
		 var cii = r.insertCell(1) ;
		 var ciii = r.insertCell(2) ;

		 ci.innerHTML = students[i-1].name ;
		 cii.innerHTML = students[i-1].id ;
		 ciii.innerHTML = students[i-1].gdpa ;
		 }
});
