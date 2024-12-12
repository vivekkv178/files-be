const express = require("express");
const service = require("./service");
const router = express.Router();

/**
 * @openapi
 * /files/get-file-data/{fileId}:
 *   get:
 *     summary: Get the File Data
 *     tags: [Open API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FileData'
 *     responses:
 *       200:
 *         description: The FileData was successfully fetched.
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
 *         description: An error occurred while adding the FileData.
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
router.get("/get-file-data/:fileId", service);

module.exports = router;
