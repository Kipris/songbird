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

const birdService = new BirdAPIService();
const baseUrl = 'https://songbird-5d0ab.firebaseio.com/';

const birdGroups = ['warmup', 'passerines', 'forest', 'songbirds', 'predators', 'sea'];
export const warmupData = birdService.getBirdGroup(`${baseUrl}${birdGroups[0]}.json`)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Could not fetch', error);
  });

export default BirdAPIService;
