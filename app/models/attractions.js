module.exports = function(sequelize, DataTypes) {
    var attraction = sequelize.define("Post", {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            auto_increment: true
        },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    return attraction;
  };
  