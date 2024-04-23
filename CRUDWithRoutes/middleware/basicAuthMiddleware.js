const basicAuth = (req, res, next) => {
    
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Basic ')) {
      
      const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString('utf-8');
      
      const [username, password] = credentials.split(':');
  
      
      if (username === 'user' && password === 'password') {
        
        next();
      } else {
       
        res.status(401).json({ error: 'Unauthorized' });
      }
    } else {
      
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  module.exports = basicAuth;
  