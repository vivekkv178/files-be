const express = require("express");
const service = require("./service");
const router = express.Router();

/**
 * @openapi
 * /files/get-files:
 *   get:
 *     summary: Get All the Files of the user.
 *     tags: [Open API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Files'
 *     responses:
 *       200:
 *         description: The Files were successfully fetched.
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
 *         description: An error occurred while adding the Files.
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
router.get("/get-files", service);

module.exports = router;
