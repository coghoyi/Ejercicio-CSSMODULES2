import style from './cards.module.css'

const Cards = ({text1, text2, src, alt, color}) => {
    return (
    
        <div className={`${style.card} ${style.color}`}>
            <h2 className={`${style.h2}`}>{text1}</h2>
            <p className={`${style.p}`}>{text2}</p>
            <img className={`${style.img}`} src={src} alt={alt} />
        </div>
    
    )
}

export default Cards;