export class Utilisateur {
    id: number;
    login: string;
    password: string;

    constructor(login?: string, password?: string) {
        this.login = login;
        this.password = password;
    }
}
