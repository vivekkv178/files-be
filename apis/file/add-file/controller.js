const express = require("express");
const service = require("./service");
const router = express.Router();

/**
 * @openapi
 * /files/add-file:
 *   post:
 *     summary: Adds File record in Mongo DB
 *     tags: [Open API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/File'
 *     responses:
 *       200:
 *         description: The File was successfully added.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *       500:
 *         description: An error occurred while adding the File.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 */
router.post("/add-file", service);

module.exports = router;
