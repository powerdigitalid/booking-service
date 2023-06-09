import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
  const { name, date, information, duration, queue } = req.body;
  const new_custdata = {
    name: name,
    date: date,
    information: information,
    duration: duration,
    queue: queue,
    status: "unconfirmed"
  };
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
      res.status(200).json({
        message: error //|| "Error occured! Please contact the admin for more information.",
      });
    });
}