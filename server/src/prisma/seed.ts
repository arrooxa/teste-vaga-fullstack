import { PrismaClient } from "@prisma/client";

import { getFormattedCSV } from "../utils/csv-format";

const prisma = new PrismaClient();

async function main() {
    const historyInstance = prisma.history;

    if ((await historyInstance.count()) !== 0) return;

    const formattedCSV = await getFormattedCSV();

    for (let data of formattedCSV) {
        await historyInstance.create({
            data,
        });
    }
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
