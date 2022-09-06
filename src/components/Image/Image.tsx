import * as React from 'react'
import * as s from './Image.module.css';

export interface ImageProps {
    src: string,
    title: string
}

const Image: React.FC<ImageProps> = ({
    src, 
    title
}) => {
    return (
        <div>
            <img className={s.img} src={src} alt={title}/>
            <div className={s.title}>{title}</div>
        </div>
    )
}

export default Image