import { Handshake, Users, Heart, Clock, HandHeart, Scale } from "lucide-react";

const MacroSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#fff7ef]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-4 sm:mb-6">
            <img 
              src="https://altusamerica.com.br/wp-content/uploads/2025/07/Logo-Macro-ORANGE.png" 
              alt="Macro Engenharia Logo" 
              className="h-10 sm:h-14 md:h-18 lg:h-28 xl:h-32 object-contain"
            />
          </div>
          <p className="text-sm sm:text-lg font-medium text-[#555] mb-4 sm:mb-6">
            48 anos de excelência em engenharia na região de São José dos Campos
          </p>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#333] mb-2 relative title-font">
            Projetos de alto padrão
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-15 h-1 bg-[#F37021]"></span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transition-transform">
            <div className="text-[#F37021] text-3xl mb-3 sm:mb-4">
              <Handshake className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#333] mb-2 sm:mb-3">Honestidade</h3>
            <p className="text-sm sm:text-base text-[#666]">Transparência em cada etapa</p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transition-transform">
            <div className="text-[#F37021] text-3xl mb-3 sm:mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#333] mb-2 sm:mb-3">Valorização do ser humano</h3>
            <p className="text-sm sm:text-base text-[#666]">Crescimento com reconhecimento</p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transition-transform">
            <div className="text-[#F37021] text-3xl mb-3 sm:mb-4">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#333] mb-2 sm:mb-3">Paixão pelo que fazemos</h3>
            <p className="text-sm sm:text-base text-[#666]">Trabalho com brilho no olhar</p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transition-transform">
            <div className="text-[#F37021] text-3xl mb-3 sm:mb-4">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#333] mb-2 sm:mb-3">Comprometimento com prazos</h3>
            <p className="text-sm sm:text-base text-[#666]">Entrega pontual e eficiente</p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transition-transform">
            <div className="text-[#F37021] text-3xl mb-3 sm:mb-4">
              <HandHeart className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#333] mb-2 sm:mb-3">Respeito</h3>
            <p className="text-sm sm:text-base text-[#666]">Relacionamentos baseados no respeito</p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transition-transform">
            <div className="text-[#F37021] text-3xl mb-3 sm:mb-4">
              <Scale className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#333] mb-2 sm:mb-3">Ética</h3>
            <p className="text-sm sm:text-base text-[#666]">Negócios com seriedade</p>
          </div>
        </div>

        {/* Results Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#333] mb-2 relative title-font">
            Nossos resultados
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-15 h-1 bg-[#F37021]"></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 text-center">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F37021] mb-1 sm:mb-2">+450</div>
            <div className="text-sm sm:text-base lg:text-lg text-[#555]">obras concluídas</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F37021] mb-1 sm:mb-2">2.000.000 m²</div>
            <div className="text-sm sm:text-base lg:text-lg text-[#555]">entregas</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F37021] mb-1 sm:mb-2">47</div>
            <div className="text-sm sm:text-base lg:text-lg text-[#555]">anos apaixonados por engenharia</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F37021] mb-1 sm:mb-2">100%</div>
            <div className="text-sm sm:text-base lg:text-lg text-[#555]">comprometidos com seu projeto</div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://www.macroengenharia.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#052f3e] text-white text-sm sm:text-base lg:text-lg font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full hover:text-[#F37021] transition-colors"
          >
            www.macroengenharia.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default MacroSection;