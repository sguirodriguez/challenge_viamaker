const { Router } = require("express");
import { Request, Response } from "express";
import { LocaleLinguage } from "../typings";
import DeleteProduct from "src/app/Product/DeleteProduct";
const router = Router();
import CreateProduct from "../app/Product/CreateProduct";
import GetAllProducts from "../app/Product/GetAllProducts";
import UpdateProduct from "../app/Product/UpdateProduct";

router.post("/", async (request: Request, response: Response) => {
  try {
    const { name, value, description } = request.body as {
      name: string;
      description: string;
      value: number;
   
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await CreateProduct.execute({
      name,
      value,
      description,
      locale,
    });

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

router.get("/", async (_request: Request, response: Response) => {
  try {
    const result = await GetAllProducts.execute();

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

router.put("/", async (request: Request, response: Response) => {
  try {
    const { id, name, description,  value } = request.body as {
      id: number;
      name: string;
      description: string;
      value: number;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await UpdateProduct.execute({
      id,
      name,
      description,
      value,
      locale,
    });

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

router.delete("/", async (request: Request, response: Response) => {
  try {
    const { id } = request.body as {
      id: number;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await DeleteProduct.execute({ id, locale });

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

export default router;
