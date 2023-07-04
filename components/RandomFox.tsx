import { useEffect, useState } from 'react'
const random = (): number => Math.floor(Math.random()*123) + 1

export const RandomFox = (): JSX.Element => {
const [image, setImage] = useState(``)
useEffect(() => setImage(`https://randomfox.ca/images/${random()}.jpg`), [])
    // const image: string = `https://randomfox.ca/images/${random()}.jpg`;
    return <img width={320} height="auto" className='rounded' src={image}/>
}