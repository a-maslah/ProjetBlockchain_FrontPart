import axios from "axios";

const API_BASE_URL = "http://localhost:8082/blockchain";

class BlockchainService {
    getBlockchains() {
        return axios.get(API_BASE_URL + "/allblockchain");
    }
    addBlockchain(blockchain) {
        return axios.post(API_BASE_URL + "/create", blockchain);
    }

    getBlocksById(id) {
        return axios.get(API_BASE_URL + "/" + id);
    }
    mineBlock(data) {
        return axios.post(API_BASE_URL + "/mineblock", data);
    }
}
export default new BlockchainService();
