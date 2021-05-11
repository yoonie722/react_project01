import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css"
class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};

	getMovies = async() => { //싱크할때까지 기다려 달라 , await : 무엇을 기다릴까?
		const {data : {data : {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=like_count");
		this.setState({movies, isLoading: false}); //이제 가져온 데이터를 state의 movies에 넣어야 한다.
	}
	componentDidMount() {
		this.getMovies();
	}

	render () {
		const { isLoading, movies } = this.state;
		return (
			<>
				<section className="container">
					{isLoading ? (
						<div className="loader">
							<span className="loader_text">"로딩중..."</span>
						</div>
					): (	
						<div className="movies_container">
							{movies.map((movie) => {
								return (
									<Movie
										key={movie.id}
										id={movie.id}
										year={movie.year}
										title={movie.title}
										summary={movie.summary}
										poster={movie.medium_cover_image}
										genres={movie.genres}
									/>
								);
							})}
							;
						</div>
					)}
				</section>
			</>
		);
	}
}

export default App;
