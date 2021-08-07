name_array=[];

function submit(){
    var display_array=[];
    for(var j=1; j<=4; j++)
    {
        var student_name=document.getElementById("name_of_the_student_"+j).value;
        console.log(student_name);
        name_array.push(student_name);


    }
    console.log(name_array);

    var length=name_array.length;
    console.log(length);

    for(var k=0; k<length; k++)
    {
     display_array.push("<h4>NAME - "+name_array[k]+"</h4>");
     console.log(display_array);   
    }
    console.log(display_array);
 document.getElementById("display_name_with_commas").innerHTML=display_array;
 document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    name_array.sort();
    console.log(name_array);

    var display_arraysort=[];
    
    

    var length=name_array.length;
    console.log(length);

    for(var k=0; k<length; k++)
    {
     display_arraysort.push("<h4>NAME - "+name_array[k]+"</h4>");
     console.log(display_arraysort);   
    }
    console.log(display_arraysort);
    document.getElementById("display_name_without_commas").innerHTML=display_arraysort;
}