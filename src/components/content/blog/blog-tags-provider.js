const BLOG_TAGS = {
  de: [
    {
      id: 'development',
      name: 'Entwicklung'
    },
    {
      id: 'technology',
      name: 'Technologie'
    },
    {
      id: 'agile',
      name: 'Agilität'
    },
    {
      id: 'design',
      name: 'Design'
    },
    {
      id: 'seo',
      name: 'SEO'
    }
  ]
}

const BlogTagsProvider = function () {

  function getTagNameById(tagId, lang = 'de') {
    const foundTag = BLOG_TAGS[lang].find(tag => tag.id === tagId);
    return foundTag ? foundTag.name : null;
  }

  function getAllTags(lang = 'de') {
    return BLOG_TAGS[lang];
  }

  return {
    getTagNameById,
    getAllTags
  }
}

export default BlogTagsProvider;
