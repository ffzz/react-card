import './Card.css'


function Card (props) {
    return (
        <div className="Card">
            <div className="Card__title">{props.title}</div>
            <a className="Card__wrapper"
                href="#"
                target="_blank">
                <img src={props.img} className="Card__img" alt="Men's accessories"/>
                <div className="Card__sub-title">{props.subTitle}</div>
                <div className="Card__description">{props.desc}</div>
            </a>
        </div>
    )   
}

export default Card;