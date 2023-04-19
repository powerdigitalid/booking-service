import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
    const {name,date,information,duration,queue,id} = req.body;
    const update_data ={
        name:name,
        date:date,
        information:information,
        duration:duration,
        queue:queue,
    };
    if(name && date && information && duration && queue && id){
        prisma.customer.update({
            where:{
                id:parseInt(id),
            },
            data:update_data,
        })
        .then((customer)=>{
            res.status(201).json({
                message:"Customer updated successfully!",
                data:customer,
            });
        })
        .catch((error)=>{
            res.status(500).json({
                message:error || "Error occured! Please contact the admin for more information.",
            });
        });
    }else{
        res.status(400).json({
            message:"Please fill all the fields!",
        });
    }
}