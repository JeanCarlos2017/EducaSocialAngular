import { Grupo } from "./Grupo";

export class User {
    public id_usuario: number;
	public email: string;
	public senha: string;
	public nome: string;
	public url_foto: string;
	public codigo_usuario: string;
	public gruposCriadoPeloUsuario: Grupo[];
	public gruposUsuarioParticipa: Grupo[];
}