

let search_news = document.querySelector('.search_news')
function getnews(){
  fetch(`https://newsapi.org/v2/everything?q=${search_news.value}&from=2023-09-16&sortBy=publishedAt&apiKey=b9b99664524b4afbae75429048b1fe4c`)
  .then((data) => data.json())
  .then(data => {
    const allnews = document.getElementById('news')
  for(let i=0; i<data.articles.length; i++){
    console.log(data.articles[i])
    allnews.innerHTML += `<div class="card" style="width: 18rem;">
          <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${data.articles[i].title}</h5>
            <p class="card-text">${data.articles[i].title}</p>
            <hr>
            <div class="card-btn">
            <button><i class="fa-regular fa-thumbs-up"></i></button>
            <button><i class="fa-regular fa-comment"></i></button>
            <button><i class="fa-solid fa-share"></i></button>
            </div>
          </div>
        </div> `
  }

})
.catch(err => console.log(err))

}



