const express = require('express');
const emprestimoController = require('../controllers/emprestimoController');

const router = express.Router();

// Rotas para operações de empréstimos
router.post('/', emprestimoController.registrarEmprestimo);
router.get('/', emprestimoController.listarEmprestimos);
router.post('/:id/devolucao', emprestimoController.registrarDevolucao);

module.exports = router;
