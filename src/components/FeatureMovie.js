import React from "react";
import "./FeatureMovie.css";

export default({item}) => {

let descriptionB = "";
let description = [];
 description.push(item.overview)
 if (description[0].length < 400){
   descriptionB = true
 } else{
   descriptionB = false
 }

 

 let firstDate = new Date(item.first_air_date);
 let genres = [];
  for (let i in item.genres){
    genres.push( item.genres[i].name )
  }

    return (
      <section className="featured" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}>
          <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">
                  {item.original_name}
                </div>
                <div className="featured--infos">
                    <div className="featured--points">{item.vote_average} pontos</div>
                    <div className="featured--year">{firstDate.getFullYear()}</div>
                    <div className="featured--seasons">{item.number_of_seasons} temporada
                      {item.number_of_seasons !== 1 ? "s" : ""}{item.number_of_seasons == 0 ? "" : ""}</div>
                </div>
                <div className="featured--description">{descriptionB ? `${description}` : ``}</div>
                <div className="featured--buttons">
                    <a className="watch" href={`/watch/${item.id}`}>➤ Assistir</a>
                    <a className="add" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                </div>
                <div className="featured--genres"><strong>Generos: {genres.join(", ")}</strong></div>
            </div>
          </div>
      </section>
    ) 
}