import React from "react";

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push("/");
		}
		// console.log(history);
	}
	render() {
		const { location } = this.props;
		if (location.state) {
			return (
				<div className="movie_detail">
					<span>{location.state.year}</span>
					<span>{location.state.title}</span>
					<span>{location.state.summary}</span>
					<span>{location.state.poster}</span>
					<span>{location.state.geners}</span>
				</div>
			)
		} else {
			return null;
		}
	}
}

export default Detail;