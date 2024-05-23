const businessBtn = document.getElementById('businessBtn'),
educationBtn = document.getElementById('educationBtn'),
entertainmentBtn = document.getElementById('entertainmentBtn'),
technologyBtn = document.getElementById('technologyBtn'),
sportsBtn = document.getElementById('sportsBtn'),
politicsBtn = document.getElementById('politicsBtn'),
searchBtn = document.getElementById('searchBtn'),
newsQuery = document.getElementById('newsQuery');

const API_KEY = 'pub_4461207b1f71381099421f69294d0bc135c55',
BUSINESS_API = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=business&country=in&language=en`,
EDUCATION_API = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=education&country=in&language=en`,
TECHNOLOGY_API =`https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=technology&country=in&language=en` ,
SPORTS_API = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=sports&country=in&language=en`,
ENTERTAINMENT_QUERY = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=entertainment&country=in&language=en`,
POLITICS_API =`https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=poilitics&country=in&language=en` ;


businessBtn.addEventListener('click',function(){
    fetchingBusinessNews();
});
educationBtn.addEventListener('click',function(){
    fetchingEducationNews();
});
entertainmentBtn.addEventListener('click',function(){
    fetchingEntertainmentNews();
});
technologyBtn.addEventListener('click',function(){
    fetchingTechnologyNews();
});
sportsBtn.addEventListener('click',function(){
    fetchingSportsNews();
});
politicsBtn.addEventListener('click',function(){
    fetchingPoliticsNews();

});
searchBtn.addEventListener('click',function(){
    fetchingSearchNews();
});

newsDataArr = [];

const fetchingBusinessNews = async () => {
       const response = await fetch(BUSINESS_API );
        const myJSON = await response.json();
        newsDataArr = myJSON.results;
        displayNews();
}

const fetchingEducationNews = async () => {
        const response = await fetch(EDUCATION_API);
        const myJSON = await response.json();
        newsDataArr = myJSON.results;
        displayNews();
}

const fetchingTechnologyNews = async () => {
        const response = await fetch(TECHNOLOGY_API);
        const myJSON = await response.json();
        newsDataArr = myJSON.results;
        displayNews();
}

const fetchingSportsNews = async () => {
        const response = await fetch(SPORTS_API);
        const myJSON = await response.json();
        newsDataArr = myJSON.results;
        displayNews();
}

const fetchingPoliticsNews = async () => {
        const response = await fetch(POLITICS_API);
        const myJSON = await response.json();
        newsDataArr = myJSON.results;
        displayNews();
}

const fetchingEntertainmentNews = async () => {
        const response = await fetch(ENTERTAINMENT_QUERY);
        const myJSON = await response.json();
        newsDataArr = myJSON.results;
        displayNews();
}

const fetchingSearchNews = async () => {
    const query = newsQuery.value;
    const SEARCH_QUERY = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=&country=in&language=en`;
        const response = await fetch(SEARCH_QUERY);
        const myJSON = await response.json();
        newsDataArr = myJSON.results;
        displayNews();
}


function displayNews(){
    newsdetails.innerHTML = '';
    if(newsDataArr.length === 0){
        newsdetails.innerHTML = "<h1>No data found</h5>";
        return;
    }
    newsDataArr.forEach(news => {
        var col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 m-4 card ";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.className = "card-img-top"
        image.src = news.image_url;

        var cardBody = document.createElement('div');
        cardBody.className = "card-body";

        var newsHeading = document.createElement('h6');
        newsHeading.className = 'card-title';
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.innerHTML = news.pubDate;
        dateHeading.className = "text-primary";

        var description = document.createElement('h7');
        description.innerHTML = news.description;
        description.className = "card-text";

        var link = document.createElement('a');
        // link.className = "btn btn-primary";
        link.setAttribute("target","_blank");
        link.href = news.source_url;
        link.innerHTML = "Read More";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}