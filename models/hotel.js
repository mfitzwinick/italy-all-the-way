module.exports = function(sequelize, DataTypes) {
    var hotel = sequelize.define("hotel", {
        hotelId:{
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
          location:{
              type:DataTypes.STRING
          }
    });
    return hotel;
  };
  