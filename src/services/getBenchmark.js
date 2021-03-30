const getBenchmark = async () => {
    const url = 'https://minhaconta.orama.com.br/rest-api/benchmark/current-profitabilities';
    const retorno = await fetch (url)
    const data = Array(await retorno.json())
    
    const allIbov = data.filter((bm) => bm.benchmark_name === 'IBOV')
    const allCdi = data.filter((bm) => bm.benchmark_name === 'CDI')

    const sortFuncion = (bm) => bm.reference_date

    allIbov.sort(sortFuncion);
    allCdi.sort(sortFuncion);

    return {
        ibov: allIbov[0],
        cdi: allCdi[0]
    }
}

export default getBenchmark