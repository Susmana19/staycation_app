import React from 'react'
import checklist from '../../src/assets/images/checklist.svg'
import uncheck from '../../src/assets/images/uncheck.svg'

const Benefit = () => {
  return (
    <>
        <div id='benefit' className="w-[85%] ml-[7vw] pt-[10vh] pb-[5vh] absolute z-[8] top-[320vh] bg-white rounded-md">
            <table className="w-[85%] bg-white py-50">
                {/* head */}
                <thead className='text-2xl font-bold'>
                <tr>
                    <td></td>
                    <td>Sama Kami</td>
                    <td>Sama yang Lain</td>
                </tr>
                </thead>
                <tbody className='text-lg'>
                {/* row 1 */}
                <tr className='border-b-2 h-20 border-bg_second text-xl'>        
                    <td className='pl-[8vw]'>Gratis Biaya Konsultasi</td>
                    <td> <img src={checklist} alt='check' className='ml-8' /></td>
                    <td><img src={uncheck} alt='uncheck' className='ml-16'  /></td>
                </tr>
                {/* row 2 */}
                <tr className='border-b-2 h-20 border-bg_second text-xl'>          
                    <td className='pl-[8vw]'>Refund Kapanpun</td>
                    <td><img src={checklist} alt='check' className='ml-8' /></td>
                    <td><img src={uncheck} alt='uncheck' className='ml-16' /></td>
                </tr>
                {/* row 3 */}
                <tr className='border-b-2 h-20 border-bg_second text-xl'>
                    
                    <td className='pl-[8vw]'>Biaya Pengantaran</td>
                    <td><img src={checklist} alt='check' className='ml-8'/></td>
                    <td><img src={uncheck} alt='uncheck' className='ml-16'/></td>
                </tr>
                <tr className='h-20 text-xl'>                 
                    <td className='pl-[8vw]'>Gratis Local Guide</td>
                    <td><img src={checklist}  alt='check' className='ml-8'/></td>
                    <td><img src={uncheck} alt='uncheck' className='ml-16' /></td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Benefit