const router = require("express").Router();
const { getAllArticles, getArticleBySlug } = require("../controllers/article");

router.get("/:slug", getArticleBySlug);
router.get("/", getAllArticles);

const {
	createNewArticle,
	updateArticle,
	deleteArticle,
} = require("../controllers/admin/article");

router.post("/admin/", createNewArticle);
router.put("/admin/:id", updateArticle);
router.delete("/admin/:id", deleteArticle);

module.exports = router;
