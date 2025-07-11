import express from "express";
import 'dotenv/config';
import './shared/services/TranslationsYup';
import { router } from './routes'; /* Aqui não preciso colocar o arquivo index.ts pois
                                      Já fica subentendido pela aplicação
                                   */


const server = express();

server.use(express.json());
server.use(router);









export { server };