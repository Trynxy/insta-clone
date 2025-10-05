document.addEventListener("DOMContentLoaded",()=>{
    const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let nameEl = document.querySelector(".id-name")
let unameEl=document.querySelector(".username")
let captionEl=document.querySelector(".caption")
let locationEl=document.querySelector(".location")
let avartarEl=document.querySelector(".user-avatar")
let postEl=document.querySelector(".feed-post")
let likesEl=document.querySelector(".likes-count")
let feedEl=document.querySelector(".feed")
let buttons=document.querySelectorAll(".button")
let iconContainer=document.querySelector(".interactive-icons")

window.addEventListener('load', function display(){
    nameEl.textContent += `${posts[0].name}`
    unameEl.textContent += `${posts[0].username}`
    captionEl.textContent += `${posts[0].comment}`
    avartarEl.innerHTML = `<img class="user-avatar" src="${posts[0].avatar}">`
    postEl.innerHTML = `<img class="feed-post" src="${posts[0].post}">`
    locationEl.textContent += `${posts[0].location}`
    likesEl.textContent += `${posts[0].likes} likes`

    for(let i=1; i<posts.length; i++){
        postfeed(i)
    }
})

function postfeed(arrnum){

feedEl.innerHTML += `<div class="separator"><div>
            <article class="olda-post">
            <header class="user-info">
                <div class="user- hey Google {
                    
                }else {
                    
                }vatar"><img class="user-avatar" src="${posts[arrnum].avatar}"></div>
                <div class="name-location">
                 <h2 class="id-name">${posts[arrnum].name}</h2>
                 <p class="location">${posts[arrnum].location}</p>
                </div>
            </header>
            <figure class="feed-post"><img class="feed-post" src="${posts[arrnum].post}">
            </figure>
            <div class="interactive-icons">
            <button class="btn"><i class="fa-solid fa-heart fa-2x"></i></button>
            <button class="btn"><i class="fa-solid fa-comment fa-2x"></i></button>
            <button class="btn"><i class="fa-solid fa-paper-plane fa-2x"></i></button>
            </div>
            <footer>
            <p class="likes-count">${posts[arrnum].likes} likes</p>
            <p class="username-caption"><span class="username">${posts[arrnum].username}</span><span class="caption">${posts[arrnum].comment}</span></span></p>
            </footer>
        </article>`

        return

}
//event delegation
iconContainer.addEventListener("click",(e)=>{
    let button=e.target.closest(".btn")
    if(!button) return;
    const article=button.closest(".olda-post")
    
    
    //Validate if the heart was clicked
    const icon=button.querySelector("i")
    if(!icon.classList.contains("fa-heart")) return;
    
    const likesEl =article.querySelector(".likes-count")
    let currentLikes=parseInt(likesEl.textContent)
        likesEl.textContent = `${currentLikes+1} likes`
    
})


    
})