export const getMoviesOrder = (order, array) => {
  switch (order) {
    case "A-Z":
      return array.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
    case "Z-A":
      return array.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      case "ALL":
        return array;

    default:
      return array;
  }
};
export default getMoviesOrder;
