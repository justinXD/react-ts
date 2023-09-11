import { useRef, useEffect,useState } from 'react'
import { Iimage } from "@/interfaces/Iimage";



export const LazyImage = ({src, onLazyLoad, ...imgProps}: Iimage): JSX.Element => {
    const node = useRef<HTMLImageElement>(null) // indicamos el type del tipo de elemento que queremos afectar (image en este caso) y lo inicializamos en null
    const [isLazyLoaded, setIsLazyLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    )

    useEffect(() => {   // con useEffect hacemos que el observer solo funcione del lado del cliente
        if (isLazyLoaded) {
            return;
        }
        //nuevo observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting || !node.current) {
                return;
            }
            setCurrentSrc(src);
            observer.disconnect();
            setIsLazyLoaded(true);
            if (typeof onLazyLoad === "function") {
                onLazyLoad(node.current);
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
    },[src, onLazyLoad, isLazyLoaded])
        
    return <img 
            ref={node} 
            src={currentSrc}
            {...imgProps}/>
}