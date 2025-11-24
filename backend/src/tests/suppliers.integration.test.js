const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../app");
const { sequelize, User, Supplier } = require("../models");

let tokenAdmin;
let supplierId;

beforeAll(async () => {
  // Sincroniza o banco (apenas dev/test)
  await sequelize.sync({ force: false });

  // Busca um usuário admin de teste
  const admin = await User.findOne({ where: { email: "admin@example.com" } });

  // Gera token manualmente usando o ID do admin
  tokenAdmin = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRES_IN || "1h",
  });
});

afterAll(async () => {
  // Remove supplier de teste se ainda existir
  if (supplierId) {
    try {
      await Supplier.destroy({ where: { id: supplierId } });
    } catch (err) {
      // ignora se já tiver sido deletado
    }
  }
  // Fecha conexão com o DB
  await sequelize.close();
});

describe("Integração Suppliers (API)", () => {
  test("criar supplier", async () => {
    const response = await request(app)
      .post("/api/suppliers")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ name: "Fornecedor Teste", contact: "teste@email.com" });

    expect(response.statusCode).toBe(201);
    expect(response.body.id).toBeDefined();
    supplierId = response.body.id;
  });

  test("editar supplier", async () => {
    const response = await request(app)
      .put(`/api/suppliers/${supplierId}`)
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ name: "Fornecedor Teste Editado", contact: "testeeditado@email.com" });

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("Fornecedor Teste Editado");
  });

  test("excluir supplier", async () => {
    const response = await request(app)
      .delete(`/api/suppliers/${supplierId}`)
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(response.statusCode).toBe(204);

    // opcional: verificar se realmente sumiu
    const getResponse = await request(app)
      .get(`/api/suppliers/${supplierId}`)
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(getResponse.statusCode).toBe(404);
  });
});
