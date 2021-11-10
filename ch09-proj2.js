
/* add your code here */
const painting_content = JSON.parse(content);

document.addEventListener('DOMContentLoaded', () =>{

    console.log(painting_content[0].id);
    alert("hello world");


    var node = document.createElement("li");
    var textnode = document.createTextNode("first text node");
    node.appendChild(textnode);
    var ulel = document.querySelector('#paintings ul'); 
    console.log("ulel: " + ulel);
    ulel.appendChild(node);

    // adding id and dataset property
    node = document.createElement("li");
    node.setAttribute('id', '0001');
    node.setAttribute('data-id', '1234');
    node.dataset.id = "4321";
    node.setAttribute('data-date-of-birth', 'hello'); // adding dataset
    node.dataset.dateOfBirth = "2000";
    textnode = document.createTextNode("second text node");
    node.appendChild(textnode);
    document.querySelector("#paintings ul").appendChild(node); 

    node = document.createElement("li");
    textnode = document.createTextNode("third text node");
    node.appendChild(textnode);
    document.getElementById("details").appendChild(node); 

    // Traverse through painting content
    for(let i = 0; i < painting_content.length; i++){
        console.log(painting_content[i].id); // TEST
        
        //generate the a list of thumbnail of images of the painting
        

        //add id value of the painting using dataset property
    }
});

/*
    To add even click on the picture use "event delegation" (see in the notes page: 45)

 
 */