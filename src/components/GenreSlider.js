import React, { Component } from "react";
import Slider from "react-slick";
import style from "../assets/styles/PopularSlider.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default class SimpleSlider extends Component {
  state = {
    contentData: [],
  };
  componentDidMount = async () => {
    const responsive = await axios.get(
      `https://api.themoviedb.org/3/discover/${this.props.contentType}?api_key=1dbc566a4812e099606bf66f83159d6e&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.genreId}&with_watch_monetization_types=flatrate`
    );
    this.setState({ contentData: [...responsive.data.results] });
  };

  render() {
    console.log(this.props);
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
    };
    return (
      <div className={style.sliderContainer}>
        <Slider {...settings}>
          {this.state.contentData.map((content) => {
            return (
              <div>
                <Link
                  to={`/${this.props.contentType}/${content.id}/contentDescription`}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${content.poster_path}`}
                    alt={content.original_title}
                  />
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
