import { ImgHTMLAttributes } from "react"

export interface Iimage extends ImgHTMLAttributes<HTMLImageElement> {
    src: string,
    alt: string
}

export interface IimageItem {
    id: string,
    url: string
}