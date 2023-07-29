
// inicia jesus
let allPosts = []

const getAllPosts = async () => {
  // GET
  let response = await fetch("https://mi-proyecto-7bd3d-default-rtdb.firebaseio.com/posts/.json");
  let data = await response.json();

  // convertir mi objeto de posts a array
  // {  _1241242141: { .... }, _2421521515: { .... }  }
  for (let i in data) {
    let newObj = { ...data[i], key: i }  // creas un nuevo objeto modificado para agregar una key: valor
    allPosts.push(newObj)
  }
  console.log(allPosts)
  // console.log( allPosts[ Math.floor(Math.random() * allPosts.length ) ])
  return allPosts;
}

const printAllPost = async  (listPosts) => {
  let mainSection = document.getElementById('cards-container');
  let imagePost = document.getElementsByClassName('image-post');
  let tags = document.getElementById('section-tags-in-post');

  // obteniendo un arreglo de avatars igual al numero de posts
  let imagenAvatar = await fetch(`https://randomuser.me/api/?results=${listPosts.length}`);
  let data = await imagenAvatar.json();
  

  // creando las cards de los posts
  let cards = ''
  listPosts.forEach((post, i) => {

    let tagsElements = post.tags.reduce(( acum, curr)=>{
      return acum + `<div><button class="post__language">#${curr}</button></div>`
    },'');

    cards += `<a
    href="post/simplify-your-c-code-top-5-refactoring-tools-1bo0.html"
    class="text-decoration-none"
    >
    <div class="card" style="width: 100%; border-radius: 5px">
      <img
        class="card-img-top ${ i == 0 ?  '': 'image-post'}"
        src=${post.imageUrl}
        alt="..."
      />
      <div class="poster">
        <img
          class="rounded-5 post__photo"
          alt="algo"
          src="${data.results[i].picture.thumbnail}"
          alt=""
        />
        <div class="post__info">
          <p class="post__name">Jatin Sharma for Documatic</p>
          <br />
          <p class="post__date">Posted ${post.createdAt}</p>
        </div>
      </div>
      <h1 class="post__title">
        ${post.title}
      </h1>
      <div id='section-tags-in-post' class="post__prog__lang">
        ${tagsElements}
      </div>
      <div class="post__reactions d-flex d-row">
        <img src="sources/images/reactions.png" alt="" />
        <span class="reactions__number">${post.vote} Reactions</span>
        <span class="comments__number"
          ><img src="sources/images/comments.png" alt="" />3
          Comments</span
        >
        <span class="time__read"
          >3 min read <i class="bi bi-bookmark"></i
        ></span>
      </div>
      <div class="post__reply">
        <img
          class="rounded-5 post__photo__reply"
          alt="algo"
          src="sources/images/moi.svg"
          alt=""
        />
        <div class="reply__box">
          <p class="reply__name">Moi 1 day ago</p>
          <p class="reply__text">
            Entonces quién va a querer comprarme un piano?
          </p>
        </div>
      </div>
      <div class="post__reply">
        <img
          class="rounded-5 post__photo__reply"
          alt="algo"
          src="sources/images/oli.svg"
          alt=""
        />
        <div class="reply__box">
          <p class="reply__name">Oliver 1 day ago</p>
          <p class="reply__text">No pues está cabrón</p>
        </div>
      </div>
      <p class="reply__see__more">See all 1 comments</p>
    </div>
  </a>`

    mainSection.innerHTML = cards;

  })

}

// termina Jesus

// KAHTY
// buscar en la lista un post aleatorio e imprimirlo 
// en el dom sobre un elemento
const printRandomPost = (randomPost) => {
  let containerRandomPost = document.getElementById('random-post-container'); // contenedor
  let imgContainer = document.createElement('div');   // div
  let imgRandomPost = document.createElement('img');  // imagen 
  imgRandomPost.setAttribute('src', randomPost.imageUrl);
  imgRandomPost.style.width = '100%';
  imgContainer.append(imgRandomPost);
  let titulo = document.createElement('p');
  titulo.innerText = randomPost.title;
  containerRandomPost.append(imgContainer);
  containerRandomPost.append(titulo);
}

const getOneRandomPost = (arrayPosts) => {
  let randomPost = arrayPosts[Math.floor(Math.random() * arrayPosts.length)]
  printRandomPost(randomPost);
}
// TERMINA KATHY

// JACE
// buscar en la lista de posts los primeros 3 posts 
// que coincidan con el tag discuss, 
const print3Post = (threePostArray) => {
  let containerFirstTag = document.getElementById('list-post-by-tag');

  let listaPostByTag = ''
  threePostArray.forEach((post) => {
    listaPostByTag += `
        <a
        class="listing__type"
        href="#"
        class="my-2 text-dark text-decoration-none"
        >${post.title}
        <div>
          <a class="comment__vinc" href="#">${Math.floor(Math.random() * 30)} Comentarios</a>
        </div>
      </a>
      <hr class="my-2" />`
  })
  containerFirstTag.innerHTML = listaPostByTag
}


// del arreglo de posts, agarramos los primeros 3 que 
// tengan el tag, si son menos de 3 me traigo esos.
const get3PostByTag = (posts, tagName) => {
  let result = posts.filter((post) => {

    let hasTag = post.tags.find((tag) => {
      return tag === tagName.trim();
    })
    return hasTag;
  })
  if (result.length > 3) {
    result = result.slice(0, 3);
    print3Post(result);
  } else {
    print3Post(result);
  }

}


// filter by word
let inputSearch = document.getElementById('input-search');
inputSearch.addEventListener('keyup', ( e )=>{
  let nuevaLista = allPosts.filter(( post )=>{
    return post.title.includes(e.target.value);
  })
  printAllPost(nuevaLista)
})

// filter by relevant, lates, top

let itemRelevant= document.getElementById('item-relevant');
let itemLatest = document.getElementById('item-latest');
let itemTop = document.getElementById('item-top');

itemRelevant.addEventListener('click', ( e )=>{
  let relevants = allPosts.filter(( post )=>{
    return post.relevant === true;
  })
  printAllPost(relevants);
})

itemLatest.addEventListener('click', ( e )=>{
  let latest = allPosts.sort(( a , b )=>{
    return new Date(b.createdAt) - new Date(a.createdAt);
  })
  printAllPost(latest)
})

itemTop.addEventListener('click', ( e )=>{
  let listTop = allPosts.sort(( a , b )=>{
    return b.vote - a.vote;
  })
  printAllPost(listTop)
})




// inicia Jesus 
getAllPosts().then((posts) => {
  getOneRandomPost(posts)
  printAllPost(posts)

  let tagName = document.getElementById('tag-for-search');
  get3PostByTag(posts, tagName.innerText.split('#')[1]);

});
// termina jesus


