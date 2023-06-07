import style from './tittle.module.css'

const Tittle = ({text1, text2, text3}) => {
    return(
        <div className={`${style.container}`}>
            <h1 className={`${style.h1}`}>{text1}</h1>
            <h2 className={`${style.h2}`}>{text2}</h2>
            <p className={`${style.p}`}>{text3}</p>
        </div>
    )
}

export default Tittle;