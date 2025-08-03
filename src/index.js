import connectToDatabase from "./database/data.js";

async function main() {
    await connectToDatabase("luana", "123456")
};

main();
