import { createReadStream } from 'fs';
import { createServer } from 'http';

const PORT = 3000;

async function handler(request, response) {
    createReadStream('./src/files/source.txt')
    .pipe(response);
}

createServer(handler)
.listen(PORT, () => console.log(`running on ${PORT}`));