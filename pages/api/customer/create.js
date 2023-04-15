import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
    const {name, information, duration, queue} = req.body;
    const new_custdata = {
        name : name,
        information : information,
        duration: duration,
        queue:queue,
    };
    if(name && information && duration && queue){
        prisma.customer.create({
            data: new_custdata,
        })
        .then((customer) => {
            res.status(201).json({
                message: "Customer created successfully!",
                data: customer,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: error || "Error occured! Please contact the admin for more information.",
            });
        });
    } else {
        res.status(400).json({
            message: "Please fill all the fields!",
        });
    }

}