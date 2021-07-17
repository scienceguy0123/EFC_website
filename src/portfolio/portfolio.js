import "./portfolio.scss";

//new movies should be added into this object with the same
//format
let movies = {
    
    divergence:{
        id: 'divergence',
        name: 'Divergence',
        genre: ['Thriller'],
        images: ['src/image/portfolio/divergence/p1.jpg',
                'src/image/portfolio/divergence/p2.jpg',
                'src/image/portfolio/divergence/p3.jpg',
                'src/image/portfolio/divergence/p4.jpg'],
        description:'What would happen when your beloved ' + 
        'robot starts having its own consciousness ? ' + 
        'Divergence is a film that probes into the dilemma ' + 
        'of love and domination.',
        YTLink:'',
        BiliLink:''
    },
    
    feather:{
        id: 'feather',
        name: 'Feather',
        genre: ['Thriller'],
        images:['src/image/portfolio/feather/p1.jpg',
                'src/image/portfolio/feather/p2.jpg',
                'src/image/portfolio/feather/p3.jpg'],
        description:'We are all pursuing something, it could ' +
        'be money, power, love, etc,  but do we really know ' + 
        'what exactly we are chasing after...?',
        YTLink:'',
        BiliLink:''
    },

    chooseWisely:{
        id: 'chooseWisely',
        name: 'Choose Wisely',
        genre: ['Romance'],
        images:['src/image/portfolio/choose-wisely/p1.jpg',
                'src/image/portfolio/choose-wisely/p2.jpg',
                'src/image/portfolio/choose-wisely/p3.jpg'],
        description:'Relationship could be the sweetest thing ' + 
        'in life, but it could also be toxic. The film defines ' +
        'one-sided relationship by presenting how a couple get ' +
        'themselves ready before a date .',
        TYLink:'',
        BiliLink:''
    }
}


//For creating the thumbnails on the page
let playList = document.querySelector('.grid-object-3');
for(let movie in movies){
    let element = document.createElement("div");
    
    element.setAttribute("class", "thumbnail");
    let url =movies[movie]['images'][0]; 
    let sty_attr =`background-image:url(${url})`; 
    element.setAttribute("style", sty_attr);
    
    //set id for later rendering modal content purpose
    element.setAttribute("id", movies[movie]['id']);
    
    //for dipalying title when hover
    let titleEle = document.createElement("div");
    titleEle.setAttribute("class", 'hover-title');  
    titleEle.innerHTML = `${movies[movie]['name']}`;
    //had to also set the id beacuse needs to capture id when clicked for rendering the contexy inside modal
    titleEle.setAttribute("id", movies[movie]['id']);
    //added the hover title to the element created at the begining of the function
    element.appendChild(titleEle);
    //added the entire element to the grid objectr3
    playList.appendChild(element);
}


let thumbnails = document.querySelectorAll('.thumbnail')
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

//gives each thumbnail click eventlistener
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (info)=>{
    //console.log(info);
    openModal(info.target.id);
    })
})

let slideshow = document.querySelector('.slideshow');
let slideshowPic = slideshow.querySelector('.images'); 
let slideIndex = 1;//the index of the image displayed in the modal

//helper method that render the unique content for the modal
function openModal(id){
    modal.classList.toggle('modal-active');
    overlay.classList.toggle('overlay-active');
    
    let title = modal.querySelector('.title-content');
    title.innerHTML = `${movies[id]['name']}`;
    
    //in case there are multiple genre in a single movie,
    //convert the list into string first
    let genre = modal.querySelector('.genre-content');
    let genreStr = movies[id]['genre'].join(', ');
    genre.innerHTML = `${genreStr}`;

    let description = modal.querySelector('.description-content');
    description.innerHTML = movies[id]['description'];

    //rendering slideshow
    //needs to clear slideshow's innerhtml everytime cloesed
    //otherwise the picture will accumulate
    for (let image in movies[id]['images'] ){
        let element = document.createElement("div");
        element.setAttribute("class", "image");
        let path = `${movies[id]['images'][image]}`;
        element.innerHTML = `<img src=${path} style="width:100%">`;
        slideshowPic.appendChild(element);
    }
    //generates the slideshow, displaying the first pic
    showSlides(slideIndex);
}


//clicking the X to close the modal
let closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', ()=>{
    closeModal();
    
})


//allow clicking outside the modal to close the modal
overlay.addEventListener('click', ()=>{
    closeModal();
})


//helper method that closes the modal
function closeModal() {
    modal.classList.remove('modal-active');
    overlay.classList.remove('overlay-active');
    slideshowPic.innerHTML = '';
    //reset the slideshow pic index to the first pic
    slideIndex = 1;
}



//functions for slideshow display and control
function showSlides(n){
    // i used in later for loop
    let i;  
    
    //slidesshow is defined at the top before openmodal function
    //get varaible length because it returns a list and can get the number of images
    let slides = slideshow.getElementsByClassName("image");
    //console.log(slides);
    //if already run through all the picture return to the 1st picture
    if (n>slides.length) {slideIndex = 1};
    //if it is at the 1st picture and run back, then goes to the last pic
    if (n < 1) {slideIndex = slides.length};

    //last pic is still displayed, so need to resest the display property of all pictures
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //display the right picture
    slides[slideIndex-1].style.display = "block";
}

let prevButt = slideshow.querySelector('.prev');
let nextButt = slideshow.querySelector('.next');

//function to switch picture when press the left arrow in modal's slideshow
prevButt.addEventListener('click', () =>{
    slideIndex -= 1
    showSlides(slideIndex);
})

//function to switch picture when press the left arrow in modal's slideshow
nextButt.addEventListener('click', () =>{
    slideIndex += 1
    showSlides(slideIndex);
})



//functions to control the dropdown filter

function showDropdown() {
    let i;
    let dropDownList = document.querySelector(".dropDownList");
    let dropDownButtons = dropDownList.getElementsByClassName("button");
    for (i=0; i<dropDownButtons.length;i++){
        dropDownButtons[i].classList.toggle("button-show")
    };
}

let dropbtn = document.querySelector('.dropbtn');
dropbtn.addEventListener("click", () => {
    showDropdown();
}







)
