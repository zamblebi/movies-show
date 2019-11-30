import React from 'react';
import axios from 'axios';

class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ab0fbb770a18006d30d1ee79ef50a5b5')
        .then(res => {
            const movies = res.data;
            this.setState({movies : movies.results})
        })

    }

    componentDidUpdate(){
        var searchMoivies = this.props.search ;
        axios.get('https://api.themoviedb.org/3/search/movie?query='+ searchMoivies +'&api_key=ab0fbb770a18006d30d1ee79ef50a5b5&language=en-US&page=1&include_adult=false')
        .then(res => {
            const movies = res.data;
            this.setState({movies : movies.results})
        })

    }



    render(){
        return (
            <div id="movies">
                <ul className="movies-list">
                    { this.state.movies.map(movie => ( 
                    <li key={movie.id}>
                        <img src={'http://image.tmdb.org/t/p/w342/' + movie.backdrop_path} alt="poster_path"/>
                        <h2>{movie.original_title}</h2>
                        <p className="overview-movie">{movie.overview}</p>
                        <em>Date de sortie : {movie.release_date}</em>
                    </li> ))}
                </ul>
            </div>
        )
    }
}


export default Movie;