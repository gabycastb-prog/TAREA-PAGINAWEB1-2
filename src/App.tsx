import CardInstagram from './componentes/CardInstagram'

function App() {
  return (
    <main className="min-h-screen bg-black p-6 flex items-center justify-center">
      <CardInstagram
        nombre="Hanna"
        usuario="@hanna_cxb"
        bio="Estudiante de Multimedia. Me gusta el diseño, la fotografía y crear páginas web."
        foto="https://louisvillezoo.org/wp-content/uploads/2014/12/Koala-banner-870x500.jpg"
        publicaciones="128"
        seguidores="2.4 mil"
        seguidos="310"
        post1="https://thumbs.dreamstime.com/b/fondo-del-blanco-de-los-againts-del-primer-del-oso-de-koala-10930228.jpg"
        post2="https://static.nationalgeographicla.com/files/styles/image_3200/public/koala_02.jpg?w=1600"
        post3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5CO6VUuoW82Q3gSxcm0NOPYpYjD0sfs5JlcCkGd5cIzOe9v5qx2KpD1s&s=10"
      />
      
    </main>
  )
}

export default App