import react, { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const Home = () => {
  const [musicApi, setMusicApi] = useState([]);

  // useEffect(() => {

  //  ;(async () => {
  //   try {
  //     const response = await axios.request(options);
  //     // console.log(response.data);
  //     setMusicApi(response.data.authSources[0].sources)
  //   } catch (error) {
  //     console.error(error);

  //   }
  //  }
  //  )()
  // }, [])

  const getMusic = async () => {
    const options = {
      method: "GET",
      url: "https://spotify81.p.rapidapi.com/top_200_tracks",
      headers: {
        "X-RapidAPI-Key": "8271318248mshd68b2bf0ab4fbe2p157190jsn06c3543f0dc1",
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMusic();
  }, []);

  return (
    <div>
      <div style={{ margin: "30px 250px" }}>
        <h1>Vaishnao</h1>
        {musicApi?.chartEntryData?.map((entry, index) => (
          <div key={index}>
            <img
              src={entry.trackMetadata.displayImageUri}
              alt={entry.trackMetadata.trackName}
              width={200}
            />
            <h3>{entry.trackMetadata.trackName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
