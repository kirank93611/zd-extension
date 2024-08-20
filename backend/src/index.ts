import express from "express"
import {PrismaClient} from "@prisma/client"

const app=express();
const prisma =new PrismaClient();
app.use(express.json());

//Route to get suggestions based on the ticket subject
app.post('/api/suggestions',async(req:any,res:any)=>{
    const {subject}=req.body
    //logic to match keyword
    const templates=await prisma.template.findMany({
        where:{
            keywords:{
                has:subject
            }
        }
    });
    res.json(templates);
})

//Route to get templates by search keyword
app.get('/api/keyword',async(req:any,res:any)=>{
    const {keyword}=req.query;
    const templates=await prisma.template.findMany({
        where:{
            subject:{contains:String(keyword)}
        }
    });
    res.json(templates)
});

//Route to manage tab groups
app.get('/api/tab-groups',async(req:any,res:any)=>{
    const groups=await prisma.tabGroup.findMany();
    res.json(groups);
});

app.listen(3000,()=>{
    console.log('server is running at the port 3000')
})