import BlogTagsProvider from "./blog-tags-provider";

const BlogTagsFormatter = function (tags) {
  const blogTagsProvider = BlogTagsProvider();

  function getFormattedTags(lang = 'de') {
    const nullValues = t => t;
    const tagList = tags.map(tagId => blogTagsProvider.getTagNameById(tagId, lang));
    const cleanedTagList = tagList.filter(nullValues);
    return cleanedTagList.join(', ');
  }

  return {
    getFormattedTags
  }
}

export default BlogTagsFormatter;
