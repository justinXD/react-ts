import { useRef, useEffect,useState } from 'react'
import { Iimage } from "@/interfaces/Iimage";



export const LazyImage = (prop: Iimage): JSX.Element => {
    const node = useRef<HTMLImageElement>(null) // indicamos el type del tipo de elemento que queremos afectar (image en este caso) y lo inicializamos en null
const [src, setsrc] = useState(
"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
)

    useEffect(() => {   // con useEffect hacemos que el observer solo funcione del lado del cliente
        //nuevo observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setsrc(prop.src)
                console.log('interseccion')
            }
        })
    })

    //observa el nodo
    if (node.current) {
        observer.observe(node.current)
    }
    // observer.observe(node.current!)  // el ! le dice a TypeScript que no me de el warning

    // desconectar
    return () => {
        observer.disconnect()
    }
    },[prop.src])
    

    return <img ref={node} 
                width={320} 
                height="auto" 
                className='rounded bg-gray-300' 
                src={prop.src} alt={prop.alt}
                onClick={prop.onClick}/>
                /*tambien puedo hacer 
                    <img 
                    ref={node} 
                    src={prop.src}
                    {...imgProps}/>

                    si al definir mi componete hago const LazyImage = ({ src, ...imgProps } = Iimage)
                    donde imgProps sera un objeto con todas las demas propiedades de Iimage
                */
}