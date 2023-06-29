import CardsPlansGympass from "../src/components/CardsPlansGympass";
import CardsPlansTotalpass from "../src/components/CardsPlansTotalpass";
import CardsClients from "./components/CardsClients/index";

export default function App() {
  return (
    <div className="bg-[url('/src/assets/fundo.svg')] bg-cover bg-top">
      {/* BANNER */}
      <div className="bg-[url('/src/assets/banner.svg')] bg-cover bg-top">
        <div className="container px-4 py-20 sm:p-32">
          <h1 className="text-subtitle sm:text-title font-bold text-white leading-tight">
            <span className="text-orange-200">Economize</span> <br /> enquanto{" "}
            <br /> mantém a <br />{" "}
            <span className="text-orange-200">forma</span>
          </h1>
          <p className="text-base text-white mt-10">
            O Gympass oferece <br /> descontos em academias, <br /> acessível a
            todos!
          </p>
          <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 mt-10 hover:bg-orange-100">
            Economize agora!
          </button>
        </div>
      </div>

      {/* DESCUBRA */}
      <div className="py-16 px-4 sm:px-32 2xl:px-50 flex justify-between flex-col md:flex-row">
        <h1 className="text-subtitle sm:text-title font-bold text-white leading-tight pr-5">
          <span className="text-orange-200">Descubra o</span> <br />{" "}
          <span className="text-orange-200">segredo</span> para <br />{" "}
          aproveitar as <br /> melhores <br /> academias sem <br />{" "}
          <span className="text-orange-200">PREJUÍZOS!</span>
        </h1>
        <p className="text-base text-white mt-10 md:mt-0">
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

      {/* QUAIS SÃO */}
      <div className="py-16 px-4 sm:px-32 2xl:px-50 flex justify-between flex-col md:flex-row">
        <h1 className="text-subtitle sm:text-title font-bold text-white leading-tight pr-5">
          Quais são as <br />
          <span className="text-orange-200">
            vantagens <br /> exclusivas?
          </span>
        </h1>
        <p className="text-base text-white mt-10 md:mt-0">
          Inclui várias modalidades como{" "}
          <span className="text-white font-semibold">
            Yoga, <br /> Musculação, Crossfit, Funcional, Pilates e <br /> até
            Massagens.
          </span>
        </p>
      </div>

      {/* CARDS */}
      <div className="p-10 sm:p-16 flex justify-around items-center flex-col lg:flex-row">
        <img
          src="/src/assets/musculacao.svg"
          alt=""
          className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-100 duration-200"
        />

        <img
          src="/src/assets/crossfit.svg"
          alt=""
          className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-100 duration-200"
        />
        <img
          src="/src/assets/pilates.svg"
          alt=""
          className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-100 duration-200 pt-3 lg:pt-0"
        />
      </div>

      {/* MALHAR  */}
      <div className="bg-orange-500 py-10 px-5 my-16">
        <p className="text-white text-center text-subtitle font-semibold leading-snug">
          MALHAR EM ESPAÇOS INCRÍVEIS E SUPER <br /> EQUIPADOS PAGANDO MUITO
          POUCO
        </p>
      </div>

      {/* TÓPICOS */}
      <div className="p-4 sm:p-16 flex justify-around items-center flex-col lg:flex-row">
        <ul
          role="list"
          className="marker:text-orange-200 marker:text-subtitle text-base list-disc list-inside px-1 space-y-2 text-white"
        >
          <li>
            Acesso a aplicativos exclusivos que te <br /> auxiliam em uma vida
            saudável;
          </li>
          <li>Planos super flexíveis;</li>
          <li>Melhor custo benefício.</li>
        </ul>
        <div>
          <p className="text-white font-semibold text-base pt-6 lg:pt-0">
            Não perca essa chance e <br /> entre em contato:
          </p>
          <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 mt-8 hover:bg-orange-100">
            Tenha sua conta AGORA!
          </button>
        </div>
      </div>

      {/* COMO FUNCIONA  */}
      <div className="px-4 py-20 sm:py-16 sm:px-32">
        <h1 className="text-subtitle sm:text-title font-bold text-white leading-tight">
          Como funciona <br />o{" "}
          <span className="text-orange-200"> TotalGym</span>
        </h1>
        <div className="flex justify-around items-center lg:items-start flex-col lg:flex-row">
          <div className="flex-start">
            <img src="/src/assets/circle_1.svg" alt="" />
            <p className="text-base text-white leading-tight text-center">
              Entre em contato <br /> no nosso <br /> WhatsApp
            </p>
          </div>
          <div>
            <img src="/src/assets/circle_2.svg" alt="" />
            <p className="text-base text-white leading-tight text-center">
              Faça o pagamento <br /> após validar seu <br /> acesso
            </p>
          </div>
          <div>
            <img src="/src/assets/circle_3.svg" alt="" />
            <p className="text-base text-white leading-tight text-center">
              Forneça os <br /> dados e{" "}
              <span className="font-semibold">
                tenha
                <br /> acesso{" "}
              </span>{" "}
              a sua <br /> nova conta
            </p>
          </div>
          <div>
            <img src="/src/assets/circle_4.svg" alt="" />
            <p className="text-base text-white leading-tight text-center">
              Prontinho! <br /> aproveite seus <br /> descontos com o <br />{" "}
              <span className="text-orange-200 font-semibold">Gympass</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 mt-16 hover:bg-orange-100">
            Tenho interesse
          </button>
        </div>
      </div>

      {/* GYMPASS  */}
      <div className="px-4 py-20 sm:py-16 sm:px-32">
        <h1 className="text-subtitle sm:text-title font-bold text-white leading-tight">
          Planos <br />
          <span className="text-orange-200"> Gympass</span>
        </h1>
        <p className="uppercase text-white text-base pt-5 font-medium">
          a partir de:
        </p>
        <CardsPlansGympass />
      </div>

      {/* TOTALPASS  */}
      <div className="py-16 px-4 sm:px-32">
        <h1 className="text-subtitle sm:text-title font-bold text-white leading-tight">
          Planos <br />
          <span className="text-orange-200"> Totalpass</span>
        </h1>
        <CardsPlansTotalpass />
      </div>

      {/* CARROSSEL  */}
      <div className="px-4 py-20 sm:py-16 sm:px-32">
        <h1 className="text-subtitle sm:text-title font-bold text-white leading-tight">
          Esses são alguns dos mais de{" "}
          <span className="text-orange-200">+1000 clientes</span> <br /> que
          confiaram no <span className="text-orange-200">TotalGym</span>
        </h1>
        <CardsClients />
        <div className="flex justify-center">
          <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 mb-32 hover:bg-orange-100">
            EU QUERO TER DESCONTOS!!
          </button>
        </div>
      </div>
    </div>
  );
}
