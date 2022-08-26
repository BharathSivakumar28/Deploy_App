import React from 'react'
import Footer from '../studentcomponent/Footer'
import Navparents from './Navparents'


const ParentsDoubt = () => {
  return (
    <>
    <Navparents/>
    <div class="max-w-full mx-20 justify-center">

        <form className='my-20 items-center justify-center'>
            <div class="mb-6 ">
                <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required="@" />
            </div>
            <div class="mb-6">
                <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Problem Title</label>
                <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div class="mb-6">
                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Problem descirption</label>
                <input type="text" id="large-input" class="block p-4 w-full text-black bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-300 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="flex flex-row items-start mb-6 ">
                <div class="flex items-center mb-4 mx-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                </div>
                <div class="flex items-center mb-4 mx-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Scholorship</label>
                </div>
                <div class="flex items-center mb-4 mx-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-checkbox" class="ml-2  text-sm font-medium text-gray-900 dark:text-gray-300">Career guidance</label>
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
        </form>

    </div>
    <Footer/>
    </>
  )
}

export default ParentsDoubt