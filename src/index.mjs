import axios from 'axios';
import { createWriteStream } from 'fs';


async function main() {
    const { data } = await axios.get('http://localhost:3000');

   const writableStream = createWriteStream('./src/files/target.txt');

   writableStream.write(data, () => console.log('Writing data to file...'));
}

main();