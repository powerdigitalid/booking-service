import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  const { userId } = req.query;
  if (req.method === 'GET') {
    await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
      .then((user) => {
        if (user != null && user != undefined) {
          res.status(200).json({
            message: "User found!",
            data: user,
          });
        }
        else {
          res.status(404).json({
            message: "User not found!",
          });
        }

      })
      .catch((err) => {
        res.status(500).json({
          message: err || "Error occured! Please contact the admin for more information.",
        });
      })
  }
}