    export const getGifs = async(category) => {


        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=m209fG4o8GhexBhqk2I8fT4QVWY8Q8LS`
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id : img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;

        

    }