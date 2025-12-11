module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('department', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Department;
};
