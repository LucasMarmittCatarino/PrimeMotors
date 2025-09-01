function validateUserPayload(body, { partial = false } = {}) {
  const errors = [];

  const validRoles = ['admin', 'customer'];

  if (!partial) {
    if (typeof body.name !== 'string' || body.name.trim().length === 0) errors.push('name é obrigatório');
    if (typeof body.password !== 'string' || body.password.length < 6) errors.push('password mínimo 6 chars');
    if (typeof body.role !== 'string' || !validRoles.includes(body.role)) errors.push('role deve ser admin ou customer');
  }

  if (partial) {
    if ('name' in body && (typeof body.name !== 'string' || body.name.trim().length === 0)) errors.push('name inválido');
    if ('password' in body && (typeof body.password !== 'string' || body.password.length < 6)) errors.push('password mínimo 6 chars');
    if ('role' in body && (typeof body.role !== 'string' || !validRoles.includes(body.role))) errors.push('role inválido');
  }

  return errors;
}

module.exports = { validateUserPayload };
