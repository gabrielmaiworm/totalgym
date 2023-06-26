export default function CardsPlansTotalpass() {
  return (
    <div>
      <div className="bg-brown rounded-md shadow-2xl shadow-orange-100 mt-16">
        <div className="bg-orange-500 rounded-t-md">
          <p className="text-white text-base text-center pt-2 font-medium">
            Mais Popular
          </p>
        </div>
        <img
          src="/src/assets/card_totalpass.svg"
          alt=""
          className="rounded-t-md w-full"
        />
        <div className="flex">
          <div className="mx-10">
            <p className="text-white text-base font-semibold leading-loose py-8 px-2">
              Planos a partir de R$ 39,90 <br />
              Até 3 dependentes
            </p>
            <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 hover:bg-orange-100 mb-12">
              Tenha sua conta AGORA!
            </button>
          </div>
          <div className="flex justify-end w-2/5">
            <p className="text-white text-base font-medium py-8 px-2">
              TPGO: R$ 39,90 <br /> TP1: R$ 59,90 <br /> TP1: R$ 89,90 <br />{" "}
              TP2: R$ 129,90 <br /> TP3: R$ 189,90 <br /> TP4: R$ 279,90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
