function validateProductPayload(body, { partial = false } = {}) {
  const errors = [];

  // Campos obrigatórios no create
  if (!partial) {
    if (typeof body.name !== 'string' || body.name.trim().length === 0) errors.push('name é obrigatório');
    if (typeof body.price !== 'number' || isNaN(body.price)) errors.push('price deve ser número');
    if (!Number.isInteger(body.quantity) || body.quantity < 0) errors.push('quantity deve ser inteiro >= 0');
  }

  // Campos opcionais no update
  if (partial) {
    if ('name' in body && (typeof body.name !== 'string' || body.name.trim().length === 0)) errors.push('name inválido');
    if ('price' in body && (typeof body.price !== 'number' || isNaN(body.price))) errors.push('price inválido');
    if ('quantity' in body && (!Number.isInteger(body.quantity) || body.quantity < 0)) errors.push('quantity inválido');
  }

  return errors;
}

module.exports = { validateProductPayload };
