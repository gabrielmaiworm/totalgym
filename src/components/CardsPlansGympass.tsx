export default function CardsPlansGympass() {
  return (
    <div>
      <div className="flex justify-around items-center flex-col xl:flex-row gap-8">
        {/* SIMPLES  */}
        <div className="bg-brown rounded-md mt-11">
          <div className="bg-[url('/src/assets/simples.svg')] bg-cover bg-top text-center py-20">
            <p className="text-white text-subtitle font-semibold">SIMPLES</p>
            <p className="text-white text-subtitle sm:text-title font-bold">
              R$80,00
            </p>
          </div>
          <p className="text-white text-center text-base font-semibold leading-loose py-8 px-7">
            Planos a partir de R$ 55,90 <br /> Sem dependentes{" "}
          </p>
          <div className="flex justify-center">
            <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 hover:bg-orange-100 mb-12">
              Acesse agora!
            </button>
          </div>
        </div>

        {/* HYPER  */}
        <div className="bg-brown rounded-md shadow-2xl shadow-orange-100 mt-10 xl:mt-0">
          <div className="bg-orange-500 rounded-t-md">
            <p className="text-white text-base text-center pt-2 font-medium">
              Mais Vendido
            </p>
          </div>
          <div className="bg-[url('/src/assets/hyper.svg')] bg-cover bg-top text-center py-20">
            <p className="text-white text-subtitle font-semibold">HYPER</p>
            <p className="text-white text-subtitle sm:text-title font-bold">
              R$150,00
            </p>
          </div>
          <p className="text-white text-center text-base font-semibold leading-loose py-8 px-10">
            Planos a partir de R$ 9,90
            <br /> Até 3 dependentes
          </p>
          <div className="flex justify-center">
            <button className="bg-orange-500 shadow-lg shadow-orange-100 text-white font-semibold text-base p-5 hover:bg-orange-100 mb-12">
              Acesse agora!
            </button>
          </div>
        </div>

        {/* PRO  */}
        <div className="bg-brown rounded-md mt-11">
          <div className="bg-[url('/src/assets/pro.svg')] bg-cover bg-top text-center py-20">
            <p className="text-white text-subtitle font-semibold">PRO</p>
            <p className="text-white text-subtitle sm:text-title font-bold">
              R$100,00
            </p>
          </div>
          <p className="text-white text-center text-base font-semibold leading-loose py-8 px-7">
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
    </div>
  );
}
