import { Router } from 'express';
import {
  addContactController,
  getAllContactsController,
  getContactByIdController,
  upsertContactController,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(getContactByIdController));

contactsRouter.post('/', ctrlWrapper(addContactController));

contactsRouter.put('/:contactId', ctrlWrapper(upsertContactController));

export default contactsRouter;
