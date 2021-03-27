const getFounds = async () => {
    const url = 'https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full';
    const retorno = await fetch (url)
    return await retorno.json()
}

export {getFounds}