export const makeRequest = async(url, method) => {
    const res = await fetch(url, {method});
    const json = await res.json();
    return json;
}
