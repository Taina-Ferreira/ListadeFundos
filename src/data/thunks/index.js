import { getFunds } from '../../services/getFunds'
import { setFunds } from '../actions'

const thunks = {
    getAllFunds: () => (dispatch) => {
        getFunds().then((funds) => dispatch(setFunds(funds)))
    }
}

export {thunks}