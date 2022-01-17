import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import { MoviePage } from 'types/movie';
import './styles.css'

type Props = {

    page: MoviePage;
    onChange: Function;
}


function Pagination({ page, onChange }: Props) {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" onClick={() => onChange(page.number - 1)}
                    disabled={page.first} >
                    <Arrow />
                </button>
                <p>{`${page.number} de ${page.totalPages}`}</p>
                <button className="dsmovie-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)} >
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    )

}

export default Pagination;