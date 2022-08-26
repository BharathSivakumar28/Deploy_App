import React, { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



const Speechtotext = () => {
    const { transcript, resetTranscript } = useSpeechRecognition()

    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true })
        console.log('listening starts')
    }, [])

    return (
        <div className='m-20'>
            <form className='flex flex-col justify-between'>
                <textarea className='block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' value={transcript}>
                </textarea>
                <button className=' mt-5 bg-blue-600 p-2 rounded-md text-gray-800' onClick={resetTranscript}>Cleat text</button>
                <button className=' mt-5 bg-blue-600 p-2 rounded-md text-gray-800' onClick={(e)=>{
                    e.preventDefault();
                    SpeechRecognition.stopListening({ continuous: true })
                    console.log('listening stops')
                }}>Stop listening

                </button>
            </form>
            
        </div>
    )
}

export default Speechtotext