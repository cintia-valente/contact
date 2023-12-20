import axios from "axios";
import { error } from "console";
import React, { useEffect, useState } from "react";
import { ContactModel, UserModel } from "../../data/interfaces";

function Contact() {

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
                <a className="btn btn-primary" role="button">Adicionar novo contato</a>
            </div>

            <h1 className="display-4">Lista de contatos</h1>
            {users.map((user: UserModel) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.contacts?.map((contact: ContactModel) => (
                                <tr key={contact.id}>
                                    <th scope="row">{contact.id}</th>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phoneNumber}</td>
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
            ))}
        </div>
    );
}

export default Contact;
