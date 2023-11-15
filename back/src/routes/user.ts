const { Router } = require("express");
import { Request, Response } from "express";
const router = Router();

import CreateClient from "../app/User/CreateUser";
import GetAllUsers from "../app/User/GetAllUsers";
import UpdateUser from "../app/User/UpdateUser";
import DeleteUser from "../app/User/DeleteUser";
import { LocaleLinguage } from "../typings";

router.post("/", async (request: Request, response: Response) => {
  try {
    const { name, email } = request.body as {
      name: string;
      email: string;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await CreateClient.execute({
      name,
      email,
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
    const result = await GetAllUsers.execute();

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

router.put("/", async (request: Request, response: Response) => {
  try {
    const { id, name, email} = request.body as {
      id: number;
      name: string;
      email: string;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await UpdateUser.execute({
      id,
      name,
      email,
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

    const result = await DeleteUser.execute({
      id,
      locale,
    });

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

export default router;
