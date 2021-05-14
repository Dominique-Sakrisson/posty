export const makeRequest = async(url, method, body) => {
   
    console.log(body);
    const res = await fetch(url, {method, body: JSON.parse(body)});
    const json = await res.json();
    return json;
}
