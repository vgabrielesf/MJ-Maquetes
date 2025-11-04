import React, { useState } from 'react';
import './App.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const products: Product[] = [

    {
      id: 2,
      name: "Veleiro Clássico",
      price: 0,
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop",
      description: "Elegante veleiro de dois mastros com acabamento premium",
      category: "veleiros"
    },

    {
      id: 4,
      name: "Iate Moderno",
      price: 0,
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&h=300&fit=crop",
      description: "Iate contemporâneo com design luxuoso e detalhes realistas",
      category: "modernos"
    },

    {
      id: 6,
      name: "Catamarã Esportivo",
      price: 0,
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop",
      description: "Catamarã de alta performance para competições",
      category: "modernos"
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'veleiros', name: 'Veleiros' },
    { id: 'modernos', name: 'Modernos' }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleContact = () => {
    window.location.href = '#contact';
  };

  const handleViewCollection = () => {
    window.location.href = '#products';
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>MJ Maquetes</h1>
          </div>
          <nav className="nav">
            <a href="#home">Início</a>
            <a href="#products">Produtos</a>
            <a href="#about">Sobre</a>
            <a href="#contact">Contato</a>
          </nav>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <span className="material-icons">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Maquetes de Barcos Artesanais</h2>
          <p>Coleções exclusivas com detalhamento excepcional</p>
          <button className="cta-button" onClick={handleViewCollection}>Ver Coleção</button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <h2>Nossa Coleção</h2>
          
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-footer">
                    <button 
                      className="contact-btn"
                      onClick={handleContact}
                    >
                      Entrar em Contato
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>Sobre Nós</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Há mais de 20 anos criamos maquetes de barcos com a mais alta qualidade artesanal. 
                Cada peça é cuidadosamente confeccionada por nossos mestres artesãos, garantindo 
                detalhamento excepcional e autenticidade histórica.
              </p>
              <p>
                Nossas maquetes são perfeitas para colecionadores, decoração náutica e presentes 
                especiais para amantes do mar.
              </p>
            </div>
            <div className="about-features">
              <div className="feature">
                <h4>Artesanal</h4>
                <p>Feito à mão por artesãos experientes</p>
              </div>
              <div className="feature">
                <h4>Detalhado</h4>
                <p>Precisão histórica em cada detalhe</p>
              </div>
              <div className="feature">
                <h4>Qualidade</h4>
                <p>Materiais premium e acabamento superior</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Entre em Contato</h2>
          <div className="contact-content">
            <div className="contact-form">
              <h3>Formulário de Contato</h3>
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" name="message" rows={5} placeholder="Descreva seu projeto ou dúvidas..."></textarea>
                </div>
                <button type="submit" className="submit-btn">Enviar Mensagem</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Solicite seu Orçamento</h3>
              <p>
                Entre em contato conosco para receber um orçamento personalizado. 
                Cada maquete é única e desenvolvida com base nas suas necessidades específicas.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <h4>Email</h4>
                  <p>contato@maquetesnavais.com.br</p>
                </div>
                <div className="contact-item">
                  <h4>Telefone</h4>
                  <p>(11) 99999-9999</p>
                </div>
                <div className="contact-item">
                  <h4>Localização</h4>
                  <p>Fortaleza, CE</p>
                </div>
                <div className="contact-item">
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Entre em Contato</h4>
              <p>Entre em contato para orçamentos personalizados</p>
              <p>contato@maquetesnavais.com.br</p>
              <p>(11) 99999-9999</p>
              <p>Fortaleza, CE</p>
            </div>
            <div className="footer-section">
              <h4>Nossos Serviços</h4>
              <p>Orçamentos personalizados</p>
              <p>Entrega em todo Brasil</p>
              <p>Garantia de qualidade</p>
            </div>
            <div className="footer-section">
              <h4>Redes Sociais</h4>
              <p><span className="material-icons">facebook</span> Facebook</p>
              <p><span className="material-icons">camera_alt</span> Instagram</p>
              <p><span className="material-icons">alternate_email</span> Twitter</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 MJ Maquetes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
