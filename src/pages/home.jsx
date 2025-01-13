import React from "react";
import { CarouselDefault } from "../components/carousel";
import {
  Card,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background.jpg')] bg-cover bg-center"></div>
        <div className="absolute top-0 h-full w-full bg-black/60"></div>
        <div className="container relative mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 text-center mx-auto">
              <Typography variant="h1" color="white" className="mb-6 text-3xl font-black sm:text-4xl lg:text-5xl">
                NATIVO CONSTRUCTORA
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-sm sm:text-base lg:text-lg">
                Inspirados por la tierra, construyendo espacios que reflejan tu identidad campestre!
              </Typography>
              <div className="mt-8 flex justify-center space-x-4">
                <a
                  href="https://www.facebook.com/Nativo.bienesraices.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white transition hover:bg-white hover:text-black"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/constructora__nativo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white transition hover:bg-white hover:text-black"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://wa.me/51990112065?text=Hola,%20me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20Nativo%20Constructora."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white transition hover:bg-white hover:text-black"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          {/* <div className="px-56">
            <CarouselDefault/>
          </div> */}
            
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Mision
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Coordinar, supervisar y ejecutar proyectos de construcción que satisfagan por completo las necesidades de los clientes, con mano de obra experta y cualificada, y las herramientas óptimas para ofrecer un resultado de calidad, con respeto y cuidado del medio ambiente.
                <br />
                <br />
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Vision
              </Typography>
                Ser la empresa constructora líder en la región norte del Perú contribuyendo de manera activa al crecimiento de la región, y ofreciendo como resultado obras reconocidas por su calidad y belleza.
              </Typography>
              <Button variant="filled">Descargar Brochure</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-6/12 lg:mt-0">
              
              <CarouselDefault/>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-20">
        <div className="container mx-auto">
          <PageTitle heading="Nuestro Equipo">
            Nuestro equipo está conformado por profesionales y técnicos que colaboran en el diseño, ejecución y supervisión de proyectos, garantizando calidad y cumplimiento de plazos en cada obra realizada.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                // socials={
                //   <div className="flex items-center gap-2">
                //     {socials.map(({ color, name }) => (
                //       <IconButton key={name} color={color} variant="text">
                //         <i className={`fa-brands text-xl fa-${name}`} />
                //       </IconButton>
                //     ))}
                //   </div>
                // }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-14 px-4">
        <div className="container mx-auto">
          {/* Título principal */}
          <PageTitle heading="Construye algo">
          En Constructora Nativo, estamos dedicados a transformar espacios con innovación,
          sostenibilidad y excelencia. Creemos en construir no solo estructuras, sino
          también confianza y comunidades más fuertes.
          </PageTitle>

          {/* Tarjetas con íconos */}
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>

          {/* Formulario de contacto */}
          <PageTitle section="Contáctanos" heading="¿Quieres trabajar con nosotros?">
            Completa este formulario y nos pondremos en contacto contigo en las
            próximas 24 horas.
          </PageTitle>
          <form className="mx-auto w-full mt-12 max-w-md lg:max-w-lg">
            <div className="mb-8 flex flex-col gap-6 sm:flex-row">
              <Input variant="outlined" size="lg" label="Nombre Completo" className="w-full" />
              <Input variant="outlined" size="lg" label="Dirección de Correo Electrónico" className="w-full" />
            </div>
            <Textarea
              variant="outlined"
              size="lg"
              label="Mensaje"
              rows={8}
              className="w-full"
            />
            <Button variant="gradient" size="lg" className="mt-8 w-full">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
