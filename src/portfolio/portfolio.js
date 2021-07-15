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
    
    playList.appendChild(element);
}


let thumbnails = document.querySelectorAll('.thumbnail')
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

//gives each thumbnail click eventlistener
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (info)=>{
    console.log(info.target.id);
    openModal(info.target.id);
    })
})

//helper method that render the unique content for the modal
function openModal(id){
    modal.classList.toggle('modal-active');
    overlay.classList.toggle('overlay-active');
    
    let title = modal.querySelector('.title-content');
    title.innerHTML = `${movies[id]['name']}`
    
    //in case there are multiple genre in a single movie,
    //convert the list into string first
    let genre = modal.querySelector('.genre-content');
    let genreStr = movies[id]['genre'].join(', ');
    genre.innerHTML = `${genreStr}`;

    let description = modal.querySelector('.description-content');
    description.innerHTML = movies[id]['description'];
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
}

