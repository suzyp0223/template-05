const NewsList = () => {
  const container = document.createElement('div');
  container.className = 'news-list-container';

  const renderNews = (newsItems) => {
    container.innerHTML = '';
    newsItems.forEach(item => {
      const article = document.createElement('article');
      article.className = 'news-list';

      article.innerHTML =/*HTML */ `
        <section class="news-item">
          <div class="thumbnail">
            <a href="${item.url}" target="_blank" rel="noopener noreferrer">
              <img src="${item.img}" alt="thumbnail" />
            </a>
          </div>
          <div class="contents">
            <h2>
              <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                ${item.title}
              </a>
            </h2>
            <p>${item.description}</p>
          </div>
        </section>
      `;
      container.appendChild(article);
    });
  };

  const fetchNews = async (category = 'all') => {
    const pageSize = 5;
    let page = 1;

    const apiKEY = 'API_KEY';
    // pageSize에 5를 지정하면 5개의 뉴스를 취득한다.
    const apiURL = `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKEY=${apiKEY}`;

    try {
      const response = await axios.get(apiURL);
      const newsItems = response.data.articles.map(article => ({
        title: article.title,
        description: article.description,
        image: article.urlToImage,
        url: article.url,
      }));

      renderNews(newsItems);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    }
  };

  // 초기 데이터 로드
  fetchNews();

  return container;
};
export default NewsList;
