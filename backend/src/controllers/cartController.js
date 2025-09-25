const { CartItem, Product } = require("../models");

const getCart = async (req, res) => {
  const items = await CartItem.findAll({
    where: { UserId: req.user.id },
    include: [Product],
  });
  res.json(items);
};

const addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  const product = await Product.findByPk(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  let item = await CartItem.findOne({
    where: { UserId: req.user.id, ProductId: productId },
  });

  if (item) {
    item.quantity += quantity;
    await item.save();
  } else {
    item = await CartItem.create({
      UserId: req.user.id,
      ProductId: productId,
      quantity,
    });
  }

  res.status(201).json(await CartItem.findByPk(item.id, { include: [Product] }));
};

const updateCartItem = async (req, res) => {
  const { quantity } = req.body;
  const item = await CartItem.findOne({
    where: { id: req.params.id, UserId: req.user.id },
    include: [Product],
  });
  if (!item) return res.status(404).json({ message: "Item not found" });

  item.quantity = quantity;
  await item.save();

  res.json(item);
};

const removeFromCart = async (req, res) => {
  const item = await CartItem.findOne({
    where: { id: req.params.id, UserId: req.user.id },
  });
  if (!item) return res.status(404).json({ message: "Item not found" });

  await item.destroy();
  res.status(204).send();
};

module.exports = { getCart, addToCart, updateCartItem, removeFromCart };
