import React from 'react'

const Doubtscard = (props) => {
  return (
//     <div class="p-6 max-w-full m-20 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.subject}</h5>
//     </a>
//     <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.description}</p>
//     <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
//         Explore the problem
//         <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
//     </a>
// </div><
<div class="max-w-max mx-20 my-5 justify-evenly flex flex-row bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://via.placeholder.com/100x100.png" alt="" />
    </a>
    <div class="p-5 max-w-full flex flex-row items-center justify-between">
        <a href="#">
            <h5 class="mb-2 text-2xl inline-flex items-center  font-bold tracking-tight text-gray-900 dark:text-black">{props.subject}</h5>
        </a>
        <p class="m-3 font-normal text-gray-700 dark:text-gray-600">{props.description}</p>
        <a href="#" class="inline-flex justify-content: flex-start items-center py-2 px-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  )
}

export default Doubtscard