import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links, social } from "../data";
import "../styles/blockchain.css";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linklenght = linksRef.current.getBoundingClientRect().height;
        console.log(linklenght);

        if (showLinks) {
            linksContainerRef.current.style.height = linklenght + "px";
        } else {
            linksContainerRef.current.style.height = "0px";
        }
    }, [showLinks]);
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
  <Link class="navbar-brand" to="/blockchain/getAll">Blockchain Project</Link>
 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Liste Blockchain </a>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/blockchain/add">Ajouter Blockchain</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Mine Block
        </a>
      </li>
    </ul>
  </div>
  <div className="links-container " ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
</nav>
    );
};

export default Navbar;
