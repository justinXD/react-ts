import { useRef } from 'react'
import { Iimage } from "@/interfaces/Iimage";



export const RandomFox = (prop: Iimage): JSX.Element => {
    const node = useRef<HTMLImageElement>(null) // indicamos el type del tipo de elemento que queremos afectar (image en este caso) y lo inicializamos en null
// const [image, setImage] = useState(``)
// useEffect(() => setImage(`https://randomfox.ca/images/${random()}.jpg`), [])
    // const image: string = `https://randomfox.ca/images/${random()}.jpg`;
    return <img ref={node} width={320} height="auto" className='rounded' src={prop.image} alt={prop.alt}/>
}