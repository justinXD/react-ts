import { ImgHTMLAttributes } from "react"

export interface Iimage extends ImgHTMLAttributes<HTMLImageElement> {
    src: string,
    alt?: string,
    onLazyLoad?: (img: HTMLImageElement) => void
}

export interface IimageItem {
    id: string,
    url: string
}