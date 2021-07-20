export const getGamerGenders = (genre, array) => {
  let newArray = array.map((gamer) => gamer.name === genre);
  return newArray;
};

export default getGamerGenders;
