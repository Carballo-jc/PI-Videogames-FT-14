export const getGamerGenders = (genre, array) => {

  let newArray =  array.filter((gamer) => 
  gamer.genres?.some(gender => gender === genre));
  return newArray;
};

export default getGamerGenders;
