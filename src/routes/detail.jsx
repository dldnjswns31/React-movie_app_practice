import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(detail);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{detail.title_long}</h1>
          <img src={detail.medium_cover_image} alt={detail.title} />
          <p>{detail.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
