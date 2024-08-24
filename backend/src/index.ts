import express from "express"
import {PrismaClient} from "@prisma/client"
import cors from "cors"

const app=express();
const prisma =new PrismaClient();

app.use(cors());
app.use(express.json());

//Route to get suggestions based on the ticket subject
app.post('/api/templates',async(req:any,res:any)=>{
    console.log("touched suggestions")
    console.log(req.body);
    const { subject, body } = req.body; // Destructure 'subject' and 'body' from 'req.body'

    if (!subject || !body) {
      return res.status(400).json({ error: 'Subject and body are required' });
    }
    //logic create template
    const templates=await prisma.template.create({
        data:{
            subject:subject,
            body:body
        }
    });
    res.json(templates);
})


//Route to get templates by search keyword
app.post('/api/suggestions',async(req:any,res:any)=>{
    console.log("touched template-groups")
    const {subject,body}=req.body;
    const templates=await prisma.template.findMany({
        where:{
            subject:{contains:String(subject)},
            body:{contains:String(body)}
        }
    });
    res.json(templates)
});

//Route to manage tab groups
app.get('/api/tab-groups',async(req:any,res:any)=>{
    console.log("touched tab-groups")
    const groups=await prisma.tabGroup.findMany();
    res.json(groups);
});

app.listen(3000,()=>{
    console.log('server is running at the port 3000')
})