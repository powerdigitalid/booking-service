import { prisma } from '../../../libs/prisma.libs';

export default function handler(req, res){
  if (req.method === 'GET'){
    prisma.customer.findFirst({
      select: {
        queue: true
      },
      orderBy: {
        queue: 'desc'
      },
    })
    .then((data) => {
      if(data){
        res.status(200).json({
          message: 'Success',
          data: data
        });
      } else {
        res.status(200).json({
          message: 'Unavailable',
          data: null
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error occured!' + err,
      });
    });
  }
}