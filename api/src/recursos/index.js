const getGamerAll = () => {
  const url = `${URL_BASE}games?${API_KEY}&page=${page}`;
  const videogames = axios.get(url).then((result) =>
    result.data.results.map((gamer) => {
      const { id, name, background_image, released, rating, platforms } = gamer;
      return {
        id: "API_ID:" + id,
        name,
        background_image,
        released,
        rating,
        platforms: platforms.map((consola) => consola.platform.name),
      };
    })
  );
  return videogames;
};
