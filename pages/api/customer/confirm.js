import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
  if (req.method === "PATCH") {
    const {id} = req.body;
    if (id) {
      prisma.customer.update({
        where: {
          id: parseInt(id),
        },
        data: {
          status: "confirmed",
        },
      })
        .then((customer) => {
          res.status(201).json({
            message: "Customer updated successfully!",
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
}