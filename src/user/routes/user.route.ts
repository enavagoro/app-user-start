import { Router } from 'express';
import { list, insert, update, deleteEntity, getById, passwordRecovery, newPasswordByToken } from '../controllers/user.controller';
import { requestValidatorWrapper } from '../../shared/middlewares/requestValidatorMiddleware/requestValidator.middleware';
import { validJWTNeeded } from '../../shared/middlewares/jwt.validation.middleware';

class UserRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', validJWTNeeded, list);
        this.router.post('/', requestValidatorWrapper('userStructure'), insert);
        this.router.post('/passwordRecovery', passwordRecovery);
        this.router.post('/newPasswordByToken', newPasswordByToken)
        this.router.patch('/:id', validJWTNeeded,update); 
        this.router.delete('/:id', validJWTNeeded, deleteEntity);
        this.router.get('/:id', getById);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;