import React from 'react'

const Coursecard = (props) => {
  return (
<div class="px-10 py-20 ">
    <div class="w-72 bg-white drop-shadow-md rounded-lg">
        <img class="object-cover rounded-tl-lg rounded-tr-lg"
            src="https://www.kindacode.com/wp-content/uploads/2022/06/computer-example.jpg" />
        <div class="px-5 py-3 space-y-2">
            <h3 class="text-lg text-black">{props.title}</h3>
            <div class="space-x-2">
                <span class="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">{props.topic}</span>
                <span class="px-3 py-0.5 border border-orange-500 text-[11px] text-orange-500">{props.selling}</span>
            </div>
            <p class="space-x-2">
                <span class="text-2xl font-semibold  text-black">{props.level}</span>
            
            </p>
            <div class="flex justify-between items-center pt-3 pb-2">
                <a href="#"
                    class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">
                    Add to list</a>

                <a href="#" title="Add to Favorites"
                    class="text-2xl text-gray-300 hover:text-red-500 duration-300"></a>
            </div>
        </div>
    </div>

</div>
  )
}

export default Coursecard