
import { useState, useEffect } from "react"
import films from "../assets/films"

const MyMain = () => {

    // useState lista di articoli
    // const [filmList, setFilmList] = useState(films)  // state1
    const [addedFilms, setAddedFilms] = useState(films)    // state2

    // useState per l'invio del nuovo articolo
    const [userFilm, setUserFilm] = useState('');   // state3
    const [userGenre, setUserGenre] = useState(''); // state4

    // controllo dell'azione di submit del form
    const formSubmit = e => {
        // prevenzione della ricarica dopo il submit
        e.preventDefault()

        // if per prender i casi in cui non venga inserita una stringa vuota
        if (userFilm.trim() === '') {
            alert('Inserisci un titolo valido')

        } else {
            // aggiunta del nuovo articolo all'array di articoli
            setFilteredFilmList([...filteredFilmList, { genre: userGenre, title: userFilm }])
            setAddedFilms([...filteredFilmList, { genre: userGenre, title: userFilm }])

            // resetto il campo dell'input
            setUserFilm('')

        }
    }

    // controllo filtro
    const [filteredFilmList, setFilteredFilmList] = useState(films)  // state5
    const [userFilter, setUserFilter] = useState('')    // state6

    useEffect(() => {
        if (userFilter !== '') {
            // const completeMovieList = [filteredFilmList, addedFilms]
            const selectedMovies = addedFilms.filter(m => m.genre === userFilter);
            setFilteredFilmList(selectedMovies)
        } else {
            setFilteredFilmList(addedFilms)
        }
    }, [userFilter])
    return (
        <main>
            <section>

                {/* FORM ADD */}
                <form action="submit" onSubmit={formSubmit} required>
                    <input type="text"
                        value={userFilm}
                        placeholder='inserisci il titolo del nuovo film'
                        onChange={e => { setUserFilm(e.target.value) }}
                        required
                    />
                    {/* selezione genere */}
                    <select name="genere" onChange={e => { setUserGenre(e.target.value) }}>
                        {/* default option */}
                        <option value="">--</option>
                        {/* mapped options sulla base dell'array dato */}
                        {films.map((film, index) => (
                            <option key={index} value={film.genre}> {film.genre} </option>
                        ))}
                    </select>
                    <button type="submit" >Aggiungi</button>
                </form>

                {/* FILTER GENRE */}
                <select name="filter" onChange={e => { setUserFilter(e.target.value) }}>
                    <option value="">--</option>
                    {films.map((film, index) => (
                        <option key={index} value={film.genre}> {film.genre} </option>
                    ))}
                </select>

                {/* LIST HTML */}
                <ul>
                    {filteredFilmList.map((film, index) => (
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