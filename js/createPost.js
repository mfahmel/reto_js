const nuevoObjeto = {
    imageUrl: '',
    title: '',
    tags: [],
    content: '',
    createdAt: '',
    relevant: '',
    vote: ''
}

let lastPost = ''

const inputs = document.querySelectorAll('.inputs-post');
const botonPublish = document.getElementById('boton-publish')


const crearFormatoFecha = () => {
    let currentDay = new Date();
    let month = currentDay.getMonth() + 1;
    let day = currentDay.getDate();
    let year = currentDay.getFullYear();
    return `${month}-${day}-${year}`
}

const crearNuevoPost = async () => {
    if (nuevoObjeto.imageUrl === '' || nuevoObjeto.title === '' || nuevoObjeto.content === '') {
        return
    }
    nuevoObjeto.relevant = Math.floor(Math.random() + 1) ? true : false;
    nuevoObjeto.createdAt = crearFormatoFecha();
    nuevoObjeto.vote = Math.floor(Math.random() * 300);
    console.log('ok')
    let result = await fetch("https://mi-proyecto-7bd3d-default-rtdb.firebaseio.com/posts/.json", {
        method: 'POST',
        body: JSON.stringify(nuevoObjeto),
    });
    console.log(result)
    // sessionStorage.setItem('lastPost', result.name );
    window.open('/', '_self')
}

botonPublish.addEventListener('click', (ev) => {
    crearNuevoPost().then(() => {

    });
})



const separateTags = (text, name) => {
    let tags = text.split(' ');
    tags = tags.map((tag) => {
        return tag.slice(1,)
    })
    nuevoObjeto[name] = tags
}

inputs.forEach((el) => {
    el.addEventListener('keyup', (ev) => {
        if (ev.target.name === 'tags') {
            separateTags(ev.target.value, ev.target.name)
        } else {
            nuevoObjeto[ev.target.name] = ev.target.value;
        }
    })
})