import axios from 'axios'
import {
      PRODUCT_BYID_REQUEST,
      PRODUCT_BYID_SUCCESS,
      PRODUCT_BYID_FAIL,
     
} from '../constants/productConstants'


export const getProductDetails = (id) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: PRODUCT_BYID_REQUEST,
            })

            const { data } = await axios.get(`/api/products/${id}`)

            dispatch({
                  type: PRODUCT_BYID_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: PRODUCT_BYID_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}



// export const filterFoods = (searchkey) => async dispatch => {

//       var filteredFoods;

//       try {
//             dispatch({
//                   type: FOODS_ALL_REQUEST,
//             })
  
//             const  response = await axios.get('/api/food/')
//             filteredFoods = response.data.filter(food => food.name.toLowerCase().includes(searchkey))

//             dispatch({
//                   type: FOODS_ALL_SUCCESS,
//                   payload: filteredFoods
//             })
//       } catch (error) {
//             console.log(error)
  
//             dispatch({
//                   type: FOODS_ALL_FAIL,
//                   payload:
//                         error.response && error.response.data.message
//                               ? error.response.data.message
//                               : error.message,
  
//             })
//       }
//   }