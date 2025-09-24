"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class ArticleTags extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Article, { foreignKey: "article_id" });
			this.belongsTo(models.Tags, { foreignKey: "tag_id" });
		}
	}
	ArticleTags.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			article_id: { type: DataTypes.INTEGER, allowNull: false },
			tag_id: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: "ArticleTags",
		}
	);
	return ArticleTags;
};
