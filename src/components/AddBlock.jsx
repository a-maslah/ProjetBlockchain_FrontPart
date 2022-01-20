import React, { useState } from "react";
import BlockchainService from "../services/BlockchainService";

function AddBlock({ match }) {
    const [data, setData] = useState({
        blockchainID: "",
        pres_hash: "000999321654",
        min_adr: "112233",
        addressSource: "000032165411",
        addressDestination: "",
        amount: "0",
    });

    React.useEffect(() => {
        if (match?.params?.id) {
            console.log(match.params);
            setData({ ...data, blockchainID: match.params.id });
        }
    }, []);

    const mineBlock = (e) => {
        e.preventDefault();
        console.log(data);
        const miningData = {
            blockchainID: data.blockchainID,
            previousHash: data.pres_hash,
            min_adr: data.min_adr,
            transactions: [
                {
                    addressSource: "0035464992",
                    addressDestination: data.addressDestination,
                    amount: data.amount,
                },
            ],
        };
        BlockchainService.mineBlock(miningData)
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="  container mt-4  ">
            <div className="">
                <div className="modal-content">
                    <div className="modal-header bg-warning">
                        <h4 className="modal-title">Mine Block</h4>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Amount</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.amount}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        amount: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Your Addresse</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.addressSource}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        addressSource: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Destination Addresse</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.addressDestination}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        addressDestination: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={mineBlock}>
                            save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlock;
