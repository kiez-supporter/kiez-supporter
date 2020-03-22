import React, { FC, useState } from "react"
import { useAppDispatch } from "../../hooks/useReduxState"
import { resetModal } from "../../actions/UiActions"
import { push } from "connected-react-router"
import { routePaths } from "../../routes"

export interface ModalProps {
    name?: string
    zip?: number
    shops?: number
    progress?: number
    links?: string[]
}
const Modal: FC<ModalProps> = ({ name, zip, shops, progress, links }: ModalProps) => {
    const dispatch = useAppDispatch()
    const [showLinks, setShowLinks] = useState<boolean>(false)
    const handleClick = () => setShowLinks(!showLinks)
    const handleContactRoute = () => dispatch(push(routePaths.contact()))

    const handleClose = () => {
        dispatch(resetModal())
        setShowLinks(false)
    }

    const linkModal = (
        <div className={`bg-white absolute rounded-xl left-0 top-0 h-full w-64 ${showLinks ? "block" : "hidden"}`}>
            <div className="p-5 flex flex-col">
                {links?.map((link, key) => (
                    <a
                        className="mt-2 block w-full rounded-xl mx-auto bg-green-400 text-center p-2"
                        href={link}
                        key={key}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {link}
                    </a>
                ))}
                <div className="mt-5">
                    <p>
                        Dein Helfer oder deine Helferin ist nicht in der Liste?
                        <button
                            onClick={handleContactRoute}
                            className="mt-2 block w-full rounded-xl mx-auto bg-green-400 text-center p-2"
                        >
                            Lass es uns wissen!
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )

    return (
        <div
            className={`bg-white absolute ml-auto mr-auto mt-34 left-0 right-0 w-64 z-70 p-5 rounded-xl flex flex-col ${!!!name &&
                "hidden"}`}
        >
            <div>
                {linkModal}
                <div className="absolute top-0 right-0 p-2">
                    <button onClick={handleClose} className="font-bold">
                        X
                    </button>
                </div>
                <div className="mt-5">
                    <h1 className="font-bold">Kiez-Score: {Math.trunc(progress || 0)}</h1>
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
                    <p>Werde Kiez-Krieger und hilf deinem Kiez im Kampf gegen Corona!</p>
                </div>
                <div className="w-full mt-5">
                    {links ? (
                        <button
                            className="block w-full rounded-xl mx-auto bg-green-400 text-center p-2"
                            onClick={handleClick}
                        >
                            Unterstützen
                        </button>
                    ) : (
                        <div className="mt-5">
                            <p>
                                Anscheinend gibt es zur Zeit noch keine Helfer/innen für deinen Kiez, die uns bekannt
                                sind. Wenn du eine/n kennst,
                                <button
                                    onClick={handleContactRoute}
                                    className="mt-2 block w-full rounded-xl mx-auto bg-green-400 text-center p-2"
                                >
                                    lass es uns wissen!
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal
