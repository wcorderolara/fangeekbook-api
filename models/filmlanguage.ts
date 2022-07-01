import { Sequelize, Model } from 'sequelize';
import { iCatalogueAttributes, iCatalogueInstance } from '../src/interfaces/iCatalogue'

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class FilmLanguage extends Model<iCatalogueAttributes, iCatalogueInstance> implements iCatalogueAttributes{
    id!: number;
    description!: string;
    status!: boolean

    static associate = (models: any) => {
      FilmLanguage.hasMany(models.Film, {foreignKey: {name:'original_language', allowNull: false}})
    }
  }
  FilmLanguage.init({
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
    modelName: 'FilmLanguage',
    freezeTableName: true,
    tableName: 'film_language',
    underscored: true
  });
  return FilmLanguage;
};
