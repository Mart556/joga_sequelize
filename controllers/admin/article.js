const { Article, Tags } = require("../../models");

const createNewArticle = async (req, res) => {
	try {
		const { name, slug, author_id, image, body, tags } = req.body;
		const newArticle = await Article.create({
			name,
			slug,
			author_id,
			image,
			body,
			published: new Date(),
		});
		if (tags && tags.length > 0) {
			const tagInstances = await Tags.findAll({
				where: {
					id: tags,
				},
			});
			await newArticle.addTags(tagInstances);
		}
		res.status(201).json(newArticle);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

const updateArticle = async (req, res) => {
	const { id } = req.params;
	const { name, slug, author_id, image, body, tags } = req.body;
	try {
		const article = await Article.findByPk(id);
		if (!article) {
			return res.status(404).json({ error: "Article not found" });
		}
		await article.update({
			name,
			slug,
			author_id,
			image,
			body,
			published: new Date(),
		});
		if (tags) {
			const tagInstances = await Tags.findAll({
				where: {
					id: tags,
				},
			});
			await article.setTags(tagInstances);
		}
		res.json(article);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

const deleteArticle = async (req, res) => {
	const { id } = req.params;
	try {
		const article = await Article.findByPk(id);
		if (!article) {
			return res.status(404).json({ error: "Article not found" });
		}
		await article.destroy();
		res.status(204).send();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
	createNewArticle,
	updateArticle,
	deleteArticle,
};
