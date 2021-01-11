// Подключение middleware, который проверяет аунтифицирован пользователь на данной ручке или нет
export function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.sendStatus(401)
  }
}

// Подключение middleware, который не позволяет аунтифицированному пользователю переходить на страницу(ручку) регистрации и входа в систему
export function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return res.status(401).json(req.user._id)
  }
  else next()
}
