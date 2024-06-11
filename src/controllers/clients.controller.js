import { Clientes } from "../models/clients.js";
import { Op } from "sequelize";

// Obtener todos los clientes
export const getClients = async (req, res) => {
  try {
    const clients = await Clientes.findAll();
    res.json(clients);
  } catch (error) {
    console.error("Error getting all clients:", error);
    res.status(500).json({ message: "Error getting all clients", error });
  }
};

// Obtener un cliente por su id
export const getOneClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Clientes.findByPk(id);
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ message: "Cliente no encontrado" });
    }
  } catch (error) {
    console.error("Error obteniendo el cliente:", error);
    res.status(500).json({ message: "Error obteniendo el cliente", error });
  }
};

// Buscar cliente por número telefónico o correo electrónico
export const findClientByPhoneOrEmail = async (req, res) => {
  try {
    const { NUMERO_TELEFONO, CORREO } = req.body;
   
    const client = await Clientes.findOne({
      where: {
        [Op.or]: [{ NUMERO_TELEFONO }, { CORREO }],
      },
    });

    if (client) {
      res.json(client);
    } else {
      res.status(202).json({ message: "Cliente no encontrado" });
    }
  } catch (error) {
    console.error("Error buscando el cliente:", error);
    res.status(500).json({ message: "Error buscando el cliente", error });
  }
};

// Crear un nuevo cliente
export const createClient = async (req, res) => {
  try {
    const {
      NOMBRE,
      APELLIDOS,
      DIRECCION,
      LOCALIDAD,
      id_cp,
      NUMERO_TELEFONO,
      CORREO,
      TIPO_DE_PLAN,
      status,
    } = req.body;

    // Verificar si ya existe un cliente con el mismo número telefónico o correo electrónico
    const existingClient = await Clientes.findOne({
      where: {
        [Op.or]: [{ NUMERO_TELEFONO }, { CORREO }],
      },
    });

    if (existingClient) {
      return res
        .status(400)
        .json({
          message:
            "El cliente ya está registrado con ese número telefónico o correo electrónico",
        });
    }

    // Crear un nuevo cliente
    const newClient = await Clientes.create({
      NOMBRE,
      APELLIDOS,
      DIRECCION,
      LOCALIDAD,
      id_cp,
      NUMERO_TELEFONO,
      CORREO,
      TIPO_DE_PLAN,
      status,
    });

    res.json(newClient);
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(500).json({ message: "Error creating client", error });
  }
};

// Actualizar un cliente existente
export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      NOMBRE,
      APELLIDOS,
      DIRECCION,
      LOCALIDAD,
      id_cp,
      NUMERO_TELEFONO,
      CORREO,
      TIPO_DE_PLAN,
      status,
    } = req.body;

    const client = await Clientes.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    client.NOMBRE = NOMBRE || client.NOMBRE;
    client.APELLIDOS = APELLIDOS || client.APELLIDOS;
    client.DIRECCION = DIRECCION || client.DIRECCION;
    client.LOCALIDAD = LOCALIDAD || client.LOCALIDAD;
    client.id_cp = id_cp || client.id_cp;
    client.NUMERO_TELEFONO = NUMERO_TELEFONO || client.NUMERO_TELEFONO;
    client.CORREO = CORREO || client.CORREO;
    client.TIPO_DE_PLAN = TIPO_DE_PLAN || client.TIPO_DE_PLAN;
    client.status = status || client.status;

    await client.save();

    res.json(client);
  } catch (error) {
    console.error("Error updating client:", error);
    res.status(500).json({ message: "Error updating client", error });
  }
};

// Eliminar un cliente
export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Clientes.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    await client.destroy();

    res.json({ message: "Cliente eliminado exitosamente" });
  } catch (error) {
    console.error("Error deleting client:", error);
    res.status(500).json({ message: "Error deleting client", error });
  }
};
