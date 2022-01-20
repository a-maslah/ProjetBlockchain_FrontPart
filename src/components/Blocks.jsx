import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Blocks({ match }) {
    const [blocks, setBlocks] = useState({});

    React.useEffect(() => {
        if (match?.params?.id) {
            console.log(match.params);
            axios
                .get("http://localhost:8082/blockchain/" + match.params.id)
                .then((resp) => {
                    console.log(resp.data);
                    setBlocks(resp.data);
                })
                .catch((err) => console.log(err));
        }
    }, []);

    return (
        <div className="container">
            <div>
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>
                                    Blockchain <b>{blocks.nom}</b>
                                </h2>
                            </div>
                            <div className="col-sm-6">
                                <Link
                                    to={`/blockchain/mine/${blocks.id}`}
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                >
                                    <span>Mine Block</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>nonce</th>
                                <th>Previous Hash</th>
                                <th>Block Hash</th>
                                <th>Amount</th>
                                <th>Source </th>
                                <th>Desctination </th>
                            </tr>
                        </thead>
                        <tbody>
                            {blocks.blocks &&
                                blocks.blocks.map((block, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{block.nonce}</td>
                                            <td>
                                                {block.hash.slice(0, 20)}...
                                            </td>
                                            <td>
                                                {block.previousHash.slice(0, 20)}
                                                ...
                                            </td>
                                            {block.transactions ? (
                                                block.transactions.map(
                                                    (transaction) => {
                                                        return (
                                                            <>
                                                                <td>
                                                                    {
                                                                        transaction.amount
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        transaction.addressSource
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        transaction.addressDestination
                                                                    }
                                                                </td>
                                                            </>
                                                        );
                                                    }
                                                )
                                            ) : (
                                                <>
                                                    <td>0</td>
                                                    <td></td>
                                                    <td></td>
                                                </>
                                            )}
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

export default Blocks;
