import { NextResponse as res, NextRequest as req } from "next/server";


const data= [
    {
        id: 1,
        title: 'Macbook pro M2',
        image: 'https://i1.adis.ws/i/jpl/jd_DD1391-100_c?w=700&resmode=sharp&qlt=70&fmt=webp',
        desc: 'lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        id: 2,
        title: 'Macbook pro M2',
        image: 'https://i1.adis.ws/i/jpl/jd_DD1391-100_c?w=700&resmode=sharp&qlt=70&fmt=webp',
        desc: 'lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        id: 3,
        title: 'Macbook pro M2',
        image: 'https://i1.adis.ws/i/jpl/jd_DD1391-100_c?w=700&resmode=sharp&qlt=70&fmt=webp',
        desc: 'lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        id: 4,
        title: 'Macbook pro M5',
        image: 'https://i1.adis.ws/i/jpl/jd_DD1391-100_c?w=700&resmode=sharp&qlt=70&fmt=webp',
        desc: 'lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        id: 5,
        title: 'Macbook pro M6',
        image: 'https://i1.adis.ws/i/jpl/jd_DD1391-100_c?w=700&resmode=sharp&qlt=70&fmt=webp',
        desc: 'lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        id: 6,
        title: 'Macbook pro M6',
        image: 'https://i1.adis.ws/i/jpl/jd_DD1391-100_c?w=700&resmode=sharp&qlt=70&fmt=webp',
        desc: 'lorem ipsum dolor sit amet, consectetur adip'
    },
]

export async function GET(req) {
    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id')
    console.log(id);
    if (id) {
        const dataProd = data.find(f => f.id === Number(id))
        if (dataProd) {
            return res.json({ status: 200,message: 'success', data :dataProd})
        }
            return res.json({ status: 404,message: 'data not found'})
        
    }else{
        return res.json({ status: 200,message: 'success', data :  data})
    }
}