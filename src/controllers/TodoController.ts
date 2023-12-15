import { Request, Response } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";
import CreateApiResponse from "../utils/Response";

class TodoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todos = await service.getAll();

        return res.send(CreateApiResponse.createApiResponse("all todos retrieved successfully", todos, "success"));
    }

    create = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.store();

        return res.send(CreateApiResponse.createApiResponse("todo successfully created", todo, "success"));
    }

    show = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.getOne();

        return res.send(CreateApiResponse.createApiResponse("todo retrieved", todo, "success"));
    }

    update = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.update();

        return res.send(CreateApiResponse.createApiResponse("todo updated", todo, "success"));
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.delete();

        return res.send(CreateApiResponse.createApiResponse("todo deleted", todo, "success"));
    }
}

export default new TodoController();