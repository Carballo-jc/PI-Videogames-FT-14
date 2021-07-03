const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    description: { type: DataTypes.TEXT, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    date_release: { type: DataTypes.DATE },
    rating: { type: DataTypes.STRING },
    platforms: { type: DataTypes.STRING, allowNull: false },
  });
  // sequelize.define("gender", {
  //   gameId: { type: DataTypes.INTEGER, unique: true },
  //   name: { type: DataTypes.STRING },
  // });
};
