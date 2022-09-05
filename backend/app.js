const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./server/routes");
const errorHandler = require("./server/middlewares/errorHandler");
const PORT = process.env.PORT || 4000;
const swaggerUI = require("swagger-ui-express");
const docsRouter = require("./api-docs/routes/docsRoute");

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);

/**
 * @Routes /api
 * entrypoint for all API routes
 */

app.use("/api", apiRouter);
app.use("/api-docs", docsRouter);

const options = {
  explorer: false,
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "Challenge Chapter 8 - API Documentation",
  swaggerOptions: {
    urls: [
      {
        url: "/api-docs/swagger.json",
        name: "Swagger Document",
      },
      {
        url: "/api-docs/players.json",
        name: "Players",
      },
    ],
  },
};

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(undefined, options));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
