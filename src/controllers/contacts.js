import createHttpError from 'http-errors';

import * as contactServices from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  const data = await contactServices.getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const data = await contactServices.getContactById(contactId);

  if (!data) {
    throw createHttpError(404, `Contact with id=${contactId} not found`);
  }

  res.json({
    status: 200,
    message: `Contact with ${contactId} successfully find`,
    data,
  });
};

export const addContactController = async (req, res) => {
  const data = await contactServices.createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data,
  });
};

export const upsertContactController = async (req, res) => {
  const { contactId } = req.params;
  const { isNew, data } = await contactServices.updateContact(
    { _id: contactId },
    req.body,
    { upsert: true },
  );
  const status = isNew ? 201 : 200;
  res.status(status).json({
    status,
    message: 'Successfully patched a contact!',
    data,
  });
};
