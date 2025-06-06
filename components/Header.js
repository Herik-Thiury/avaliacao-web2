import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    // Navbar com cores escuras e fundo mais escuro (ex: bg-dark, navbar-dark)
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        {/* Link da Marca com a logo e nome, usando Link e Image do Next.js */}
        <Link href="/" legacyBehavior>
          <a className="navbar-brand d-flex align-items-center"> {/* Use d-flex e align-items-center para alinhamento */}
            <Image
              src="/logo1.png"
              alt="Logo da Digital Store"
              width={40}
              height={40}
              className="d-inline-block align-text-top me-2"
            />
            <span className="fw-bold text-white">Digital Store</span> {/* Nome da Marca em branco e negrito */}
          </a>
        </Link>

        {/* Botão para o menu responsivo (hambúrguer) */}
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

        {/* Conteúdo do menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> {/* me-auto para empurrar busca e nav para o centro/direita */}
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link text-white active" aria-current="page"> {/* Links em branco */}
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

          {/* Barra de Busca Simbólica */}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar produtos..." aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Buscar</button> {/* Botão de busca com cor clara */}
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;