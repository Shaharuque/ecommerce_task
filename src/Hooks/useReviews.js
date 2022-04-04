import { useEffect, useState } from "react"

const useReviews=()=>{

    const [reviews,setReviews]=useState([])
    //for spinner state update
   // const [spinner,setSpinner]=useState(false)

    useEffect(()=>{
        fetch('reviewers.json')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })   
    },[])

    return [reviews,setReviews]
}

export {useReviews} ;