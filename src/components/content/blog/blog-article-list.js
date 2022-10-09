const BlogArticleList = function (blogArticles) {

  function compareByDateDesc(article1, article2) {
    const article1Date = new Date(article1.frontmatter.date);
    const article2Date = new Date(article2.frontmatter.date);

    if (article1Date > article2Date) {
      return -1;
    } else if (article1Date < article2Date) {
      return 1;
    } else {
      return 0;
    }
  }

  function getAllArticlesOrderByDateDesc() {
    return [...blogArticles].sort(compareByDateDesc);
  }

  function getLastArticles(articlesCount) {
    return getAllArticlesOrderByDateDesc().slice(0, articlesCount);
  }

  return {
    getAllArticlesOrderByDateDesc,
    getLastArticles
  }
};

export default BlogArticleList;
