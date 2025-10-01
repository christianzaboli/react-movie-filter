
import { useState, useEffect } from "react"
import films from "../assets/films"

const MyMain = () => {

    // useState lista di articoli
    const [filmList, setFilmList] = useState(films)

    // useState per l'invio del nuovo articolo
    const [userFilm, setUserFilm] = useState('');
    const [userGenre, setUserGenre] = useState('');

    // controllo dell'azione di submit del form
    const formSubmit = e => {
        // prevenzione della ricarica dopo il submit
        e.preventDefault()

        // if per prender i casi in cui non venga inserita una stringa vuota
        if (userFilm.trim() === '') {
            alert('Inserisci un titolo valido')
        } else {

            // aggiunta del nuovo articolo all'array di articoli
            setFilmList([...filmList, { genre: userGenre, title: userFilm }])
            // setTitleId(TitleId + 1)

            // resetto il campo dell'input
            setUserFilm('')
            setUserGenre('')
        }
    }

    return (
        <main>
            <section>

                <form action="submit" onSubmit={formSubmit} required>
                    <input type="text"
                        value={userFilm}
                        placeholder='inserisci il titolo del nuovo film'
                        onChange={e => { setUserFilm(e.target.value) }}
                        required
                    />
                    <select name="Genere" onChange={e => { setUserGenre(e.target.value) }}>
                        {films.map((film, index) => (
                            <option key={index} value={film.genre}> {film.genre} </option>
                        ))}
                    </select>
                    <button type="submit" >aaaa</button>
                </form>
                <ul>
                    {filmList.map((film, index) => (
                        <li key={index}>
                            <h3>{film.title}</h3>
                            <p>{film.genre}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default MyMain