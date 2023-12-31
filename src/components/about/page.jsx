import ButtonPage from "../buttton/buttonPage";
import {
  SkillsFrontEnd,
  SkillsBackEnd,
  SkillsVersion,
  SkillsOters,
} from "./skills";
export default function AboutPage() {
  return (
    <main
      id="bg-black6"
      className="w-full flex flex-col items-center">
      <div
        id="about"
        className=" text-white min-h-screen space-y-4 py-12 px-2 max-w-lg md:max-w-full md:flex md:flex-col md:items-center md:space-y-20">
        <section className="md:max-w-4xl space-y-4">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">ACERCA DE MI</h1>
            <hr className=" w-12 border border-[#ffa726] rounded-xl "></hr>
          </div>
          <p className="text-base text-center">
            Aquí encontrarás más información sobre mí, lo que hago y mis
            habilidades actuales principalmente en términos de programación y
            tecnología.
          </p>
        </section>
        <section className="space-y-4 md:flex md:max-w-5xl md:space-y-0 md:space-x-20">
          <div className="space-y-4 md:w-1/2">
            <h2 className="text-[#f9af7e]">
              PERFIL PERSONAL <hr className="border-s-0 border-[#f9af7e]" />
            </h2>
            <div className="text-justify space-y-1 shadow-[#ffa726] shadow-my rounded-lg p-2 md:shadow-none">
              <p>
                Como Ingeniero Industrial de formación, descubrí mi pasión por
                el desarrollo Full Stack y aprendí de manera autodidacta. Ahora,
                estoy enfocado en crear soluciones tecnológicas innovadoras.
              </p>
              <p>
                He trabajado en proyectos desafiantes que han mejorado la
                eficiencia y la experiencia del usuario en aplicaciones web y
                API backend.
              </p>
              <p>
                Creo en lo simple y moderno, la escalabilidad y la eficiencia en
                el desarrollo. Cada proyecto es una oportunidad para aprender y
                mejorar.
              </p>
            </div>
          </div>
          <div className="w-full space-y-4 md:w-1/2">
            <h2 className="text-[#f9af7e]">
              MIS HABILIDADES <hr className="border-s-0 border-[#f9af7e]" />
            </h2>
            <div className="flex justify-center space-x-10">
              <div className=" space-y-4">
                <div>
                  <h3 className="text-[#f9af7e]">Front-End</h3>

                  {SkillsFrontEnd.map(({ name, icon, id }) => {
                    return (
                      <div
                        className="flex pl-4 space-x-2 items-center"
                        key={id}>
                        <span className="block text-[#f9af7e]">{icon}</span>
                        <span className="">{name}</span>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h3 className="text-[#f9af7e]">Back-End</h3>
                  {SkillsBackEnd.map(({ name, icon, id }) => {
                    return (
                      <div
                        className="flex pl-4 space-x-2 items-center w-full"
                        key={id}>
                        <span className="block text-[#f9af7e]">{icon}</span>
                        <span className="block">{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-4">
                <div className="">
                  <h3 className="text-[#f9af7e]">Versionado</h3>
                  {SkillsVersion.map(({ name, icon, id }) => {
                    return (
                      <div
                        className="flex pl-4 space-x-2 items-center w-full"
                        key={id}>
                        <span className="block text-[#f9af7e]">{icon}</span>
                        <span className="block">{name}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="w-1/2 ">
                  <h3 className="text-[#f9af7e]">Otros</h3>
                  {SkillsOters.map(({ name, icon, id }) => {
                    return (
                      <div
                        className="flex pl-4 space-x-2 items-center w-full"
                        key={id}>
                        <span className="block text-[#f9af7e]">{icon}</span>
                        <span className="block">{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center h-auto">
          <ButtonPage
            name="CONTACTAME"
            url="#contact"></ButtonPage>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <hr className=" w-4/5 border-s-0 border-[#ffa726]" />
      </div>
    </main>
  );
}
