import {Sequelize, Model} from 'sequelize';

export interface iFilmAttributes {
  id?: number;
  category?: number;
  genreType?: number;
  originalLanguage?: number;
  recordingCountry?: number;
  ratingId?: number;
  distributorId?: number;
  runtime?: number;
  budget?: number;
  sinopsis?: string;
  boxOffice?: number;
  rate?: number;
  trailerUrl?: string;
  releaseDate?: Date;
  status?: boolean
}

export interface iFilmInstance {
  id?: number;
  category?: number;
  genreType?: number;
  originalLanguage?: number;
  recordingCountry?: number;
  ratingId?: number;
  distributorId?: number;
  runtime?: number;
  budget?: number;
  sinopsis?: string;
  boxOffice?: number;
  rate?: number;
  trailerUrl?: string;
  releaseDate?: Date;
  status?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Film extends Model<iFilmAttributes, iFilmInstance> implements iFilmAttributes{
    id!: number;
    category!: number;
    genreType!: number;
    originalLanguage!: number;
    recordingCountry!: number;
    ratingId!: number;
    distributorId!: number;
    runtime!: number;
    budget!: number;
    sinopsis!: string;
    boxOffice!: number;
    rate!: number;
    trailerUrl!: string;
    releaseDate!: Date;
    status!: boolean

    static associate = (models: any) => {
      Film.belongsTo(models.FilmGenreType, {foreignKey: {name:'genre_type', allowNull: false}});
      Film.belongsTo(models.FilmCategory, {foreignKey: {name:'film_category', allowNull: false}});
      Film.belongsTo(models.Country, {foreignKey: {name:'recording_country', allowNull: false}});
      Film.belongsTo(models.FilmLanguage, {foreignKey: {name:'original_language', allowNull: false}});
      Film.belongsTo(models.FilmRating, {foreignKey: {name:'rating_id', allowNull: false}});
      Film.belongsTo(models.Distributor, {foreignKey: {name: 'distributor_id', allowNull: false}});

      Film.belongsToMany(models.FilmFormatType, {through: 'FilmFormat'})
    }
  }
  Film.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    category: {type: DataTypes.INTEGER, field: 'film_category', allowNull: false},
    genreType: {type: DataTypes.INTEGER, field: 'genre_type', allowNull: false},
    originalLanguage: {type: DataTypes.INTEGER, field: 'original_language', allowNull: false},
    recordingCountry: {type: DataTypes.INTEGER, field: 'recording_country', allowNull: false},
    ratingId: {type: DataTypes.INTEGER, field: 'rating_id', allowNull: false},
    distributorId: {type: DataTypes.INTEGER, field: 'distributor_id', allowNull: false},
    runtime: {type: DataTypes.INTEGER, allowNull: true},
    budget: {type: DataTypes.DECIMAL(18,2), allowNull: true},
    sinopsis: {type: DataTypes.TEXT, allowNull: true},
    boxOffice: {type: DataTypes.DECIMAL(18,2), allowNull: true},
    rate: {type: DataTypes.INTEGER, allowNull: true},
    trailerUrl: {type: DataTypes.STRING(120), allowNull: true},
    releaseDate: {type: DataTypes.DATEONLY, allowNull: true},
    status: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: true}
  }, {
    sequelize,
    modelName: 'Film',
    freezeTableName: true,
    tableName: 'film',
    underscored: true
  });
  return Film;
};