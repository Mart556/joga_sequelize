const { Article, Author, Tags } = require("../models");

const getAllArticles = async (req, res) => {
	try {
		const articles = await Article.findAll();
		res.json(articles);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

const getArticleBySlug = async (req, res) => {
	const { slug } = req.params;

	try {
		const article = await Article.findOne({
			where: { slug },
			include: [Author, Tags],
		});
		if (!article) {
			return res.status(404).json({ error: "Article not found" });
		}
		res.json(article);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
	getAllArticles,
	getArticleBySlug,
};
