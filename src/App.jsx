import React, { useState, useEffect } from 'react'; // Importar useState
import './App.css'
import { FaJs, FaJava, FaPython, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaAws, FaGoogle, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiPostman, SiTrello, SiFigma } from 'react-icons/si';
import { DiVisualstudio } from "react-icons/di"; // CORRECTO: Para Visual Studio Code
import { TbApi } from "react-icons/tb";
import { IoGitBranchOutline, IoClose } from "react-icons/io5"; // Agregamos IoClose
import { RxHamburgerMenu } from "react-icons/rx"; // Importar el icono de hamburguesa 

  // NUEVOS IMPORTS DE ICONOS
import { MdDateRange } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { MdOutlineTaskAlt } from "react-icons/md";
import { PiCertificate } from "react-icons/pi"; // Importar el icono de certificado

  function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio'); 
    
    // --- NUEVO ESTADO PARA EL MODAL DE VIDEO ---
    const [selectedVideo, setSelectedVideo] = useState(null); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Función para abrir el modal
    const openVideoModal = (videoId) => {
        setSelectedVideo(videoId);
    };

    // Función para cerrar el modal
    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    // useEffect para el scrollspy  
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        

        const activateNavLink = () => {
            let currentSectionId = '';
            // Offset ajustado para que el cambio sea más fluido y no al borde de la sección
            const offset = 100; // Puedes ajustar este valor en píxeles, e.g., el alto de tu header sticky

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                // Comprueba si el scroll está dentro de la sección actual
                if (window.scrollY >= sectionTop - offset && window.scrollY < sectionTop + sectionHeight - offset) {
                    currentSectionId = section.id;
                }
            });

            // Actualiza el estado de la sección activa
            setActiveSection(currentSectionId);
        };

        // Añadir el listener para el scroll
        window.addEventListener('scroll', activateNavLink);
        // Llamar una vez al cargar para establecer la sección inicial
        activateNavLink();

        // Limpieza: Remover el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', activateNavLink);
        };
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

    // Función para manejar el clic en los enlaces de navegación
    const handleNavLinkClick = (e, sectionId) => {
        e.preventDefault(); // Previene el comportamiento por defecto del ancla
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
            // Actualiza el estado de la sección activa inmediatamente al hacer clic
            setActiveSection(sectionId);
            // Cierra el menú hamburguesa si está abierto
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        }
    };

    return (
      <>
        {/* HEADER y NAVEGACIÓN */}
        <header>
          <nav className="navbar">
            <h1>Tomas Spirito</h1>
            <div className="menu-icon" onClick={toggleMenu}>
              <RxHamburgerMenu />
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li><a href="#inicio" className={activeSection === 'inicio' ? 'active' : ''} onClick={(e) => handleNavLinkClick(e, 'inicio')}>Inicio</a></li>
              <li><a href="#sobre-mi" className={activeSection === 'sobre-mi' ? 'active' : ''} onClick={(e) => handleNavLinkClick(e, 'sobre-mi')}>Sobre Mí</a></li>
              <li><a href="#habilidades" className={activeSection === 'habilidades' ? 'active' : ''} onClick={(e) => handleNavLinkClick(e, 'habilidades')}>Habilidades</a></li>
              <li><a href="#proyectos" className={activeSection === 'proyectos' ? 'active' : ''} onClick={(e) => handleNavLinkClick(e, 'proyectos')}>Proyectos</a></li>
              <li><a href="#experiencia" className={activeSection === 'experiencia' ? 'active' : ''} onClick={(e) => handleNavLinkClick(e, 'experiencia')}>Experiencia</a></li>
              <li><a href="#educacion" className={activeSection === 'educacion' ? 'active' : ''} onClick={(e) => handleNavLinkClick(e, 'educacion')}>Educación</a></li>
              <li><a href="#contacto" className={activeSection === 'contacto' ? 'active' : ''} onClick={(e) => handleNavLinkClick(e, 'contacto')}>Contacto</a></li>
            </ul>
          </nav>
        </header>

        {/* SECCIÓN DE INICIO */}
        <section id="inicio">
          <div className="section-content hero-section-content"> {/* Añadimos una clase específica */}
            <div className="hero-text-container"> {/* Contenedor para el texto */}
              <h1 className="hero-greeting">Hola <span className="wave-emoji" role="img" aria-label="mano saludando">&#128075;</span></h1>
              {/* MODIFICACIÓN AQUÍ: Dividimos el h2 en <span> para "Soy" y otro para "Tomas Spirito" */}
              <h2 className="hero-name">Soy <span className="highlight-name">Tomas Spirito</span></h2> {/* Nueva clase para el nombre destacado */}
              <p className="hero-title">Desarrollador Web</p> {/* Nueva clase para el p */}
              {/* NUEVO: Agregamos el párrafo de introducción */}
              <p className="hero-description">Estoy en constante búsqueda de aprender y crecer profesionalmente en el campo tecnológico.</p>
            </div>

            {/* Contenedor para la imagen */}
            <div className="hero-image-wrapper"> {/* Nuevo contenedor para la imagen y el círculo */}
                    <img src="/src/assets/cv22.jpg" alt="Tu foto de perfil" className="hero-profile-image" /> {/* Nueva clase para la imagen */}
            </div>
          </div>
        </section>

        {/* SECCIÓN SOBRE MÍ */}
        <section id="sobre-mi">
          <div className="section-content">
              <h2>Sobre Mí</h2>
              <p className="about-personal-info">Tomas Ariel Spirito | 22 años | Argentino</p>

              {/* Primer párrafo */}
              <p className="about-paragraph">
                  Soy Licenciado en Gestión de Tecnología de la Información, con una profunda vocación por el desarrollo de software, la resolución de problemas y el aprendizaje constante. A lo largo de mi formación y experiencia profesional, he participado en proyectos que me han permitido aplicar buenas prácticas de desarrollo, colaborar en equipo y enfrentar desafíos técnicos con responsabilidad y compromiso.
              </p>

              {/* Segundo párrafo - Aspectos personales */}
              <p className="about-paragraph">
                  Más allá del ámbito profesional, me considero una persona tranquila y sociable. Disfruto del fútbol, compartir momentos con amigos y mantener un estilo de vida ordenado. La disciplina y la organización son valores que aplico tanto en mi vida cotidiana como en mis proyectos, ya que creo que tener metas claras y trabajar con constancia es fundamental para lograr lo que uno se propone.
              </p>

              {/* Tercer párrafo - Cierre/Visión */}    
              <p className="about-paragraph"> 
                  Estoy convencido de que el crecimiento profesional va de la mano del crecimiento personal. Por eso, siempre busco mantener el equilibrio entre lo técnico y lo humano, con el objetivo de seguir aprendiendo, aportar valor a cada equipo en el que participe y construir un camino sólido dentro del mundo de la tecnología.
              </p>
          </div>
        </section>

        {/* NUEVA SECCIÓN: Habilidades y Tecnologías */}
        <section id="habilidades" className="skills-section"> {/* Añadimos una nueva clase para estilos específicos */}
          <div className="section-content"> {/* Envuelve el contenido para el centrado */}
            <h2 className="skills-title">Habilidades y Tecnologías</h2> {/* Título de la sección, con clase para color */}
            <div className="skills-grid"> {/* Contenedor para las tarjetas de habilidades */}

              {/* Languages & Frameworks */}
              <div className="skills-category-card">
                <h3>Lenguajes y Frameworks</h3>
                <div className="skill-list">
                  {/* HTML */}
                  <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><FaHtml5 className="skill-icon" /><span>HTML</span></div>
                  </a>
                  {/* CSS */}
                  <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><FaCss3Alt className="skill-icon" /><span>CSS</span></div>
                  </a>
                  {/* JavaScript */}
                  <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><FaJs className="skill-icon" /><span>JavaScript</span></div>
                  </a>
                  {/* React */}
                  <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><FaReact className="skill-icon" /><span>React</span></div>
                  </a>
                  {/* Node.js */}
                  <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><FaNodeJs className="skill-icon" /><span>Node.js</span></div>
                  </a>
                  {/* Spring Boot */}
                  <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><SiSpringboot className="skill-icon" /><span>Spring Boot</span></div>
                  </a>
                  {/* Java */}
                  <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><FaJava className="skill-icon" /><span>Java</span></div>
                  </a>
                  {/* Python */}
                  <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><FaPython className="skill-icon" /><span>Python</span></div>
                  </a>
                </div>
              </div>

              {/* Databases */}
              <div className="skills-category-card">
                <h3>Bases de Datos</h3>
                <div className="skill-list">
                  {/* MySQL */}
                  <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><SiMysql className="skill-icon" /><span>MySQL</span></div>
                  </a>
                  {/* MongoDB */}
                  <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><SiMongodb className="skill-icon" /><span>MongoDB</span></div>
                  </a>
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="skills-category-card">
                <h3>Herramientas y Plataformas</h3>
                <div className="skill-list">
                  {/* API REST - No hay un sitio web oficial global, se podría enlazar a una buena documentación o un artículo clave */}
                  <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><TbApi className="skill-icon" /><span>API REST</span></div>
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><FaGithub className="skill-icon" /><span>GitHub</span></div>
                  </a>
                  {/* Git */}
                  <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><IoGitBranchOutline className="skill-icon" /><span>Git</span></div>
                  </a>
                  {/* Postman */}
                  <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><SiPostman className="skill-icon" /><span>Postman</span></div>
                  </a>
                  {/* VS Code */}
                  <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><DiVisualstudio className="skill-icon" /><span>VS Code</span></div>
                  </a>
                  {/* Google Cloud */}
                  <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><FaGoogle className="skill-icon" /><span>Google Cloud</span></div>
                  </a>
                  {/* Trello */}
                  <a href="https://trello.com/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><SiTrello className="skill-icon" /><span>Trello</span></div>
                  </a>
                  {/* Figma */}
                  <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="skill-link">
                    <div className="skill-item"><SiFigma className="skill-icon" /><span>Figma</span></div>
                  </a>
                </div>
              </div>

              {/* Languages (Human) - Estos no necesitan enlace */}
              <div className="skills-category-card">
                <h3>Idiomas</h3>
                <div className="skill-list">
                  <div className="skill-item"><span>Español Nativo</span></div>
                  <div className="skill-item"><span>Inglés Intermedio</span></div>
                </div>
              </div>

            </div>
          </div>
        </section> {/* FIN de la NUEVA SECCIÓN: Habilidades y Tecnologías */}

        {/* NUEVA SECCIÓN: Proyectos Destacados */}
        <section id="proyectos" className="projects-section">
          <div className="section-content">
            <h2 className="skills-title">Proyectos Destacados</h2>
            <div className="projects-grid">

              {/* PROYECTO 1: Cookify */}
              <div className="project-card">
                <div className="project-image-container">
                  {/* IFRAME DE YOUTUBE CON TU VIDEO */}
                  <iframe 
                    className="project-video"
                    src="https://www.youtube.com/embed/ayX14vkiY1g?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=ayX14vkiY1g"
                    title="Cookify Demo" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                  
                  <div className="project-overlay">
                    {/* MODIFICADO: Ahora es un botón que abre el modal interno */}
                    <button 
                        onClick={() => openVideoModal("ayX14vkiY1g")} 
                        className="project-btn"
                        style={{border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9em'}}
                    >
                      <FaExternalLinkAlt /> Ver Demo Completa
                    </button>
                    
                    {/* Botones de Repositorios (se mantienen igual) */}
                    <div className="project-links-row">
                        <a href="https://github.com/delfinapiendii/Cookify-Front" target="_blank" rel="noopener noreferrer" className="project-btn outline small">
                        <FaGithub /> Front
                        </a>
                        <a href="https://github.com/alqui2002/turnitos" target="_blank" rel="noopener noreferrer" className="project-btn outline small">
                        <FaGithub /> Back
                        </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
                  <h3>Cookify - App de Recetas</h3>
                  <p>
                    Aplicación móvil para descubrir y compartir recetas. Desarrollada como Proyecto Final universitario (UADE). 
                    Cuenta con modo invitado, filtros, creación de recetas y gestión de perfil.
                    Diseñada en Figma y gestionada con Trello.
                  </p>
                  <div className="project-tech-stack">
                    <span title="React Native"><FaReact /></span>
                    <span title="Node.js"><FaNodeJs /></span>
                    <span title="MySQL"><SiMysql /></span>
                    <span title="Figma"><SiFigma /></span>
                    <span title="Trello"><SiTrello /></span>
                  </div>
                </div>
              </div>

              {/* PROYECTO 2: Portfolio Personal */}
              <div className="project-card">
                <div className="project-image-container">
                  <img src="/src/assets/cv22.jpg" alt="Portfolio Personal" className="project-image" />
                  <div className="project-overlay">
                    <a href="#" className="project-btn">
                      <FaExternalLinkAlt /> Estás aquí
                    </a>
                    <a href="https://github.com/TomasSpirito/my-portfolio" target="_blank" rel="noopener noreferrer" className="project-btn outline">
                      <FaGithub /> Código
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>Portfolio Personal</h3>
                  <p>Diseño moderno y responsivo para presentar mi trayectoria profesional. Implementación de modo oscuro, animaciones suaves y componentes reutilizables.</p>
                  <div className="project-tech-stack">
                    <span title="React"><FaReact /></span>
                    <span title="CSS3"><FaCss3Alt /></span>
                    <span title="Vite"><DiVisualstudio /></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: Experiencia Laboral */}
        <section id="experiencia">
            <div className="section-content">
                <h2 className="skills-title">Experiencia Laboral</h2>
                <div className="timeline">
                    {/* VIVATIA */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            {/* Fecha con icono */}
                            <div className="job-meta-item">
                                <MdDateRange className="job-meta-icon" />
                                <p className="job-date">08/2025 - Actualidad</p>
                            </div>

                            {/* Contenedor para la imagen y el título */}
                            <div className="job-header">
                                {/* Asegúrate de que la ruta de la imagen sea correcta */}
                                <img src="/src/assets/vivatia_logo.jpeg" alt="Vivatia Logo" className="job-logo" />
                                <p className="job-title">VIVATIA</p>
                            </div>
                            <p className="job-subtitle">Desarrollador Junior</p>
                        
                            {/* Tareas realizadas con icono */}
                            <div className="job-meta-item">
                                <MdOutlineTaskAlt className="job-meta-icon" />
                                <ul className="job-description">
                                    <li>Mantenimiento de plataformas críticas (Thuban, Captika) para clientes financieros.</li>
                                    <li>Análisis y resolución de incidentes mediante logs y trazas.</li>
                                    <li>Desarrollo backend y ajustes funcionales en Java.</li>
                                    <li>Migraciones, actualización de entornos y consultas SQL.</li>
                                    <li>Configuración y soporte de módulos de autenticación y seguridad.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* INTEGRACION DE SISTEMAS - PROYECTO NGAUS */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            {/* Fecha con icono */}
                            <div className="job-meta-item">
                                <MdDateRange className="job-meta-icon" />
                                <p className="job-date">10/2024 - 12/2024</p>
                            </div>
                            {/* Contenedor para la imagen y el título */}
                            <div className="job-header">
                                {/* Usa una imagen de un logo genérico o crea uno para este proyecto si no tienes uno específico */}
                                <img src="/src/assets/NGAUS.jpg" alt="NGAUS Project Logo" className="job-logo" /> {/* */}
                                <p className="job-title">PROYECTO NGAUS</p>
                            </div>
                            <p className="job-subtitle">Freelance Developer Fullstack</p>

                            

                            {/* Stack técnico con icono */}
                            <div className="job-meta-item">
                                <RiStackFill className="job-meta-icon" />
                                <p className="job-tech-stack">JavaScript, Next.js, Nest.js, Svelte, AG Grid, API REST, SQL XML, Postman.</p>
                            </div>

                            {/* Tareas realizadas con icono */}
                            <div className="job-meta-item">
                                <MdOutlineTaskAlt className="job-meta-icon" />
                                <ul className="job-description">
                                    <li>Formé parte de un equipo de desarrollo en la integración de una plataforma de gestión de eventos y un sistema de administración de miembros, permitiendo la recuperación y autocompletado de datos de usuarios registrados.</li>
                                    <li>Desarrollé y optimicé endpoints en un middleware para consultar información de usuarios en una base de datos externa.</li>
                                    <li>Implementé y probé solicitudes REST en Postman.</li>
                                    <li>Diseñé e implementé un formulario dinámico con una tabla interactiva para gestionar relaciones entre datos de asistentes a eventos.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* NUEVA SECCIÓN: Educación */}
            <section id="educacion">
                <div className="section-content">
                    <h2 className="skills-title">Educación</h2>
                    <div className="timeline">
                        {/* Educación: Licenciatura en Sistemas (UADE) - PRIMERO (más reciente) */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="job-meta-item">
                                    <MdDateRange className="job-meta-icon" />
                                    <p className="job-date">2022 - 2025</p>
                                </div>
                                <div className="job-header">
                                    {/* Placeholder para la imagen de UADE */}
                                    <img src="/src/assets/uade.png" alt="UADE Logo" className="job-logo" />
                                    <p className="job-title">Licenciatura en Gestión de Tecnología de la Información</p>
                                </div>
                                <p className="job-subtitle">Nivel Terciario - UADE</p>
                                <p className="education-description">
                                    Completé la Licenciatura en Gestión de Tecnología de la Información en la Universidad Argentina de la Empresa (UADE). Esta carrera me permitió combinar conocimientos técnicos en desarrollo de software, infraestructura y bases de datos con habilidades clave en gestión, liderazgo de proyectos y análisis de procesos. La formación integral recibida me ha preparado para asumir desafíos profesionales en el ámbito tecnológico, aportando una visión estratégica orientada a la innovación, la eficiencia y el trabajo en equipo.
                                </p>
                                {/* Por ser estudios en curso, el certificado puede no ser aplicable todavía, o puedes poner un enlace a la información de la carrera. */}
                                {/* <a
                                    href="[URL_INFORMACION_CARRERA_UADE]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certificate-link"
                                >
                                    <PiCertificate className="job-meta-icon" /> Más Información
                                </a> */}
                            </div>
                        </div>

                        {/* Educación: Estudios de Inglés */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="job-meta-item">
                                    <MdDateRange className="job-meta-icon" />
                                    <p className="job-date">2023 - Actualidad</p>
                                </div>
                                <div className="job-header">
                                    {/* Placeholder para la imagen de Wall Street English */}
                                    <img src="/src/assets/WSE.png" alt="Wall Street English Logo" className="job-logo" />
                                    <p className="job-title">Estudios de Inglés</p>
                                </div>
                                <p className="job-subtitle">Nivel B1 – Intermedio</p>
                                <p className="education-description">
                                    Formación orientada al desarrollo de habilidades comunicativas en inglés en la academia Wall Street English, incluyendo comprensión oral, expresión escrita, lectura y conversación en contextos cotidianos y profesionales.
                                </p>
                                {/* No hay certificado online, o es un proceso continuo, así que no se agrega el enlace */}
                            </div>
                        </div>

                        {/* Educación: FULL STACK PYTHON - CODO A CODO 4.0 */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="job-meta-item">
                                    <MdDateRange className="job-meta-icon" />
                                    <p className="job-date">08/2023 - 12/2023</p>
                                </div>
                                <div className="job-header">
                                    {/* Placeholder para la imagen de Codo a Codo */}
                                    <img src="/src/assets/cac.jpg" alt="Codo a Codo Logo" className="job-logo" />
                                    <p className="job-title">FULL STACK PYTHON</p>
                                </div>
                                <p className="job-subtitle">Curso BA - Codo a Codo 4.0</p>
                                <p className="education-description">
                                    Curso especializado en el desarrollo de aplicaciones web con Python, incluyendo la creación y consumo de APIs REST, el manejo de bases de datos relacionales y no relacionales, y la implementación de interfaces dinámicas. Además, enfocado en el uso de metodologías ágiles y control de versiones.
                                </p>
                                {/* Enlace al certificado, AVISO: CAMBIAR ESTA RUTA POR UNA URL PÚBLICA */}
                                <a
                                    href="https://drive.google.com/file/d/1s0NPMEatCdF__cGvZbTAULI0hnTPyWEq/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certificate-link"
                                >
                                    <PiCertificate className="job-meta-icon" /> Ver Certificado
                                </a>
                            </div>
                        </div>

                        {/* Educación: Nivel Secundario */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="job-meta-item">
                                    <MdDateRange className="job-meta-icon" />
                                    <p className="job-date">2017 - 2021</p>
                                </div>
                                <div className="job-header">
                                    {/* Placeholder para la imagen del logo secundario */}
                                    <img src="/src/assets/RF.png" alt="Instituto Ramón L. Falcón Logo" className="job-logo" />
                                    <p className="job-title">Certificado nivel secundario</p>
                                </div>
                                <p className="job-subtitle">Bachiller con orientación en Economía y Administración</p>
                                <p className="education-description">
                                    Completé mis estudios de nivel secundario en el Instituto Ramón L. Falcón, donde obtuve el título de Bachiller con orientación en Economía y Administración. Esta etapa fue clave para mi crecimiento académico y personal, ya que me permitió desarrollar habilidades en análisis económico, gestión organizacional y pensamiento crítico. Los conocimientos adquiridos y los logros alcanzados durante este período me brindaron una base sólida para acceder a estudios universitarios y continuar mi formación.
                                </p>
                                {/* No hay certificado online para nivel secundario, así que no se agrega el enlace */}
                            </div>
                        </div>

                        {/* Educación: Nivel Primario - ÚLTIMO (más antiguo) */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="job-meta-item"> {/* Reutilizamos job-meta-item para la fecha */}
                                    <MdDateRange className="job-meta-icon" />
                                    <p className="job-date">2009 - 2016</p>
                                </div>
                                <div className="job-header">
                                    {/* Placeholder para la imagen del logo primario */}
                                    <img src="/src/assets/recibido.jpg" alt="Instituto Félix Fernando Bernasconi Logo" className="job-logo" />
                                    <p className="job-title">Certificado de Nivel Primario</p>
                                </div>
                                <p className="job-subtitle">Nivel primario</p>
                                <p className="education-description">
                                    Completé mis estudios de nivel primario en el Instituto Félix Fernando Bernasconi, donde adquirí una formación académica integral que sentó las bases de mi desarrollo educativo y personal. Durante esta etapa, incorporé valores fundamentales, así como habilidades esenciales en lectura, escritura, pensamiento lógico y trabajo en equipo, que luego continuarían fortaleciéndose a lo largo de mi trayectoria académica.
                                </p>
                                {/* No hay certificado online para nivel primario, así que no se agrega el enlace */}
                            </div>
                        </div>
                    </div>
                </div>  
            </section>

       {/* SECCIÓN DE CONTACTO */}
        <section id="contacto" className="contact-section">
          <div className="section-content">
            <h2>Contacto</h2>
            <p className="contact-intro">
              ¿Tenés alguna propuesta o querés charlar sobre un proyecto? <br />
              ¡No dudes en contactarme! Estoy siempre abierto a nuevas oportunidades.
            </p>
            
            <div className="contact-grid">
              
              {/* Tarjeta Email */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tomasspirito10@gmail.com&su=Contacto%20desde%20tu%20Portfolio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card email"
              >
                <div className="contact-icon-box">
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
                <span className="contact-action">Envíame un correo</span>
              </a>

              {/* Tarjeta LinkedIn */}
              <a href="https://www.linkedin.com/in/tomasspirito/" target="_blank" rel="noopener noreferrer" className="contact-card linkedin">
                <div className="contact-icon-box">
                  <FaLinkedin />
                </div>
                <h3>LinkedIn</h3>
                <span className="contact-action">Conectemos</span>
              </a>

              {/* Tarjeta GitHub */}
              <a href="https://github.com/TomasSpirito" target="_blank" rel="noopener noreferrer" className="contact-card github">
                <div className="contact-icon-box">
                  <FaGithub />
                </div>
                <h3>GitHub</h3>
                <span className="contact-action">Explora mi código</span>
              </a>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <p>&copy; 2025 Tomas Spirito. Todos los derechos reservados.</p>
        </footer>

        {/* --- MODAL DE VIDEO (NUEVO) --- */}
        {selectedVideo && (
            <div className="video-modal-overlay" onClick={closeVideoModal}>
                <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="video-modal-close" onClick={closeVideoModal}>
                        <IoClose />
                    </button>
                    <div className="video-wrapper">
                        <iframe 
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        )}
      </>
    )
  }

  export default App;