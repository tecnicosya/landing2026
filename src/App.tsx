function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Servicios Informáticos Bogotá
          </h1>
          <a
            href="https://wa.me/573123043756?text=Hola,%20necesito%20asistencia%20informática"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Servicios Informáticos en Bogotá
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Soporte tecnológico profesional para hogares y empresas. 
            Instalación, configuración y administración de equipos con 
            atención responsable y puntual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573123043756?text=Hola,%20necesito%20asistencia%20informática"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contáctanos por WhatsApp
            </a>
            <a
              href="#servicios"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Por qué elegirnos?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Profesionales Certificados</h4>
              <p className="text-gray-600">Equipo con experiencia comprobada en atención a hogares y empresas</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Atención Puntual</h4>
              <p className="text-gray-600">Respuestas rápidas y servicio eficiente cuando lo necesites</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Servicio Garantizado</h4>
              <p className="text-gray-600">Soluciones efectivas y soporte continuo para tu tranquilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Servicios Informáticos y Soluciones Tecnológicas
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Ofrecemos servicios informáticos profesionales en Bogotá para hogares, negocios y empresas que necesitan mejorar el funcionamiento de sus equipos y sistemas tecnológicos.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-bold text-blue-600 mb-4">
                Soporte IT Empresarial
              </h4>
              <p className="text-gray-600 mb-6">
                Brindamos soporte IT empresarial y servicios tecnológicos para pequeñas empresas, oficinas y usuarios que requieren asistencia especializada en sus sistemas informáticos.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Instalación y configuración de equipos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Administración de computadores y redes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Configuración de sistemas operativos y software</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Optimización del rendimiento de equipos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Implementación de soluciones tecnológicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Consultoría informática personalizada</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-bold text-blue-600 mb-4">
                Consultoría Informática
              </h4>
              <p className="text-gray-600 mb-6">
                Ofrecemos consultoría informática para ayudar a elegir, configurar y mantener correctamente los equipos tecnológicos. Nuestro objetivo es que tus equipos funcionen correctamente y sin interrupciones.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Administración de equipos empresariales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Configuración de redes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Instalación de programas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Ajustes de sistema</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Administración de equipos en oficina o domicilio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Atendemos en Bogotá y alrededores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            ¿A quién atendemos?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-2">🏠</div>
              <p className="font-semibold text-gray-700">Hogares</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-2">🏢</div>
              <p className="font-semibold text-gray-700">Oficinas</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-2">📊</div>
              <p className="font-semibold text-gray-700">Negocios</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-2">🏭</div>
              <p className="font-semibold text-gray-700">Empresas</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-2">💼</div>
              <p className="font-semibold text-gray-700">Profesionales</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-2">📍</div>
              <p className="font-semibold text-gray-700">Bogotá y alrededores</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            ¿Necesitas servicios informáticos?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Contáctanos para recibir asesoría y programar tu servicio tecnológico.
            Ofrecemos atención responsable, puntual y profesional.
          </p>
          <a
            href="https://wa.me/573123043756?text=Hola,%20necesito%20asistencia%20informática"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-2xl"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contáctanos por WhatsApp
          </a>
          <p className="text-blue-200 mt-6 text-lg">
            📞 +57 312 304 3756
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">
            Servicios informáticos profesionales en Bogotá y alrededores
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Servicios Informáticos Bogotá. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
