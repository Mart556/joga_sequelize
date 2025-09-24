const router = require("express").Router();
const { getAllArticles, getArticleBySlug } = require("../controllers/article");

router.get("/:slug", getArticleBySlug);
router.get("/", getAllArticles);

module.exports = router;
