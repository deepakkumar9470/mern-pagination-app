import express from 'express'

const router = express.Router()

import {createBank,getBanks, editBank,deleteBank, getBankById} from '../controllers/bank.js'

// @/api/banks
router.get('/', getBanks)

// @/api/banks/123
router.get('/:id', getBankById)

// @/api/banks
router.post('/add', createBank)

// @/api/banks/123
router.put('/:id',editBank)

// @/api/banks/123
router.delete('/:id', deleteBank)


export default router