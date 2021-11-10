
/* add your code here */
const painting_content = JSON.parse(content);

document.addEventListener('DOMContentLoaded', () =>{

    // Traverse through painting content
    for(let i = 0; i < painting_content.length; i++){
 
        //#3
        //generate the a list of thumbnail of images of the painting
        //add id value of the painting using dataset property
        var node_li = document.createElement('li');
        var node_img = document.createElement('img');
        node_img.src = "images/small/" + painting_content[i].id + ".jpg";
        node_img.setAttribute('id', painting_content[i].id);
        node_img.setAttribute('data-id', painting_content[i].id); //setting dataset::data id
        node_li.appendChild(node_img);
        document.querySelector('#paintings ul').appendChild(node_li);
    }

    //#4
    //event delegation to process all painting list
    var painting_list = document.getElementById('paintings');
    painting_list.addEventListener('click', function(e){
        const target = e.target;
        if (target){
            console.log("clicked: " + target.id); // test

            var figure_element = document.getElementsByTagName('figure');
            figure_element.innerHTML = "";
            //const painting = painting_content.find(element => element = );

            console.log(figure_element); // test
        }
    });    

    const a = painting_content.find(element => element = '095010'); //this is wrong
    console.log(a.artist);
});

/*
    To add even click on the picture use "event delegation" (see in the notes page: 45)

    find():
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 
    delegation:
    https://www.educative.io/edpresso/what-is-event-delegation-in-javascript?utm_term=&utm_campaign=%5BTest%5D+Dynamic+Verticals&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=14045073269&hsa_grp=128822123401&hsa_ad=535845844738&hsa_src=g&hsa_tgt=aud-470210443636:dsa-310094130363&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA-K2MBhC-ARIsAMtLKRsAzbOTVWN7-rt1zMkv3L1lvzSJp8W8hvQRvu-lcXhrmogvVepBK7AaArg6EALw_wcB
 */