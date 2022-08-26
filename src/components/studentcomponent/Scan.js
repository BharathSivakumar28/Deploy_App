import React, { useState } from 'react'
import Tesseract from 'tesseract.js';

const Scan = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [image, setImage] = React.useState('');
    const [text, setText] = React.useState('');
    const [progress, setProgress] = React.useState(0);

    const handleSubmit = () => {
        setIsLoading(true);
        Tesseract.recognize(image, 'eng', {
            logger: (m) => {
                console.log(m);
                if (m.status === 'recognizing text') {
                    setProgress(parseInt(m.progress * 100));
                }
            },
        })
            .catch((err) => {
                console.error(err);
            })
            .then((result) => {
                console.log(result.data);
                setText(result.data.text);
                setIsLoading(false);
            });
    };

    return (
        <div className="container m-10" >
            <div className="row h-100">
                <div className=" mx-auto h-100 d-flex flex-col justify-center">
                    {!isLoading && (
                        <h1 className="text-center py-5 mc-5">Image To Text</h1>
                    )}
                    {isLoading && (
                        <>
                            <progress className="form-control" value={progress} max="100">
                                {progress}%{' '}
                            </progress>{' '}
                            <p className="text-center py-0 my-0">Converting:- {progress} %</p>
                        </>
                    )}
                    {!isLoading && !text && (
                        <div className='flex flex-col max-w-3/4 justify-center'>
                            {/* <input
              type="file"
              
              className="ml-30"
             
            /> */}

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
                            <input onChange={(e) =>
                                setImage(URL.createObjectURL(e.target.files[0]))
                            } class="block max-w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

                            <input
                                type="button"
                                onClick={handleSubmit}
                                className="btn btn-primary mt-5"
                                value="Convert"
                            />
                        </div>
                    )}
                    {!isLoading && text && (
                        <>
                            <textarea
                                className="form-control w-100 mt-5"
                                rows="30"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>

                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Scan