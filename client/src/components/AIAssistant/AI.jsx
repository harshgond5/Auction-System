import { useState } from "react";

import AIButton from "./AIButton";
import AIChat from "./AIChat";

export default function AI() {

    const [open, setOpen] = useState(false);

    return (
        <>

            <AIButton
                onClick={() => setOpen(true)}
            />

            {
                open && (
                    <AIChat
                        onClose={() => setOpen(false)}
                    />
                )
            }

        </>
    );

}