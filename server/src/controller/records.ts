import { Request, Response } from "express";

import prisma from "../prisma";

export async function getRecords(req: Request, res: Response) {
    const { take, skip } = req.query;

    if (!(take && skip)) return res.status(400).json({ error: "Take and Skip not found!" });

    const records = await prisma.records.findMany({ take: Number(take), skip: Number(skip) });

    if (!records.length) res.status(404).json({ error: "Records not found!" });

    return res.json(records);
}
