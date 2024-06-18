
export default function Card(props){

    return(
        <a href={`/${props.href}`}>
            <article className={`Materia ${props.nombreMateria} ${props.dificultad}`}>
                <div>
                {props.svgIcon}
                    {props.materias ? (
                        <ul>
                            <li className='Materias'>{props.materias}</li>
                        </ul>
                    ) : (
                        <ul>
                            <li className={`${props.classdificultad}`}>{props.dificultad}</li>
                            <li className='Lecciones'>{props.lecciones}</li>
                        </ul>
                    )}
                </div>
                <h4 className=''>{props.nombreMateria}</h4>
            </article>
        </a>
    )
}