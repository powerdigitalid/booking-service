import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
  prisma.customer
    .findMany()
    .then((customers) => {
      if (customers.length === 0)
        return res.status(404).json({ message: "No customers found!" });
      res.status(200).json({
        message: "Customers retrieved successfully!",
        data: customers,
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
