const businessBtn = document.getElementById('businessBtn'),
generalBtn = document.getElementById('generalBtn'),
educationBtn = document.getElementById('educationBtn'),
entertainmentBtn = document.getElementById('entertainmentBtn'),
technologyBtn = document.getElementById('technologyBtn'),
sportsBtn = document.getElementById('sportsBtn'),
politicsBtn = document.getElementById('politicsBtn'),
searchBtn = document.getElementById('searchBtn'),
newsQuery = document.getElementById('newsQuery');

const API_KEY = 'pub_4461207b1f71381099421f69294d0bc135c55',
GENERAL_API = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=news&country=in&language=en`
BUSINESS_API = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=business&country=in&language=en`,
EDUCATION_API = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=education&country=in&language=en`,
TECHNOLOGY_API =`https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=technology&country=in&language=en` ,
SPORTS_API = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=sports&country=in&language=en`,
ENTERTAINMENT_API= `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=entertainment&country=in&language=en`,
POLITICS_API =`https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=poilitics&country=in&language=en` ;

window.addEventListener("load", () => {
    fetchingGeneralNews();
});

generalBtn.addEventListener('click',function(){
    fetchingGeneralNews();
})
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

const fetchingGeneralNews = async () => {
    try {
        const response = await fetch(GENERAL_API);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const myJSON = await response.json();
        console.log(myJSON);
        if (Array.isArray(myJSON.results)) {
            newsDataArr = myJSON.results;
        } else {
            newsDataArr = [];
        }
        displayNews();
    } catch (error) {
        console.error('Error fetching news:', error);
        newsdetails.innerHTML = `<h1>Error fetching news data</h1>`;
    }
}


const fetchingBusinessNews = async () => {
    try {
        const response = await fetch(BUSINESS_API);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const myJSON = await response.json();
        console.log(myJSON);
        if (Array.isArray(myJSON.results)) {
            newsDataArr = myJSON.results;
        } else {
            newsDataArr = [];
        }
        displayNews();
    } catch (error) {
        console.error('Error fetching news:', error);
        newsdetails.innerHTML = `<h1>Error fetching news data</h1>`;
    }
}

const fetchingEducationNews = async () => {
    try {
        const response = await fetch(EDUCATION_API);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const myJSON = await response.json();
        console.log(myJSON);
        if (Array.isArray(myJSON.results)) {
            newsDataArr = myJSON.results;
        } else {
            newsDataArr = [];
        }
        displayNews();
    } catch (error) {
        console.error('Error fetching news:', error);
        newsdetails.innerHTML = `<h1>Error fetching news data</h1>`;
    }
}

const fetchingTechnologyNews = async () => {
    try {
        const response = await fetch(TECHNOLOGY_API);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const myJSON = await response.json();
        console.log(myJSON);
        if (Array.isArray(myJSON.results)) {
            newsDataArr = myJSON.results;
        } else {
            newsDataArr = [];
        }
        displayNews();
    } catch (error) {
        console.error('Error fetching news:', error);
        newsdetails.innerHTML = `<h1>Error fetching news data</h1>`;
    }
}

const fetchingSportsNews = async () => {
    try {
        const response = await fetch(SPORTS_API);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const myJSON = await response.json();
        console.log(myJSON);
        if (Array.isArray(myJSON.results)) {
            newsDataArr = myJSON.results;
        } else {
            newsDataArr = [];
        }
        displayNews();
    } catch (error) {
        console.error('Error fetching news:', error);
        newsdetails.innerHTML = `<h1>Error fetching news data</h1>`;
    }
}

const fetchingPoliticsNews = async () => {
    try {
        const response = await fetch(POLITICS_API );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const myJSON = await response.json();
        console.log(myJSON);
        if (Array.isArray(myJSON.results)) {
            newsDataArr = myJSON.results;
        } else {
            newsDataArr = [];
        }
        displayNews();
    } catch (error) {
        console.error('Error fetching news:', error);
        newsdetails.innerHTML = `<h1>Error fetching news data</h1>`;
    }
}

const fetchingEntertainmentNews = async () => {
    try {
        const response = await fetch(ENTERTAINMENT_API);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const myJSON = await response.json();
        console.log(myJSON);
        if (Array.isArray(myJSON.results)) {
            newsDataArr = myJSON.results;
        } else {
            newsDataArr = [];
        }
        displayNews();
    } catch (error) {
        console.error('Error fetching news:', error);
        newsdetails.innerHTML = `<h1>Error fetching news data</h1>`;
    }
}

const fetchingSearchNews = async () => {
    const query = newsQuery.value;
    const SEARCH_QUERY = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${query}&country=in&language=en`;
    try {
        const response = await fetch(SEARCH_QUERY);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const myJSON = await response.json();
        console.log(myJSON);
        if (Array.isArray(myJSON.results)) {
            newsDataArr = myJSON.results;
        } else {
            newsDataArr = [];
        }
        displayNews();
    } catch (error) {
        console.error('Error fetching news:', error);
        newsdetails.innerHTML = `<h1>Error fetching news data</h1>`;
    }
};

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