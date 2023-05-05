import { prisma } from "../../libs/prisma.libs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      let datacount = {
        booked: await prisma.customer.count({
          where: {
            status: "unconfirmed",
          },
        }),
        customers: await prisma.customer.count({
          where: {
            status: "confirmed",
          },
        }),
        users: await prisma.user.count(),
      };
      res.status(200).json(datacount);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "Only GET requests allowed" });
  }
}
