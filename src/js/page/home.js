import Helmet from 'react-helmet';
import React, { Component } from 'react';
import arrowTop from '../../images/up-arrow.svg';
import Pagination from '@material-ui/lab/Pagination';


class Home extends Component {

    constructor() {
        super();
        //set the initial state
        this.state = { page: 1 };
    }

    render() {

        const handleChange = (event, value) => {
            backTop();
            this.setState({count:value});
        };
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const search = urlParams.get('search');


        if(search) {
            var req_search = new XMLHttpRequest();
            req_search.open("GET", 'https://api.themoviedb.org/3/search/movie?api_key=fe65f8e840e15d06c5c00bf13084da74&language=en-US&query=' + search + '&page=' + this.state.count + '&include_adult=false',false);
            req_search.send(null);
            var movies = JSON.parse(req_search.responseText);
        } else {
            var req = new XMLHttpRequest();
            req.open("GET", 'https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=' + this.state.count,false);
            req.send(null);
            var movies = JSON.parse(req.responseText);
        }
        console.log(movies);
        if(movies.results.length > 0) {
            return ( 
                <div className="home">
                    <Helmet title="Cinematique - Home" />
                    {
                        Object.entries(movies).map(function(value, index) {
                            return (
                                Object.entries(value[1]).map(function(value, index){
                                    var req = new XMLHttpRequest();
                                    req.open("GET", 'https://api.themoviedb.org/3/movie/' + value[1].id + '?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1',false);
                                    req.send(null);
                                    var movie = JSON.parse(req.responseText);

                                    var req_trailer = new XMLHttpRequest();
                                    req_trailer.open("GET", 'https://api.themoviedb.org/3/movie/' + value[1].id + '/videos?api_key=fe65f8e840e15d06c5c00bf13084da74&language=en-US',false);
                                    req_trailer.send(null);
                                    var trailer = JSON.parse(req_trailer.responseText);
                                    console.log(trailer);
                                    

                                    if(value[1].id) {
                                        var date = movie.release_date.split('-');
                                    }

                                    if(movie.overview === "") {
                                        movie.overview = 'Sem sinopse'
                                    }
                                    
                                    var req2 = new XMLHttpRequest();
                                    req2.open("GET", 'https://api.themoviedb.org/3/movie/' + value[1].id + '/credits?api_key=fe65f8e840e15d06c5c00bf13084da74',false);
                                    req2.send(null);
                                    var creditos = JSON.parse(req2.responseText);

                                    if(value[1].id) {
                                        return (
                                            <div className="home-movies">
                                                <div className="home-movies__infos">
                                                    <img src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path} alt={movie.original_title} />
                                                    <div className="home-movies__infos--phrase">
                                                        <span className="home-movies__infos--title">Título Original</span>
                                                        <span className="home-movies__infos--name">{movie.original_title}</span>
                                                        <span className="home-movies__infos--title">Gêneros</span>
                                                        <span className="home-movies__infos--name">
                                                            {movie.genres && movie.genres.map((value, index) => {
                                                                return value.name + ' '
                                                            })}
                                                        </span>
                                                        <span className="home-movies__infos--title">Duração</span>
                                                        <span className="home-movies__infos--name">{movie.runtime + ' minutos'}</span>
                                                        <span className="home-movies__infos--title">Elenco</span>
                                                        <span className="home-movies__infos--name">
                                                            {creditos.cast && creditos.cast.slice(0, 3).map((value, index) => {
                                                                return value.name + ' '
                                                            })}
                                                        </span>
                                                        <span className="home-movies__infos--title">Direção</span>
                                                        <span className="home-movies__infos--name">
                                                            {creditos.crew && creditos.crew.map((value, index) => {
                                                                if (value.job === 'Director') {
                                                                    return value.name + ' '
                                                                }
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="home-movies__plot">
                                                    <h2 className="home-movies__plot--title">{movie.title}</h2>
                                                    <hr></hr>
                                                    <span className="home-movies__plot--release">Lançamento: {date[2] + '/' + date[1] + '/' + date[0]}</span>
                                                    <p className="home-movies__plot--sinopse">
                                                        {movie.overview}
                                                    </p>
                                                    <div className="home-movies__plot--media">
                                                        <a href={'https://www.imdb.com/title/' + movie.imdb_id}>
                                                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png' alt='imdb' />
                                                        </a>
                                                        <a href={movie.homepage}>
                                                            <img src='data:image/png;base64,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' alt={movie.name} />
                                                        </a>
                                                    </div>
                                                    <div className="home-movies__plot--trailer">
                                                        {trailer && Object.entries(trailer.results).slice(0, 1).map((value, index) => {
                                                            console.log(value[1]);
                                                            return <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + value[1].key} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                           
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            )
                        })
                    }
                    <button className="home-top" onClick={backTop}>
                        <img src={arrowTop} alt="back-to-top" />
                    </button>
                    <Pagination count={movies.total_pages} size="large" color="primary" onChange={handleChange} className="paginationDesktop"/>
                    <Pagination count={movies.total_pages} size="small" color="primary" onChange={handleChange} className="paginationMobile"/>
                </div>
            );
        } else {
            return(
                <h1 className="emptyResult">
                    Não encontramos nenhum resultado.
                </h1>
            )
        }
    }
}

function backTop () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

export default Home;