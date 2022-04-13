import { useEffect, useState } from "react";

export const useLoad = ()=> {
     const [loading,setLoading] = useState(true)
     const [data,setData] = useState([])
     const [error,setError] = useState(undefined)
     
     useEffect(()=>{
          const fetchData = () =>{
               fetch(process.env.PUBLIC_URL + '/data.json')
               .then(response =>{
                    return response.json()
               })
               .then((dataLogement)=>{
                    setData(dataLogement)
                    setLoading(false)
               })
               .catch(e =>{
                    console.log(e)
                    setError(e)
                    setLoading(false)
               })
          }
     
          fetchData()
     }, [])


     return{
          loading,
          data,
          error
     }
}