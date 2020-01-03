const SportsApiurl = ` https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=df90fd5fd526453b8b08a158c07950e6`;
window.fetch(SportsApiurl)
.then(data => {
    data.json()
    .then(sportsnews => {
        console.log(sportsnews);

        let sportsdata = sportsnews.articles;
        let output = "";
        for (let sports of sportsdata) {
            output +=`
            <h1 class="h1title"><a href="${sports.url}" target=_blank>${sports.title}</h1>
            <h1>${sports.title}</h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}"/>
            <p>${sports.publishedAt}</p>
            `;
            document.getElementById("left").innerHTML = output;
        }
    }).catch(err => console.log(err));
})
.catch(err => console.log);


//time javascript here
//var day = new Date().getDate();

setInterval(() => {
    var time = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
}, 1000);

//entertainment
const enturl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=df90fd5fd526453b8b08a158c07950e6`;
window.fetch(enturl).then(data =>{
    data.json()
    .then(ent =>{
        console.log(ent);
    
        let entdata = ent.articles;
        let output = "";
        for (let ent of entdata) {
            output +=`
            <h1 class="h1title"><a href="${ent.ur}" target=_blank>${ent.title}</h1>
            <h1>${ent.title}</h1>
            <p>${ent.description}</p>
            <img src="${ent.urlToImage}"/>
            <p>${ent.publishedAt}</p>
            `;
            document.getElementById("right").innerHTML = output;
        }
    })
        .catch(err => console.log(err));
}).catch(err => console.log(err))

//head lines

const topheadlineApiurl = ` https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=df90fd5fd526453b8b08a158c07950e6`;
window.fetch(topheadlineApiurl)
.then(data => {
    data.json()
    .then(topnews => {
        console.log(topnews);

        let topnewsdata = topnews.articles;
        let output = "";
        for (let topnew of topnewsdata) {
            output +=`
            <h1 class="h1title"><a href="${topnew.url}" target=_blank>${topnew.title}</h1>
            <h1>${topnew.title}</h1>
            <p>${topnew.description}</p>
            <img src="${topnew.urlToImage}"/>
            <p>${topnew.publishedAt}</p>
            `;
            document.getElementById("middle").innerHTML = output;
        }
    }).catch(err => console.log(err));
})
.catch(err => console.log);