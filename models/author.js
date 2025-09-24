"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Author extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.Article, { foreignKey: "author_id" });
		}
	}
	Author.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Author",
		}
	);
	return Author;
};
