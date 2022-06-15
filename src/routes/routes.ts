import { Request, Response, Router } from "express";

import { EstimatePricesController } from "./../modules/uberEstimate/EstimatePricesController";

const router = Router();

const estimatePricesController = new EstimatePricesController();

//API ROUTES
//AUTH AND OTHER THINS ABOUT USER
router.get(
  "/api/get-prices/:dropoff/:pickup",
  estimatePricesController.getPricesUber
);

router.get("/api", async (request: Request, response: Response) => {
  return response.json({ success: "ok" }).status(200);
});

export default router;