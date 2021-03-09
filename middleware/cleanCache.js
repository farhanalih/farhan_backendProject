
const clearCache = require ('../services/redis-cache');

export const cleanCache = async (req, res, next) => {
    // wait for route handler to finish running
    await next(); 
    clearCache(req.body.Account);
}

