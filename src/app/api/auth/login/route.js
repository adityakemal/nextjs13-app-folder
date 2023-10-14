import { NextResponse as res, NextRequest as req } from "next/server";


export async function POST(req) {
    const body = await req.json() //harus di jsonkan agar terbaca
    console.log(body);
    return res.json({status : 200, data: body});
}