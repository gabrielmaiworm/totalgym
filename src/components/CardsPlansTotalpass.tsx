export default function CardsPlansTotalpass() {
  return (
    <div>
      <div className="bg-brown rounded-md shadow-2xl shadow-orange-100 mt-16">
        <div className="bg-orange-500 rounded-t-md">
          <p className="text-white text-base text-center pt-2 font-medium">
            Mais Popular
          </p>
        </div>

        <div className="bg-[url('/src/assets/totalpass.svg')] bg-cover bg-top px-20 py-10 flex justify-between items-center flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="text-white text-base font-semibold">TOTALPASS</p>
            <p className="text-white text-subtitle sm:text-title font-bold">
              R$150,00
            </p>
          </div>
          <div>
            <p className="text-white text-base font-semibold text-center lg:text-right">
              Valores das mensalidades <br /> dentro do aplicativo:
            </p>
          </div>
        </div>

        <div className="flex justify-between px-10 sm:px-20 items-center flex-col lg:flex-row text-center lg:text-left">
          <div>
            <p className="text-white text-base font-semibold leading-loose py-8 px-2">
              Planos a partir de R$ 39,90 <br />
              Até 3 dependentes
            </p>
            <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 hover:bg-orange-100 mb-12">
              Tenha sua conta AGORA!
            </button>
          </div>
          <div>
            <p className="text-white text-base font-medium py-8">
              TPGO: R$ 39,90 <br /> TP1: R$ 59,90 <br /> TP1: R$ 89,90 <br />{" "}
              TP2: R$ 129,90 <br /> TP3: R$ 189,90 <br /> TP4: R$ 279,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
