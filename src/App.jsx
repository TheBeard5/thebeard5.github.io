import { useState } from "react";
import JSConfetti from 'js-confetti'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})
  const [intentos, setIntentos] = useState(0)
  const [mostrar, setMostrar] = useState(false)

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)
  const [position, setPosition] = useState({ top: 540, left: 750 });



  const [valueSi, setValueSi] = useState(false)

  let random = [{
    id: 1,
    description: "Di si por favor",
    img: "/descarga9.gif"
  },
  {
    id: 2,
    description: "Vamos, atrévete a decir que sí.",
    img: "/descarga2.gif"
  },
  {
    id: 3,
    description: "No tengas miedo, será genial.",
    img: "/descarga2.gif"
  },
  {
    id: 4,
    description: "Confía en mí, será divertido.",
    img: "/descarga4.gif"
  },
  {
    id: 5,
    description: "No tengas dudas, te hará sonreír.",
    img: "/descarga5.gif"
  },
  {
    id: 6,
    description: "Te prometo que será inolvidable.",
    img: "/descarga6.gif"
  },
  {
    id: 7,
    description: "No dejes que el miedo te detenga.",
    img: "/descarga7.gif"
  },
  {
    id: 8,
    description: "Confía en el destino, nos está dando una señal.",
    img: "/descarga8.gif"
  },
  {
    id: 9,
    description: "Confía en mí.",
    img: "/descarga9.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 8);
    console.log(index)
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10)
    }
    setRandomValor(random[index]);
  }


  const handleImageLoad = () => {
    setImagenCargada(true);
  }

  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * (window.innerHeight - 50)); // 50 es el tamaño aproximado del botón
    const left = Math.floor(Math.random() * (window.innerWidth - 370)); // 150 es el ancho aproximado del botón
    return { top, left };
  };

  // Función que se ejecuta cuando se hace hover sobre el botón
  const handleHover = () => {
    setMostrar(true);
    setIntentos(intentos+1)
    randomResponse();
    setPosition(getRandomPosition()); // Establecer una nueva posición aleatoria
  };

  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center">¿Fernanda Laureano quieres ser mi San Valentin?</h1>
            <img src={Object.keys(randomValor).length === 0 ?
              "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif" : randomValor.img} alt="San Valentin" className="mx-auto" width={400} height={400} />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button onClick={() => {
                setValueSi(true)

                jsConfetti.addConfetti({
                  emojis: ['😍', '🥰', '❤️', '😘'],
                  emojiSize: 70,
                  confettiNumber: 80,
                })

              }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl`}>
                Si 
                <br />
                {mostrar?(
                  <span>veces que haz roto mi corazon - {intentos} </span>

                ):( <span></span>)}
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                onMouseEnter={handleHover}
                style={{
                  position: 'absolute', // Necesario para mover el botón libremente
                  top: `${position.top}px`,
                  left: `${position.left}px`,
                  width: '370px',
                  cursor: 'pointer',
                }}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="text-4xl text-white font-bold">Sabia que dirias que si ❤️!</h1>
            <img src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif" alt="" className="mx-auto" />
            <span hidden>{document.title = 'Sabia que dirias que si ❤️!'}</span>
          </div>
        )
      }
    </main>
  )
}

export default App
