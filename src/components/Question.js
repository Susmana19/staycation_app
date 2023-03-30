import React, { useState, useEffect } from 'react'

const Question = () => {

    const [qa, setQa] = useState([]);
    useEffect(() => {
      setQa([
        {
            id: 1,
            question: 'Apakah ini ada legalitasnya?',
            answer: 'Candy canes candy chupa chups sesame snaps sweet roll carrot cake. Cheesecake cheesecake pie lemon drops pudding toffee.'
        },
        {
            id: 2,
            question: 'Apakah ada kantor fisiknya??',
            answer: 'Candy canes candy chupa chups sesame snaps sweet roll carrot cake. Cheesecake cheesecake pie lemon drops pudding toffee.'
        },
        {
            id: 3,
            question: 'Berapa peserta yang merasa kecewa?',
            answer: 'Candy canes candy chupa chups sesame snaps sweet roll carrot cake. Cheesecake cheesecake pie lemon drops pudding toffee.'
        },
        {
            id: 4,
            question: 'Apakah dunia ini fana?',
            answer: 'Candy canes candy chupa chups sesame snaps sweet roll carrot cake. Cheesecake cheesecake pie lemon drops pudding toffee.'
        },       
      ])
    }, [])
    

  return (
    <>
        <div className='w-[35vw] h-[50vh]'>
                <div className='w-full mb-10 ml-4'>
                    <p className='text-tertiary text-4xl font-black'> Yang sering Netizen</p>
                    <p className='text-tertiary text-4xl font-black'>tanyai...</p>
                </div>

            {qa.map((item)=> (
                <div key={item.id} tabIndex={0} className="collapse collapse-arrow bg-base-100 border-b border-base-300">
                            <div className="collapse-title text-2xl font-medium">
                            {item.question}
                            </div>
                            <div tabIndex={0} className="collapse collapse-content collapse-arrow  bg-base-100 cursor-pointer text-xl"> 
                                <p>{item.answer}</p>
                            </div>
                </div>
            ))}

        </div>
    </>
  )
}

export default Question