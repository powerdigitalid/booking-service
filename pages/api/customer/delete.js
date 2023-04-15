import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
  const { id } = req.query;
  prisma.customer
    .delete({
      where: {
        id: parseInt(id),
      },
    })
    .then((customer) => {
      res.status(200).json({
        message: "Customer deleted successfully!",
        data: customer,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message:
          error.message ||
          "Error occured! Please contact the admin for more information.",
      });
    });
}
