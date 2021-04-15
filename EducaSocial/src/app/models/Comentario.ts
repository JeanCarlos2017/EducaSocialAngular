import { User } from "./User";

export class Comentario{
    id_comentario: number;
	texto: string;
	data_comentario: Date;
	foto: string;
	usuario: User;
}