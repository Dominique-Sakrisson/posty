# posty
Hosted with CI/CD on netlify

##Tool for developing api CRUD routes

##User enteres the url of the api

##example:

https://newsapi.org/v2/everything?q=ford&apiKey=bf46b18ab6c9481fb9998251f6c8a7b5https://newsapi.org/v2/everything?q=ford&apiKey=bf46b18ab6c9481fb9998251f6c8a7b5

An optional request body in JSON: 
{
   "customers":
  {
    "firstName": "Joe”,
    "lastName": “Bloggs”,
    "fullAddress": 
    {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": 10021
    }
  }
}

#app returns the body or the error returned from making the request along with the history of requests made
{
    "status": "ok",
    "totalResults": 11554,
    "articles": [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Saqib Shah",
            "title": "Self-driving Ford cars will be available to Lyft customers in Miami later this year",
            "description": "Partners Lyft and Ford are laying the groundwork for their driverless ride-hailing plans. Today, the companies announced that Ford's Argo AI-powered cars will be available on Lyft's network later this year in Miami, followed by Austin in 2022. The move will a…",
            "url": "https://www.engadget.com/ford-self-driving-lyft-miami-123529662.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-07/47130780-ea1e-11eb-975f-19c559780bd9",
            "publishedAt": "2021-07-21T12:35:29Z",
            "content": "Partners Lyft and Ford are laying the groundwork for their driverless ride-hailing plans. Today, the companies announced that Ford's Argo AI-powered cars will be available on Lyft's network later thi… [+1643 chars]"
        }
}
