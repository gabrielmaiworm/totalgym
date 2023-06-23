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
      <div className="container p-32">
        <h1 className="text-title font-bold text-white leading-tight">
          <span className="text-orange-200">Economize</span> <br /> enquanto{" "}
          <br /> mantém a <br /> <span className="text-orange-200">forma</span>
        </h1>
        <p className="text-base text-white mt-10">
          O Gympass oferece <br /> descontos em academias, <br /> acessível a
          todos!
        </p>
      </div>
    </div>
  );
}
