import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
  const { status } = req.query;
  if (status === "unconfirmed") {
    prisma.customer
      .findMany({
        where: {
          status: "unconfirmed",
        },
      })
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
  } else if (status === "confirmed") {
    prisma.customer
      .findMany({
        where: {
          status: "confirmed",
        },
      })
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
  } else if (status === "done") {
    prisma.customer
      .findMany({
        where: {
          status: "done",
        },
      })
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
  } else if (status === "deleted") {
    prisma.customer
      .findMany({
        where: {
          status: "deleted",
        },
      })
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
  } else {
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
}
