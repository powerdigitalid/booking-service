import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    if(req.method === 'GET'){
        const {id} = req.query;
        await prisma.customer.findUnique({
            where: {
                id: id,
            },
        })
        .then((customer) => {
            if((customer != null && customer != undefined)){
                res.status(200).json({
                    message: "Customer found!",
                    data: customer,
                });
            }
            else{
                res.status(404).json({
                    message: "Customer not found!",
                });
            }

        })
        .catch((err) =>{
            res.status(500).json({
                message: err || "Error occured! Please contact the admin for more information.",
            });
        })
    }

}