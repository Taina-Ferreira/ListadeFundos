import React from 'react'

const TableHeader = () => {
    return (
        <div className="new-table-responsive">
        <thead className="table-fixedHeader has-rentability-tr hide-for-small-only">
            <tr>
                <th>Fundo</th>
                <th className="hide-for-small-only text--right">Data da cota</th>
                <th  colspan="3" className="hide-for-small-only rentability-group"></th>
                <div className="full-block clearfix text--right hide-for-small-only">Rentabilidade (%)</div>
                <th className="text--right">Aplicação mínima (R$)</th>
                <th className="text--right">Cotização do resgate</th>
                <th className="text--right">Aplicar</th>
            </tr>
            <tr>
                <th colSpan="2"></th>
                <th className="text--right">Mês</th>
                <th className="text--right ng-binding">2021</th>
                <th className="text--right">12M</th>

            </tr>
        </thead>
        </div>
    )



}
export default TableHeader