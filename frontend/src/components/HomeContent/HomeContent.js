import "./styles.scss";
import { HomeBuyButton } from "./Button/HomeBuyButton";
import Carousel from "carousel-react-rcdev";
export function HomeContent(props) {
  const items = [
    {
      id: "1",
      name: "Maria Gadu Gravacao de DVD",
      foto: {
        link: "https://siterg.uol.com.br/wp-content/uploads/2021/11/msria-gadu%CC%81-divulgacao.jpeg",
        alt: "Maria Gadu",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 100,
        },
        {
          tipo: "pista",
          valor: 40,
        },
        {
          tipo: "open bar",
          valor: 400,
        },
      ],
    },
    {
      id: "2",
      name: "Seu Jorge Brasilia 2022",
      foto: {
        link: "https://s3.netcampos.com/imgs/20220331172450/alexandre-pires-e-seujorge-img.webp",
        alt: "Seu Jorge",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 300,
        },
        {
          tipo: "pista",
          valor: 100,
        },
        {
          tipo: "open bar",
          valor: 800,
        },
      ],
    },
    {
      id: "3",
      name: "Caetano Velozo Brasilia 2022",

      valor: [
        {
          tipo: "camarote",
          valor: 300,
        },
        {
          tipo: "pista",
          valor: 100,
        },
        {
          tipo: "open bar",
          valor: 800,
        },
      ],
    },
    {
      id: "3",
      name: "Maria Betania Brasilia 2022",
      foto: {
        link: "https://siterg.uol.com.br/wp-content/uploads/2021/11/msria-gadu%CC%81-divulgacao.jpeg",
        alt: "Maria Betania",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 300,
        },
        {
          tipo: "pista",
          valor: 100,
        },
        {
          tipo: "open bar",
          valor: 800,
        },
      ],
    },

    {
      id: "4",
      name: "QUALQUER COISA",
      foto: {
        link: "#",
        alt: "Qualquer coisa",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 400,
        },
        {
          tipo: "pista",
          valor: 200,
        },
        {
          tipo: "open bar",
          valor: 1000,
        },
      ],
    },
    {
      id: "4",
      name: "QUALQUER COISA",
      foto: {
        link: "#",
        alt: "Qualquer coisa",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 400,
        },
        {
          tipo: "pista",
          valor: 200,
        },
        {
          tipo: "open bar",
          valor: 1000,
        },
      ],
    },
    {
      id: "4",
      name: "QUALQUER COISA",
      foto: {
        link: "#",
        alt: "Qualquer coisa",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 400,
        },
        {
          tipo: "pista",
          valor: 200,
        },
        {
          tipo: "open bar",
          valor: 1000,
        },
      ],
    },
    {
      id: "4",
      name: "QUALQUER COISA",
      foto: {
        link: "#",
        alt: "Qualquer coisa",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 400,
        },
        {
          tipo: "pista",
          valor: 200,
        },
        {
          tipo: "open bar",
          valor: 1000,
        },
      ],
    },
    {
      id: "4",
      name: "QUALQUER COISA",
      foto: {
        link: "#",
        alt: "Qualquer coisa",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 400,
        },
        {
          tipo: "pista",
          valor: 200,
        },
        {
          tipo: "open bar",
          valor: 1000,
        },
      ],
    },
    {
      id: "4",
      name: "QUALQUER COISA",
      foto: {
        link: "#",
        alt: "Qualquer coisa",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 400,
        },
        {
          tipo: "pista",
          valor: 200,
        },
        {
          tipo: "open bar",
          valor: 1000,
        },
      ],
    },
    {
      id: "4",
      name: "QUALQUER COISA",
      foto: {
        link: "#",
        alt: "Qualquer coisa",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 400,
        },
        {
          tipo: "pista",
          valor: 200,
        },
        {
          tipo: "open bar",
          valor: 1000,
        },
      ],
    },
    {
      id: "4",
      name: "QUALQUER COISA",
      foto: {
        link: "#",
        alt: "Qualquer coisa",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 400,
        },
        {
          tipo: "pista",
          valor: 200,
        },
        {
          tipo: "open bar",
          valor: 1000,
        },
      ],
    },
    {
      id: "4",
      name: "QUALQUER COISA",
      foto: {
        link: "#",
        alt: "Qualquer coisa",
      },
      valor: [
        {
          tipo: "camarote",
          valor: 400,
        },
        {
          tipo: "pista",
          valor: 200,
        },
        {
          tipo: "open bar",
          valor: 1000,
        },
      ],
    },
  ];

  return (
    <div className="shows-container">
      <div className="shows">
        <Carousel className="carousel" max_width={2500}>
          {items.map((item) => (
            <div className="showItem-container">
              <div className="show-item">
                <div key={item.id} className="item">
                  <img src={item.foto?.link} alt={item.foto?.alt} />

                  <h1>{item.name}</h1>
                  <hr
                    style={{
                      height: 3,
                      backgroundColor: "black",
                    }}
                  />
                  {item.valor.map((v) => (
                    <>
                      <div className="ingressos">
                        <h2>Tipo Ingresso: {v.tipo}</h2>
                        <h2>Valor: {v.valor}</h2>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <HomeBuyButton
                eventName={item.name}
                eventPicture={item.foto?.link}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
