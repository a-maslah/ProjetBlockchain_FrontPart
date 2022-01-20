import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlockchainService from "../services/BlockchainService";
import "../styles/blockchain.css";

function BlockChains() {
    const [blockchains, setBlockchains] = useState([]);
    useEffect(() => {
        BlockchainService.getBlockchains()
            .then((response) => {
                console.log(response.data);
                setBlockchains(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container">
            <div>
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>
                                    <b>Blockchain Plateforme</b>
                                </h2>
                            </div>
                            <div className="col-sm-6">
                                <Link
                                    to="/blockchain/add"
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                >
                                    <span>ajouter Blockchain</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Nom</th>
                                <th>miningReward</th>
                                <th>Dificulty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blockchains &&
                                blockchains.map((blockchain, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{blockchain.name}</td>
                                            <td>{blockchain.miningReward}</td>
                                            <td>{blockchain.difficulty}</td>
                                            <td>
                                                <Link
                                                    to={`/blockchain/${blockchain.id}`}
                                                    className="btn btn-info text-light"
                                                >
                                                    Voir blocks
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BlockChains;
