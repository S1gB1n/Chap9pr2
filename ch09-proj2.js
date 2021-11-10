
/* add your code here */
const X = 0;
const Y = 1;
const DESC = 2;

const painting_content = JSON.parse(content);

function find_painting(id){
    for(let i in painting_content){
        if(painting_content[i].id == id){
            return painting_content[i]
        }
    }
}


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
    /*  adding event delegation on an element will make anything inside the element becomes clickable
        but to add event to those stuff inside, we need to add a condition.
        ex. 
            const target = e.target;
            if(target) { ... do stuff ...}
    */
    let first_run = true;
    var painting_list = document.getElementById('paintings');
    painting_list.addEventListener('click', function(e){
        const target = e.target;
        if (target){
            
            if(first_run){
                first_run = false;
            }else{
                var figure_element = document.querySelector('figure');
                var c_box = document.querySelectorAll('.box');
                console.log(c_box);
                console.log(figure_element);        
                c_box.forEach(element => figure_element.removeChild(element));
            }

            const painting = find_painting(target.id);
            document.querySelector('#full').src = "images/large/" + painting.id + ".jpg";
            document.querySelector('#title').innerHTML = painting.title;
            document.querySelector('#artist').innerHTML = painting.artist;     
            console.log(painting); // test

            //#5
            // add the boxes (div) wtih description
            var painting_feature = painting.features;
            var node_features;
            for(let i in painting_feature){
                node_features = document.createElement('div');
                node_features.setAttribute('class', 'box');
                node_features.style.position = 'absolute';
                node_features.style.left =  painting_feature[i].upperLeft[X] + 'px';
                node_features.style.top = painting_feature[i].upperLeft[Y] + 'px';
                let width = painting_feature[i].lowerRight[X] - painting_feature[i].upperLeft[X];
                let height = painting_feature[i].lowerRight[Y] - painting_feature[i].upperLeft[Y];
                node_features.style.width = width + 'px';
                node_features.style.height = height + 'px';

                //#6 
                //Mouseover and Mouseout
                node_features.addEventListener('mouseover', function(event){
                    const e_target = event.target;
                    if(e_target){
                        let desc = painting_feature[i].description;
                        document.querySelector('#description').innerHTML = desc;                     
                    }
                });
                node_features.addEventListener('mouseout', function(event){
                    const e_target = event.target;
                    if(e_target){
                        document.querySelector('#description').innerHTML = "";                     
                    }
                });
                

                document.querySelector('figure').appendChild(node_features);
            }
            


        }
    });    

    
});

/*
    To add even click on the picture use "event delegation" (see in the notes page: 45)
    find():
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 
    delegation:
    https://www.educative.io/edpresso/what-is-event-delegation-in-javascript?utm_term=&utm_campaign=%5BTest%5D+Dynamic+Verticals&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=14045073269&hsa_grp=128822123401&hsa_ad=535845844738&hsa_src=g&hsa_tgt=aud-470210443636:dsa-310094130363&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA-K2MBhC-ARIsAMtLKRsAzbOTVWN7-rt1zMkv3L1lvzSJp8W8hvQRvu-lcXhrmogvVepBK7AaArg6EALw_wcB
 */