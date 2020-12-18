module.exports = function(sequelize, DataTypes) {
    var contact = sequelize.define("contact", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
              }
            },
        email:{
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
          message: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }
          
        
    });
    return contact;
  };
  