import { Sequelize, Model } from 'sequelize';
import { iCatalogueAttributes, iCatalogueInstance } from '../src/interfaces/iCatalogue'

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class PerformanceType extends Model<iCatalogueAttributes, iCatalogueInstance> implements iCatalogueAttributes{
    id!: number;
    description!: string;
    status!: boolean

    static associate = (models: any) => {
      // define association here
    }
  }
  PerformanceType.init({
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
    modelName: 'PerformanceType',
    freezeTableName: true,
    tableName: 'performance_type',
    underscored: true
  });
  return PerformanceType;
};
