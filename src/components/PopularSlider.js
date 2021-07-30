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
      `https://api.themoviedb.org/3/discover/${this.props.infos}?api_key=1dbc566a4812e099606bf66f83159d6e&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );
    this.setState({ contentData: [...responsive.data.results] });
  };

  render() {
    console.log(this.props);
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className={style.sliderContainer}>
        <Slider {...settings}>
          {this.state.contentData.map((content) => {
            return (
              <div>
                <Link
                  to={`/${this.props.infos}/${content.id}/contentDescription`}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${content.poster_path}`}
                    alt={content.original_title}
                  />
                </Link>
                <p>{content.original_title}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
