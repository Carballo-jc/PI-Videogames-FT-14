export const getGamerGenders = (genre, array) => {
  let newArray = array.filter((gamer) => gamer.genres === genre);
  return newArray;
};

export default getGamerGenders;
