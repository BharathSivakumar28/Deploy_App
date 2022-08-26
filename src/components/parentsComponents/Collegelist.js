import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from "./Data.json"
import Navparents from './Navparents'
import Footer from '../studentcomponent/Footer'


const Collegelist = () => {

    // const[posts, setPosts]=useState(null);

    // useEffect(()=>{
    //     axios.get("colleges-in.herokuapp.com").then(res=>{
    //         console.log(res.data);
    //     })

    // },[]);

    return (
        <>
        <Navparents/>
        <br></br>
        <div>
            
            {
                List.map(Data => {
                    return (

                        <div class="p-6 max-w-full mb-10 mx-20 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">{Data.CollegeName}</h5>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">{Data.Universityname}</h5>
                            
                            
                            </a>
                            
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">College Type - {Data.CollegeType}</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">College State - {Data.StateName}</p>
                            
                        </div>

                    )
                })
            }
        </div>
        <Footer/>
        </>
    )
}

export default Collegelist