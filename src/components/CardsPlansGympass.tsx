export default function CardsPlansGympass() {
  return (
    <div className="flex justify-around">
      <div className="bg-brown rounded-md mt-11">
        <img src="/src/assets/card_hyper.svg" alt="" className="rounded-t-md" />
        <p className="text-white text-center text-base font-semibold leading-loose py-8 px-2">
          Planos a partir de R$ 55,90 <br /> Não possui dependentes{" "}
        </p>
        <div className="flex justify-center">
          <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 hover:bg-orange-100 mb-12">
            Acesse agora!
          </button>
        </div>
      </div>

      <div className="bg-brown rounded-md shadow-2xl shadow-orange-100 mx-10">
        <div className="bg-orange-500 rounded-t-md">
          <p className="text-white text-base text-center pt-2 font-medium">
            Mais Vendido
          </p>
        </div>
        <img src="/src/assets/card_hyper.svg" alt="" className="rounded-t-md" />
        <p className="text-white text-center text-base font-semibold leading-loose py-8 px-2">
          Planos a partir de R$ 9,90
          <br /> Até 3 dependentes
        </p>
        <div className="flex justify-center">
          <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 hover:bg-orange-100 mb-12">
            Acesse agora!
          </button>
        </div>
      </div>

      <div className="bg-brown rounded-md mt-11">
        <img src="/src/assets/card_hyper.svg" alt="" className="rounded-t-md" />
        <p className="text-white text-center text-base font-semibold leading-loose py-8 px-2">
          Planos a partir de R$ 29,90
          <br /> Até 3 dependentes
        </p>
        <div className="flex justify-center">
          <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 hover:bg-orange-100 mb-12">
            Acesse agora!
          </button>
        </div>
      </div>
    </div>
  );
}
