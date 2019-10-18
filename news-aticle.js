class NewsArticle extend HTMLElement {
set article(article){
this.innerHTML = '
<a href="${article.url}">
<h2>${article.title}</h2>
<img src="${article.urlToimage || ''}">
<p>${article.description || ''}</p>
</a>';
}
}

customElements.define('news-article',NewsArticle');
