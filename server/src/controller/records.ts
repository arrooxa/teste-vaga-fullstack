import { Request, Response } from "express";

import prisma from "../prisma";

export async function getRecords(req: Request, res: Response) {
    const { take, page } = req.query;

    const records = await prisma.records.findMany({ take: Number(take), skip: Number(Number(take) * (Number(page) - 1)) });

    const recordsCount = await prisma.records.count();

    if (!records.length) res.status(404).json({ error: "Records not found!" });

    return res.json({ data: records, totalPages: Math.floor(recordsCount / Number(take)), count: recordsCount });
}
