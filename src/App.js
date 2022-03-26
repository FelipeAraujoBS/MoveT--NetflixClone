import React, { useEffect, useState } from 'react';
import reqTMDB from './reqTMDB';
import MovieRow from './components/MovieRow';
import "./App.css"
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
import loading from "./components/loading.gif"

export default () => {

  const [movielist, setMovielist] = useState([]);
  const [featuredData, setFeaturedData] = useState();
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await reqTMDB.getHomelist();
      setMovielist(list);

      //pegando feature
      let originals = list.filter(i=>i.slug == "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await reqTMDB.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() =>{
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

    <Header black={blackHeader} />
    
      {featuredData && 
        <FeatureMovie item={featuredData}/>
      }

      <section className="lists">
      {movielist.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items} />
      ))}  
      </section>

      <footer>
        Feito com intuito de mostrar meu conhecimento em React, CSS e JavaScript. <br/>
        Contei com a ajuda, por forma de videos tutoriais, da B7Web no Youtube. <br/>
        <br/>
        Direito de imagem para Netflix <br/>
        Dados dos filmes/series pegos do site Themoviedb.org
      </footer>


      {movielist.length <= 0 &&
      <div className="loading">
        <img src={loading} alt="Carregando"/>
      </div>
      }
    </div>
  );
}

