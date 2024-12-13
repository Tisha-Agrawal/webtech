const Student=[{
    Name:"Ram",
    City:"Agra",
    CGPA:"9.5"},
{ Name:"Rahul",
    City:"Delhi",
    CGPA:"8.0"},
{Name:"Ritika",
    City:"Mumbai",
    CGPA:"8.0"}];
console.table(Student);
for (let i=0;i<Student.length;i++){
    if(Student[i].City=="Mumbai"){
        console.log(Student[i]);}
    else if(Student[i].CGPA>8.4){
        console.log(Student[i]); }}
