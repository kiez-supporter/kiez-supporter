import React, { FC } from "react"
import { TextField } from "@material-ui/core"

export const Contact: FC = () => {
    return (
        <div>
            <form className="flex flex-col p-5" noValidate autoComplete="off">
                <h3 className="font-bold">Sende uns deinen Helfer/innen:</h3>
                <TextField className="mt-5" id="outlined-basic" label="E-Mail" variant="outlined" />
                <TextField className="mt-5" id="outlined-basic" label="PLZ" variant="outlined" />
                <TextField className="mt-5" id="outlined-basic" label="Helfer/innen" variant="outlined" />
                <button className="mt-5 block w-full rounded-xl mx-auto bg-logo-orange text-center p-2">Senden</button>
            </form>
        </div>
    )
}
