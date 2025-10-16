import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code, Shield, Bot, Cpu } from 'lucide-react';

export default function Portfolio() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const particles = useRef([]);
  const animationRef = useRef(null);

  // Proyectos actualizados con tus links
  const projects = [
    {
      id: 1,
      title: 'Imperion - Juego 4X de Estrategia',
      description: 'Juego de estrategia multijugador con construcción de ciudades, diplomacia y batallas en tiempo real. Arquitectura cliente-servidor optimizada.',
      demo: 'https://imperion-one.vercel.app',
      code: 'https://github.com'
    },
    {
      id: 2,
      title: 'AdminRestaurante - Gestión Integral',
      description: 'Plataforma completa para gestión de pedidos, inventario, gastos operacionales y reportes analytics para negocios gastronómicos.',
      demo: 'https://adminrestaurante.vercel.app',
      code: 'https://github.com'
    },
    {
      id: 3,
      title: 'Bots de Automatización',
      description: 'Suite de bots para Discord y Telegram con moderación avanzada, notificaciones automáticas, sistemas de tickets y comandos personalizados.',
      demo: '#',
      code: 'https://github.com'
    },
    {
      id: 4,
      title: 'Security Testing Tools',
      description: 'Experiencia en pruebas de seguridad utilizando Nmap, Burp Suite, OWASP ZAP para análisis de vulnerabilidades y pentesting.',
      demo: '#',
      code: 'https://github.com'
    }
  ];

  // Habilidades y tecnologías
  const skills = {
    development: ['React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
    security: ['Nmap', 'Burp Suite', 'OWASP ZAP', 'Metasploit', 'Wireshark'],
    bots: ['Discord.js', 'Telegraf', 'Python', 'Webhooks', 'API Integration']
  };

  // Sistema de partículas mejorado con más colores y efectos
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Paleta de colores mejorada
    const colorPalette = [
      { main: '99, 102, 241', aura: '168, 85, 247' }, // Índigo a púrpura
      { main: '59, 130, 246', aura: '14, 165, 233' }, // Azul a cian
      { main: '236, 72, 153', aura: '244, 114, 182' }, // Rosa
      { main: '34, 197, 94', aura: '132, 225, 188' }  // Verde
    ];

    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.radius = Math.random() * 2 + 0.5;
        this.baseRadius = this.radius;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.colorSet = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(mouseX, mouseY) {
        // Movimiento base con inercia mejorada
        this.x += this.vx;
        this.y += this.vy;

        // Efecto de pulso
        this.radius = this.baseRadius + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.5;

        // Atracción al mouse con comportamiento más orgánico
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 300) {
          const force = (300 - distance) / 300;
          const angle = Math.atan2(dy, dx);
          
          this.vx += Math.cos(angle) * force * 0.3;
          this.vy += Math.sin(angle) * force * 0.3;
          
          this.opacity = Math.min(this.opacity + 0.02, 0.8);
        } else {
          this.opacity = Math.max(this.opacity - 0.005, 0.2);
        }

        // Fricción mejorada
        this.vx *= 0.94;
        this.vy *= 0.94;

        // Rebote en bordes con amortiguación
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -0.8;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -0.8;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        // Límites de velocidad
        const maxSpeed = 4;
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }
      }

      draw() {
        // Partícula central con gradiente
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 2
        );
        gradient.addColorStop(0, `rgba(${this.colorSet.main}, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(${this.colorSet.main}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Aura exterior mejorada
        const auraGradient = ctx.createRadialGradient(
          this.x, this.y, this.radius * 1.5,
          this.x, this.y, this.radius * 6
        );
        auraGradient.addColorStop(0, `rgba(${this.colorSet.aura}, ${this.opacity * 0.4})`);
        auraGradient.addColorStop(1, `rgba(${this.colorSet.aura}, 0)`);
        
        ctx.fillStyle = auraGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Inicializar más partículas para mayor densidad
    for (let i = 0; i < 60; i++) {
      particles.current.push(new Particle());
    }

    const animate = () => {
      // Fondo con efecto de rastro más suave
      ctx.fillStyle = 'rgba(8, 8, 16, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouseX = mousePos.current.x;
      const mouseY = mousePos.current.y;

      // Actualizar y dibujar partículas
      particles.current.forEach((particle, index) => {
        particle.update(mouseX, mouseY);
        particle.draw();

        // Conexiones entre partículas mejoradas
        for (let i = index + 1; i < particles.current.length; i++) {
          const other = particles.current[i];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.2;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Efecto de estela cerca del mouse
        const dxToMouse = particle.x - mouseX;
        const dyToMouse = particle.y - mouseY;
        const distToMouse = Math.sqrt(dxToMouse * dxToMouse + dyToMouse * dyToMouse);
        
        if (distToMouse < 100) {
          const intensity = (100 - distToMouse) / 100;
          ctx.strokeStyle = `rgba(255, 255, 255, ${intensity * 0.3})`;
          ctx.lineWidth = intensity * 2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Canvas de fondo mejorado */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ mixBlendMode: 'plus-lighter' }}
      />

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full backdrop-blur-md bg-gray-950/50 border-b border-indigo-500/20 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              FS
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#inicio" className="text-sm hover:text-indigo-400 transition-all duration-300">Inicio</a>
              <a href="#proyectos" className="text-sm hover:text-indigo-400 transition-all duration-300">Proyectos</a>
              <a href="#habilidades" className="text-sm hover:text-indigo-400 transition-all duration-300">Habilidades</a>
              <a href="#contacto" className="text-sm hover:text-indigo-400 transition-all duration-300">Contacto</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 inline-block">
              <div className="w-28 h-28 mx-auto rounded-full border-2 border-indigo-500/40 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl"></div>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                  FS
                </div>
              </div>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent leading-tight">
              Francisco Suárez
            </h1>
            <p className="text-xl text-cyan-400 mb-6 font-light">
              Full Stack Developer & Security Enthusiast
            </p>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
              Desarrollo soluciones web modernas, bots de automatización para Discord/Telegram, 
              y realizo pruebas de seguridad con herramientas profesionales. Creo aplicaciones 
              escalables y seguras.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#proyectos" className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:scale-105">
                Ver Proyectos
              </a>
              <a href="#contacto" className="px-8 py-3 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                Contactar
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Habilidades & Tecnologías
            </h2>
            <p className="text-gray-500 text-center mb-16">Tecnologías y herramientas que utilizo</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Desarrollo */}
              <div className="bg-gray-900/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-indigo-400" />
                  <h3 className="text-lg font-bold text-white">Desarrollo</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.development.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Seguridad */}
              <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Seguridad</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.security.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bots */}
              <div className="bg-gray-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Bots & Automatización</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.bots.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
            <p className="text-gray-500 text-center mb-16">Mis trabajos más recientes y desafiantes</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-gray-900/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 transform hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-cyan-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icono del proyecto */}
                  <div className="w-full h-32 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-lg mb-4 flex items-center justify-center border border-indigo-500/20 group-hover:border-cyan-500/30 transition relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-cyan-500/10 to-indigo-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>
                    {project.id === 3 ? <Bot className="w-10 h-10 text-cyan-400/70 relative z-10" /> : 
                     project.id === 4 ? <Shield className="w-10 h-10 text-purple-400/70 relative z-10" /> :
                     <Code className="w-10 h-10 text-indigo-400/70 relative z-10" />}
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-300 transition relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10">
                    {project.description}
                  </p>

                  <div className="flex gap-3 relative z-10">
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.demo === '#' ? 'flex-1' : ''} px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all border border-gray-600/30 hover:border-cyan-500/30`}
                    >
                      <Code className="w-4 h-4" />
                      Código
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="min-h-screen py-20 px-4 flex items-center">
          <div className="max-w-3xl mx-auto w-full text-center">
            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Conectemos
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:francisco@email.com"
                className="p-6 bg-gray-900/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1 group"
              >
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold mb-1 text-white">Email</p>
                <p className="text-gray-500 text-sm">francisco@email.com</p>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gray-900/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1 group"
              >
                <Github className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold mb-1 text-white">GitHub</p>
                <p className="text-gray-500 text-sm">@franciscosuarez</p>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gray-900/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1 group"
              >
                <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold mb-1 text-white">LinkedIn</p>
                <p className="text-gray-500 text-sm">@franciscosuarez</p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-indigo-500/10 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
            <p>© 2025 Francisco Suárez. Desarrollado con pasión y código limpio.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}