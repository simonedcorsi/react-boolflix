import { GB, IT, JP, ES, FR, RO } from 'country-flag-icons/react/3x2';
import { FaStar, FaRegStar } from 'react-icons/fa';

export function Card({ data, type }) {
    
    const title = type === 'movies' ? data.title : data.name
    const originalTitle = type === 'movies' ? data.original_title : data.original_name

    const renderLanguage = (language) => {
        switch (language) {
            case 'en':
                return <GB title="Great Britain" className="language-flag" />;
            case 'it':
                return <IT title="Italy" className="language-flag" />;
            case 'ja':
                return <JP title="Japan" className="language-flag" />;
             case 'es':
                return <ES title="Spain" className="language-flag" />;
             case 'fr':
                return <FR title="France" className="language-flag" />;
            case 'ro':
                return <RO title="Romania" className="language-flag" />;
            default:
                return <span>{language}</span>;
        }
    };

    const renderVote = (vote) => {
        const rating = Math.ceil(vote / 2)
        const stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <FaStar key={i} className='star filled' />
                ) : (
                    <FaRegStar key={i} className='star' />
                )
            )
        }
        return stars
    };

    return (
        <>
            <li className='card'>
                <img
                    src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
                    alt={title}
                    className='poster'
                />
                <div className='card-content'>
                    <h3>{title}</h3>
                    <p>
                        Original: {originalTitle}
                    </p>
                    <p>
                        lingua: { renderLanguage( data.original_language ) }
                    </p>
                    <p>
                        Voto: <span className='stars'>{ renderVote( data.vote_average ) }</span>
                    </p>
                </div>
            </li>
        </>
    )
}