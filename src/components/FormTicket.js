import React from 'react'

const FormTicket = () => {
  return (
    <>
        <div className="card w-[35vw] h-[72vh] px-3 bg-base-100 shadow-xl bg-tertiary mr-3">
            <div className="card-body mx-auto">
                <h2 className="card-title text-white text-3xl font-extrabold">Gratis tiket liburan untuk &nbsp; 100 orang nih, kamu mau?</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-white text-xl">Nama Asli sesuai KTP</span>
                    </label>
                    <input type="text" placeholder="Misal “Dharma Rahardyan”" className="input input-bordered h-[10vh] w-full text-xl rounded-md" />
                </div>
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text text-white text-xl">No. Hp kamu</span>
                </label>
                <input type="text" placeholder="Misal “081234567890”" className="input input-bordered h-[10vh] w-full rounded-md text-xl" />
                </div>

                <button class="rounded-md bg-primary w-full h-[10vh] font-bold mt-5 text-xl  hover:bg-secondary hover:text-primary animate-pulse">SAYA MAU TIKET GRATIS</button>

            </div>
        </div>
    </>
  )
}

export default FormTicket