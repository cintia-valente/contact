import axios from "axios";
import { error } from "console";
import React, { useEffect, useState } from "react";
import { ContactModel, UserModel } from "../../data/interfaces";

function User() {

    const [users, setUsers] = useState<UserModel[]>([]);

    useEffect(() => {
        axios.get<UserModel[]>("http://localhost:3000/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log("Erro ao listar os dados do usuários", error);
            });
    }, []);

    return (
        <div className="text-center m-5">

             <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a className="btn btn-primary" role="button">Adicionar novo usuário</a>
            </div>

            <h1 className="display-4">Lista de usuários</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Login</th>
                        <th scope="col">Email</th>
                        <th scope="col">Perfil</th>
                        <th scope="col">Data de cadastro</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: UserModel) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.login}</td>
                            <td>{user.email}</td>
                            <td>{user.profile}</td>  
                            <td>{user.registrationDate}</td>
                            <td>
                                <div className="btn-group" role="group">
                                    <button className="btn btn-primary">Editar</button>
                                    <button className="btn btn-danger">Apagar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;
