import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
   try {
      await dispatch(Action.pushResultAction(result))
   } catch (error) {
      console.log(error)
   }
}

export const updateResult = (index) => async (dispatch) => {
   try {
      dispatch(Action.updateResultAction(index));
   } catch (error) {
      console.log(error)
   }
}

//  ========= insert user data  ================================
export const usePublishResult = (resultData) => {
( async () =>{
      try {
         await postServerData(  `http://localhost:8009/result` , resultData, data => data)
      } catch (error) {
         console.log(error)
      }
   })();
}


export const usePublishResultPhy = (resultData) => {
   ( async () =>{
         try {
            await postServerData( `http://localhost:8009/PhyResult `, resultData, data => data)
         } catch (error) {
            console.log(error)
         }
      })();
   }


// ================= insert user data  ====================
export const usePublishResultBio = (resultData) => {

   ( async () =>{
         try {
            await postServerData( `http://localhost:8009/BioResult`  , resultData, data => data)
         } catch (error) {
            console.log(error)
         }
      })();
   }   

