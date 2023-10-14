import { revalidateTag } from "next/cache";
import { NextResponse as res } from "next/server";


export async function POST(req) {
    
    const tag = await req.nextUrl.searchParams.get('tag') //untuk dapet query params
    const secret_key = await req.nextUrl.searchParams.get('secret_key') //untuk dapet query params
    console.log(tag);
    if(!tag) return res.json({status : 400, message: 'missing params tag'});

    if(secret_key !== process.env.REVALIDATE_SECRET_KEY) return res.json({status : 400, message: 'invalid secret key'}); //penambahan secret key agar revalidasi aman


    
    revalidateTag(tag)
    return res.json({status : 200, revalidate: true, now : new Date().toDateString()});
}