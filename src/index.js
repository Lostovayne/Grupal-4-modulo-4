import { Posts } from './data/db.js'

const SearchPosts = document.querySelector('#post')
const form = document.querySelector('#form')
const SearchResult = document.querySelector('#result')

const BuscarPost = id => {
  //Respuesta de la promesa
  const resultados = Posts.filter(post => post.id === Number(id))
  try {
    console.log('Información enviada')
    MostrarHtml(resultados)
  } catch (error) {
    LimpiarHtml()
    const errorMensaje = document.createElement('p')
    errorMensaje.classList.add(
      'alert',
      'alert-danger',
      'text-center',
      'w-50',
      'mx-auto'
    )
    errorMensaje.textContent =
      'No se encontraron resultados en nuestra base de datos'
    SearchResult.appendChild(errorMensaje)
  }
}

//evento al ejecutar el enviar del boton
form.addEventListener('submit', e => {
  e.preventDefault()
  setTimeout(() => {
    BuscarPost(Number(SearchPosts.value))
  }, 2000)
})

function MostrarHtml (result) {
  LimpiarHtml()
  const { title, body } = result[0]
  const postCard = document.createElement('div')
  postCard.classList.add('card', 'w-50', 'p-3', 'mx-auto')
  postCard.innerHTML = `
  <h4 class="card-title text-center " > ${title} </h4>
  <div class="card-body"> 
  <p class="card-text"  > ${body} </p>
  </div>
  `
  SearchResult.appendChild(postCard)
}

function LimpiarHtml () {
  while (SearchResult.firstChild) {
    SearchResult.removeChild(SearchResult.firstChild)
  }
}
