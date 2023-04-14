import Jwt from 'jsonwebtoken';

export default function validateToken (req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
  if(token){
    Jwt.verify(token, process.env.SECRET, function(err, decoded){
      if(err){
        res.status(403).json({message: "Gagal autentikasi token"});
      }else{
        req.decoded = decoded;
        next();
      }
    });
  }else{
    return res.status(403).json({message: "Tidak ada token tersedia"});
  }
}