import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddBlock from "./components/AddBlock";
import AddBlockChain from "./components/AddBlockChain";
import BlockChains from "./components/BlockChains";
import Blocks from "./components/Blocks";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
    useEffect(() => {
        console.log("hello");
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/blockchain/getAll" component={BlockChains} />
                <Route exact path="/blockchain/add" component={AddBlockChain} />
                <Route exact path={"/blockchain/:id"} component={Blocks} />
                <Route exact path="/blockchain/mine/:id" component={AddBlock} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
