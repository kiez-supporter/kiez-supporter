import React, { FC } from "react"
export interface ModalProps {
    name?: string
    zip?: number
    shops?: number
    progress?: number
    links?: string[]
    close?: () => void
}
const Modal: FC<ModalProps> = ({ name, zip, shops, progress, links, close }: ModalProps) => {
    return (
        <div
            id="modal"
            className={`bg-white absolute ml-auto mr-auto mt-40 left-0 right-0 w-64 z-70 p-5 rounded-xl flex flex-col ${!!!name &&
                "hidden"}`}
        >
            <div className="absolute top-0 right-0 p-2">
                <button onClick={close} className="font-bold">
                    X
                </button>
            </div>
            <div className="mt-5">
                <h1 className="font-bold">Kiez-Score</h1>
                <h2>
                    {zip} {name}
                </h2>
            </div>
            <div className="mt-5">
                <div className="w-full bg-red-400 border-black h-5 rounded-xl">
                    <div className="bg-green-400 h-5 rounded-xl text-center" style={{ width: progress + "%" }} />
                </div>
            </div>
            <div className="mt-5">
                <p>Geschäfte: {shops}</p>
                <p>Werde Kiez-Krieger und hilf deinem Kiez im Kampf gegen Corona!</p>
            </div>
            <div className="w-full mt-5">
                {links?.map((link, key) => (
                    <a href={link} key={key} className="block w-full rounded-xl mx-auto bg-green-400 text-center p-2">
                        Unterstützen
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Modal
