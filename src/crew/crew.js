import "./crew.scss";

let members = {
    Alice:{
        name: 'Alice',
        image: 'src/image/crew/alice.jpg'
    },

    Nana:{
        name:'Nana',
        image:'src/image/crew/amanda.jpg'
    },

    Cynthia:{
        name:'Cynthia',
        image:'src/image/crew/yuki.jpg'
    },

    Amanda:{
        name:'Amanda',
        image:'src/image/crew/evelyn.jpg'
    }
}

let crew = document.querySelector('.grid-object-2');

for(let member in members){
    
    let element = document.createElement("div");
    //set id for render name when hover
    element.setAttribute("id", members[member]['name']);
    
    element.setAttribute("class", 'member');
    
    let url = members[member]['image'];
    let sty_attr =`background-image:url(${url})`; 
    element.setAttribute("style", sty_attr);
    
    //for dipalying name when hover
    let nametag = document.createElement("div");
    nametag.setAttribute("class", 'hover-name'); 
    nametag.innerHTML = `${members[member]['name']}`;
    //added to the element created at the begining of the block
    element.appendChild(nametag);
    //added the element to grid object 2
    crew.appendChild(element);
}