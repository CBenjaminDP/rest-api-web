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
      id_cliente,
      nombre,
      apellidos,
      direccion,
      localidad,
      id_cp,
      numero_telefonico,
      correo,
      id_plan,
      status,
      tipo_de_socio,
    } = req.body;

    // Verificar si ya existe un cliente con el mismo número telefónico o correo electrónico
    const existingClient = await Clientes.findOne({
      where: {
        [Op.or]: [{ numero_telefonico }, { correo }],
      },
    });

    if (existingClient) {
      return res.status(400).json({
        message: "El cliente ya está registrado con ese número telefónico o correo electrónico",
      });
    }

    // Crear un nuevo cliente
    const newClient = await Clientes.create({
      id_cliente,
      nombre,
      apellidos,
      direccion,
      localidad,
      id_cp,
      numero_telefonico,
      correo,
      id_plan,
      status,
      tipo_de_socio,
    });

    res.status(201).json(newClient);
  } catch (error) {
    console.error("Error creando el cliente:", error);
    res.status(500).json({ message: "Error creando el cliente", error });
  }
};

// Actualizar un cliente existente
export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      apellidos,
      direccion,
      localidad,
      id_cp,
      numero_telefonico,
      correo,
      id_plan,
      status,
      tipo_de_socio,
    } = req.body;

    const client = await Clientes.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    // Verificar si ya existe otro cliente con el mismo número telefónico o correo electrónico
    const existingClient = await Clientes.findOne({
      where: {
        [Op.or]: [
          { numero_telefonico },
          { correo }
        ],
        [Op.not]: [{ id_cliente: id }],
      },
    });

    if (existingClient) {
      return res.status(400).json({
        message: "Otro cliente ya está registrado con ese número telefónico o correo electrónico",
      });
    }

    client.nombre = nombre || client.nombre;
    client.apellidos = apellidos || client.apellidos;
    client.direccion = direccion || client.direccion;
    client.localidad = localidad || client.localidad;
    client.id_cp = id_cp || client.id_cp;
    client.numero_telefonico = numero_telefonico || client.numero_telefonico;
    client.correo = correo || client.correo;
    client.id_plan = id_plan || client.id_plan;
    client.status = status || client.status;
    client.tipo_de_socio = tipo_de_socio || client.tipo_de_socio;

    await client.save();

    res.json(client);
  } catch (error) {
    console.error("Error actualizando el cliente:", error);
    res.status(500).json({ message: "Error actualizando el cliente", error });
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
