import { User } from "./user";

export class Comentario{
    id_comentario: number;
	texto: string;
	data_comentario: Date;
	foto: string;
	usuario: User;
}