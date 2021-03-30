const getFunds = () => {
    const url = 'https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full'
    return fetch(url).then((response) => response.json())
}

export {getFunds}