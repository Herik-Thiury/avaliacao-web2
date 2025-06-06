import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <Image
              src="/logo1.png"
              alt="Logo da Digital Store"
              width={40}
              height={40}
              className="d-inline-block align-text-top me-2"
            />
            Digital Store
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link active" aria-current="page">
                  Produtos
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/carrinho" legacyBehavior>
                <a className="nav-link">Carrinho</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contato" legacyBehavior>
                <a className="nav-link">Contato</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
