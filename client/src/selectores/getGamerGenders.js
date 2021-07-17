export const getGamerGenders = (genre, array) => {
  let newArray = array.filter((gamer) =>
    gamer.genres.some((g) => g.slug === genre)
  );
  return newArray;
};

export default getGamerGenders;
