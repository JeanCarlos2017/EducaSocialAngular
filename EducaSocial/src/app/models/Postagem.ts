import { Comentario } from "./Comentario";
import { Tema } from "./Tema";
import { User } from "./user";



export class Postagem{
    id_postagem: number;
	usuario: User;
	titulo: string;
	data_postagem: Date;
	imagem: string;
	saldo_reacoes: number;
	temaList: Tema[];
	comentarioList: Comentario[];
	conteudo: string;
}