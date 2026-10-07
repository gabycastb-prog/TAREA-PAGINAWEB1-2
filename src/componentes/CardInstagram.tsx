function CardInstagram(props: {
  nombre: string
  usuario: string
  bio: string
  foto: string
  publicaciones: string
  seguidores: string
  seguidos: string
  post1: string
  post2: string
  post3: string
}) {
  return (
    <div className="bg-white max-w-sm w-full rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-4">
        <div className="bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1 rounded-full">
          <img
            src={props.foto}
            alt={props.nombre}
            className="w-20 h-20 rounded-full object-cover border-4 border-white"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">{props.usuario}</h2>
          <p className="text-sm text-gray-500">{props.nombre}</p>
        </div>
      </div>

      <p className="text-sm mt-4">{props.bio}</p>

      <div className="grid grid-cols-3 text-center border-y border-gray-200 py-3 mt-4">
        <div>
          <p className="font-bold">{props.publicaciones}</p>
          <p className="text-xs text-gray-500">publicaciones</p>
        </div>
        <div>
          <p className="font-bold">{props.seguidores}</p>
          <p className="text-xs text-gray-500">seguidores</p>
        </div>
        <div>
          <p className="font-bold">{props.seguidos}</p>
          <p className="text-xs text-gray-500">seguidos</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm py-2 rounded-lg">
          Seguir
        </button>
        <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-black font-bold text-sm py-2 rounded-lg">
          Mensaje
        </button>
      </div>
       <div className="grid grid-cols-3 gap-1 mt-4">
        <img src={props.post1} alt="Publicación 1" className="w-full aspect-square object-cover hover:opacity-80" />
        <img src={props.post2} alt="Publicación 2" className="w-full aspect-square object-cover hover:opacity-80" />
        <img src={props.post3} alt="Publicación 3" className="w-full aspect-square object-cover hover:opacity-80" />
      </div>
    </div>
    
  )
}

export default CardInstagram