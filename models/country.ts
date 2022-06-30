import { Sequelize, Model } from 'sequelize';
import { iCatalogueAttributes, iCatalogueInstance } from '../src/interfaces/iCatalogue'

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Country extends Model<iCatalogueAttributes, iCatalogueInstance> implements iCatalogueAttributes{
    id!: number;
    description!: string;
    status!: boolean

    static associate = (models: any) => {
      // define association here
    }
  }
  Country.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Country',
    freezeTableName: true,
    tableName: 'country',
    underscored: true
  });
  return Country;
};
