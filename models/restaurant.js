module.exports = function(sequelize, DataTypes) {
    var restaurant = sequelize.define("restaurant", {
        restaurantId:{
            type: DataTypes.STRING
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          image: {
              type: DataTypes.STRING
            },
          rating:{
              type: DataTypes.INTEGER
            },
          url:{
              type: DataTypes.STRING
            },
          category:{
              type:DataTypes.STRING,
              default:  null
            },
          price:{
              type:DataTypes.STRING
          },
          location:{
            type:DataTypes.STRING
        }
          
    });
    return restaurant;
  };
  