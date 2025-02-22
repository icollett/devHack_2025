import app from "./app";
import { Server } from "http";

const PORT: string | 3001 = process.env.PORT || 3001;

const server: Server = app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`
    );
});

export default server;