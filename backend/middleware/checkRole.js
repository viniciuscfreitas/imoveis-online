const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Você não tem permissão para realizar essa ação.' });
    }
    next();
  };
};

module.exports = checkRole;