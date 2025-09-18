"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Article extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Article.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			name: { type: DataTypes.STRING, allowNull: false },
			slug: { type: DataTypes.STRING, allowNull: false },
			image: { type: DataTypes.TEXT, allowNull: false },
			body: { type: DataTypes.TEXT, allowNull: false },
			published: { type: DataTypes.DATE, allowNull: false },
			author_id: { type: DataTypes.INTEGER },
		},
		{
			sequelize,
			modelName: "Article",
		}
	);
	return Article;
};
