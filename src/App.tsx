export default function App() {
  return (
    <div className="bg-black">
      <div className="bg-[url('/src/assets/banner.svg')] bg-cover bg-top">
        <div className="container p-32">
          <h1 className="text-title font-bold text-white leading-tight">
            <span className="text-orange-200">Economize</span> <br /> enquanto{" "}
            <br /> mantém a <br />{" "}
            <span className="text-orange-200">forma</span>
          </h1>
          <p className="text-base text-white mt-10">
            O Gympass oferece <br /> descontos em academias, <br /> acessível a
            todos!
          </p>
          <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 mt-10">
            Economize agora!
          </button>
        </div>
      </div>
      <div className="p-32 flex justify-around">
        <h1 className="text-title font-bold text-white leading-tight">
          <span className="text-orange-200">Descubra o</span> <br />{" "}
          <span className="text-orange-200">segredo</span> para <br />{" "}
          aproveitar as <br /> melhores <br /> academias sem <br />{" "}
          <span className="text-orange-200">PREJUÍZOS!</span>
        </h1>
        <p className="text-base text-white mt-10">
          Você está cansado de se comprometer com <br /> planos de academias que
          o prendem por <br />{" "}
          <span className="text-orange-200 font-semibold">
            contratos longos e preços exorbitantes?
          </span>{" "}
          <br /> <br /> Com o Gympass, isso é coisa do passado, <br />{" "}
          permitindo que você desfrute das melhores <br /> academias sem estar
          vinculado a nenhuma <br />
          empresa parceira.
        </p>
      </div>
      <div className="p-32 flex justify-around">
        <h1 className="text-title font-bold text-white leading-tight">
          Quais são as <br />
          <span className="text-orange-200">
            vantagens <br /> exclusivas?
          </span>
        </h1>
        <p className="text-base text-white mt-10">
          Inclui várias modalidades como{" "}
          <span className="text-white font-semibold">
            Yoga, <br /> Musculação, Crossfit, Funcional, Pilates e <br /> até
            Massagens.
          </span>
        </p>
      </div>
      <div className="p-32 flex justify-around">
        <img src="/src/assets/musculacao.svg" alt="" />
        <img src="/src/assets/crossfit.svg" alt="" />
        <img src="/src/assets/pilates.svg" alt="" />
      </div>
      <div className="bg-orange-500 py-10">
        <p className="text-white text-center text-subtitle font-semibold">
          MALHAR EM ESPAÇOS INCRÍVEIS E SUPER <br /> EQUIPADOS PAGANDO MUITO
          POUCO
        </p>
      </div>
      <div>
        <h1 className="text-white">
          Acesso a aplicativos exclusivos que te auxiliam em uma vida saudável;
          Planos super flexíveis; Melhor custo benefício.
        </h1>
      </div>
    </div>
  );
}
