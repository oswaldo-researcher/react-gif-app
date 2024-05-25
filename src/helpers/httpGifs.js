export const fetchGifs = async (category) => {
    const result = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=0FRhFI7ua350OhX4Juwj4GH9kXLm3nNa&q=${category}&limit=6&rating=PG`
    );
  
    const { data } = await result.json();
    const gifs = data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url,
      };
    });
    return gifs;
  };
  