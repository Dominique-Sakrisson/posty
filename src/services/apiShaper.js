export const makeRequest = async(url, method, body) => {
   if(method === 'GET'){
    const res = await fetch(url, {method})
    const json = await res.json();
    return json;
   } else if(method === 'POST' || method === 'PUT'){
       const res = await fetch(url, {method, body, headers: {
           'Content-Type': 'application/json'
       }});
       const json = await res.json();
       console.log(body)
       return json;
   }
  
}

