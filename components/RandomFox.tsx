// import { useEffect, useState } from 'react'
import { Iimage } from "@/interfaces/Iimage";



export const RandomFox = (prop: Iimage): JSX.Element => {
// const [image, setImage] = useState(``)
// useEffect(() => setImage(`https://randomfox.ca/images/${random()}.jpg`), [])
    // const image: string = `https://randomfox.ca/images/${random()}.jpg`;
    return <img width={320} height="auto" className='rounded' src={prop.image} alt={prop.alt}/>
}