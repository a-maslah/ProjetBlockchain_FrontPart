import React, { useState } from "react";
import BlockchainService from "../services/BlockchainService";
import "../styles/blockchain.css";

function AddBlockChain() {
    const [blockchain, setBlockchain] = useState({
        name: "",
        difficulty: 3,
        reward: 7,
    });

    const saveBlockChain = (e) => {
        e.preventDefault();
        console.log(blockchain);
        BlockchainService.addBlockchain(blockchain)
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => console.log(err));
        setBlockchain({ name: "", difficulty: 2, reward: 2 });
    };

    return (
        <div className="  container mt-4  ">
            <div className="">
                <div className="modal-content">
                    <div className="modal-header bg-warning">
                        <h4 className="modal-title">Ajouter Blockchain</h4>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={blockchain.name}
                                onChange={(e) =>
                                    setBlockchain({
                                        ...blockchain,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Dificulty</label>
                            <input
                                type="text"
                                className="form-control"
                                value={blockchain.difficulty}
                                onChange={(e) =>
                                    setBlockchain({
                                        ...blockchain,
                                        difficulty: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Reward</label>
                            <input
                                type="text"
                                className="form-control"
                                value={blockchain.reward}
                                onChange={(e) =>
                                    setBlockchain({
                                        ...blockchain,
                                        reward: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-primary"
                            onClick={saveBlockChain}
                        >
                            save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlockChain;
