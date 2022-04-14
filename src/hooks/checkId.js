import { useEffect, useState } from "react";
import { useLoad } from "./load";

export const useCheckId = (id) => {
     const [loadingLogement,setLoadingLogement] = useState(true)
     const [logement,setLogement] = useState([])
     const [errorLogement,setErrorLogement] = useState(undefined)
     

     const {loading, data, error} = useLoad()

     useEffect(()=>{
          function findId() {
               if(!loading){

                    let logementData = data.find((item)=>{
                         return item.id == id
                    })

                    if(logementData){
                         setLogement(logementData)
                    }
                    else{
                         setErrorLogement("L'id ne correspond pas")
                    }

                    setLoadingLogement(false)
               }               
          }
          findId()
     }, [loading])

     return{
          loadingLogement,
          logement,
          errorLogement
     }

}