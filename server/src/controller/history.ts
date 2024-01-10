import { Request, Response } from "express";

import prisma from "../prisma";

export async function getHistories(req: Request, res: Response) {
    const histories = await prisma.history.findMany();

    if (!histories) throw new Error("Histories not found!");

    return res.json(histories);
}
