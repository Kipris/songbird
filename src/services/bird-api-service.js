class BirdAPIService {  
  async getBirdGroup(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}\nreceived ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
}

export default BirdAPIService;
