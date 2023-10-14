import { NextResponse as res } from "next/server";


export async function GET() {
    return res.json({ status: 200,message: 'success'})
}