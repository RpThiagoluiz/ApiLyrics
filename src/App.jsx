import React, { useEffect, useState } from "react";
import Project from "./Components/Project";

//Component
import Spinner from "./Components/LoadingSpinner";

//styles
import {
  Button,
  Content,
  Input,
  LetterMusic,
  Error404,
  ContentInputs,
} from "./styles/App";

//img
import ImgError404 from "./img/error.svg";

const urlLyrics = {
  url: "https://api.lyrics.ovh/v1/",
};

const App = () => {
  const [musicArtist, setMusicArtist] = useState("");
  const [musicTitle, setMusicTitle] = useState("");
  const [paraph, setParaph] = useState("");
  const [loading, setLoading] = useState(false);
  const [error404, setError404] = useState("");

  //useEffect
  useEffect(() => {}, []);

  //Async Function
  // const call = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const data = await fetch(`${urlLyrics.url}/${musicArtist}/${musicTitle}`);
  //     const json = await data.json();
  //     console.log(json);
  //     setParaph(json);
  //     setLoading(false);
  //     setMusicArtist("");
  //     setMusicTitle("");
  //   } catch (er) {
  //     console.log(er);
  //   }
  // };
  const ApiResponse = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(async function call() {
      try {
        const data = await fetch(
          `${urlLyrics.url}/${musicArtist}/${musicTitle}`
        );
        const json = await data.json();
        console.log(json);
        setParaph(json);
        setLoading(false);
        setMusicArtist("");
        setMusicTitle("");
      } catch (err) {
        setError404(err.message);
        setLoading(false);
      }
    }, 2000);
  };

  //Error Msg
  const ErrorMensage = () => (
    <Error404>
      <img src={ImgError404} alt="" />
      <p>
        Artista ou musica foram digitados de forma errada. O artista e o nome da
        musica devem começar com letra maiuscula.
      </p>
      <small>Cath(error) - {error404}</small>
    </Error404>
  );

  return (
    <Error404>
      <Project title={"Lirycs,"} link={"https://lyricsovh.docs.apiary.io/"} />
      <Content>
        <ContentInputs>
          <Input
            type="text"
            placeholder="Nome do artista"
            name="name"
            value={musicArtist}
            onChange={(e) => setMusicArtist(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Nome da Musica"
            name="music"
            value={musicTitle}
            onChange={(e) => setMusicTitle(e.target.value)}
          />
        </ContentInputs>
        <Button type="button" onClick={ApiResponse}>
          Procurar
        </Button>

        {loading ? (
          <Spinner />
        ) : (
          <LetterMusic>
            {paraph.lyrics === "" || error404 !== ""
              ? ErrorMensage()
              : paraph.lyrics}
          </LetterMusic>
        )}
      </Content>
    </Error404>
  );
};

export default App;
