module.exports = function(sequelize, DataTypes) {
    var recipe = sequelize.define("recipe", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      recipeId:{
        type: DataTypes.INTEGER
      }
    });
    return recipe;
  };
  