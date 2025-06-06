import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand d-flex align-items-center">
            <Image
              src="/logo1.png"
              alt="Logo da Digital Store"
              width={40}
              height={40}
              className="d-inline-block align-text-top me-2"
            />
            <span className="fw-bold text-white">Digital Store</span>
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link text-white active" aria-current="page">
                  Produtos
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/carrinho" legacyBehavior>
                <a className="nav-link text-white">Carrinho</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contato" legacyBehavior>
                <a className="nav-link text-white">Contato</a>
              </Link>
            </li>
          </ul>

          
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar produtos..."
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
