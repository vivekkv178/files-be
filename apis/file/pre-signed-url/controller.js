const express = require("express");
const service = require("./service");
const router = express.Router();

/**
 * @openapi
 * /files/pre-signed-url/{fileName}:
 *   get:
 *     summary: Get Pre Signed URL
 *     tags: [Open API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PreSignedUrl'
 *     responses:
 *       200:
 *         description: The PreSignedUrl was successfully added.
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
 *         description: An error occurred while adding the PreSignedUrl.
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
router.get("/pre-signed-url/:fileName", service);

module.exports = router;
