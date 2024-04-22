const basicAuth = (req, res, next) => {
    // Extract authorization header
    const authHeader = req.headers.authorization;
  
    
    if (authHeader && authHeader.startsWith('Basic ')) {
      // Decode the base64 encoded credentials
      const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString('utf-8');
      
      // Extract username and password from decoded credentials
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
  