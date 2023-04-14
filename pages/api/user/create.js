import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
  const { nama, namauser, pass } = req.body;
  const new_userdata = {
    name: nama,
    username: namauser,
    password: pass,
  };
  if (nama && namauser && pass) {
    prisma.user.create({
      data: new_userdata,
    })
      .then((user) => {
        res.status(201).json({
          message: "User created successfully!",
          data: user,
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