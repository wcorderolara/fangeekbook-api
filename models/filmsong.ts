import { Sequelize, Model } from 'sequelize';

export interface iFilmSongAttributes{
  id: number;
  songName: string;
  songPerformer: string;
  songDuration: string;
  songAlbum: string;
  songVideo: string;
  status?: boolean;
}

export interface iFilmSongInstance{
  id: number;
  songName: string;
  songPerformer: string;
  songDuration: string;
  songAlbum: string;
  songVideo: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class FilmSong extends Model<iFilmSongAttributes, iFilmSongInstance> implements iFilmSongAttributes{
    id!: number;
    songName!: string;
    songPerformer!: string;
    songDuration!: string;
    songAlbum!: string;
    songVideo!: string;
    status!: boolean;

    static associate = (models: any) => {
      // define association here
    }
  }
  FilmSong.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    songName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'song_name'
    },
    songPerformer: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'song_performer'
    },
    songDuration: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'song_duration'
    },
    songAlbum: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'song_album'
    },
    songVideo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'song_video'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'FilmSong',
    freezeTableName: true,
    tableName: 'film_song',
    underscored: true
  });
  return FilmSong;
};
