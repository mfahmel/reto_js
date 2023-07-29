

let allPosts = []

const getAllPosts = async ()=>{
    // GET
    let response = await fetch("https://mi-proyecto-7bd3d-default-rtdb.firebaseio.com/posts/.json");
    let data     = await response.json(); 

    
    for( let i in data){
        let newObj = { ...data[i], key: i }  // creas un nuevo objeto modificado para agregar una key: valor
        allPosts.push(newObj)
    }

    // console.log( allPosts[ Math.floor(Math.random() * allPosts.length ) ])
    return allPosts
}


const printRandomPost = ( randomPost)=>{
    let containerRandomPost = document.getElementById('random-post-container'); // contenedor
    let imgContainer = document.createElement('div');   // div
    let imgRandomPost = document.createElement('img');  // imagen 
    imgContainer.setAttribute('src', randomPost.imageUrl)
    imgContainer.append(imgContainer);

    let titulo = document.createElement('p');
    titulo.innerText = randomPost.title;
    containerRandomPost.append(titulo)
}

const getOneRandomPost = ( res )=>{
    let randomPost = res[ Math.floor(Math.random() * allPosts.length ) ]
    printRandomPost(randomPost);
}


getAllPosts().then(( res )=>{
    getOneRandomPost( res )
});
