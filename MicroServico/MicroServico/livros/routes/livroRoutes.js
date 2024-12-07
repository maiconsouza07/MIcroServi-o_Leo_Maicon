const express = require('express');
const livroController = require('../controllers/livroController');

const router = express.Router();

// Rotas para operações de livro
router.post('/', livroController.cadastrarLivro);
router.get('/', livroController.listarLivros);
router.get('/:id', livroController.buscarLivroPorId);
router.patch('/:id', livroController.atualizarDisponibilidade);

module.exports = router;
