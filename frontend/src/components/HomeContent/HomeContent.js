import { useState } from "react";

import "./styles.scss";
import { HomeBuyButton } from "./Button/HomeBuyButton";
import Carousel from "carousel-react-rcdev";
import { useEffect } from "react";
import api from "../../services/api";

export function HomeContent(props) {
  const [items, setItems] = useState([{}]);
  // const items = [
  //   {
  //     id: "1",
  //     name: "Maria Gadu Gravacao de DVD",
  //     foto: {
  //       link: "https://siterg.uol.com.br/wp-content/uploads/2021/11/msria-gadu%CC%81-divulgacao.jpeg",
  //       alt: "Maria Gadu",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 100,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 40,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 400,
  //       },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     name: "Seu Jorge Brasilia 2022",
  //     foto: {
  //       link: "https://s3.netcampos.com/imgs/20220331172450/alexandre-pires-e-seujorge-img.webp",
  //       alt: "Seu Jorge",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 300,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 100,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 800,
  //       },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     name: "Caetano Velozo Brasilia 2022",

  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 300,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 100,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 800,
  //       },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     name: "Maria Betania Brasilia 2022",
  //     foto: {
  //       link: "https://siterg.uol.com.br/wp-content/uploads/2021/11/msria-gadu%CC%81-divulgacao.jpeg",
  //       alt: "Maria Betania",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 300,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 100,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 800,
  //       },
  //     ],
  //   },

  //   {
  //     id: "4",
  //     name: "QUALQUER COISA",
  //     foto: {
  //       link: "#",
  //       alt: "Qualquer coisa",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 400,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 200,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 1000,
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     name: "QUALQUER COISA",
  //     foto: {
  //       link: "#",
  //       alt: "Qualquer coisa",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 400,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 200,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 1000,
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     name: "QUALQUER COISA",
  //     foto: {
  //       link: "#",
  //       alt: "Qualquer coisa",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 400,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 200,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 1000,
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     name: "QUALQUER COISA",
  //     foto: {
  //       link: "#",
  //       alt: "Qualquer coisa",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 400,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 200,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 1000,
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     name: "QUALQUER COISA",
  //     foto: {
  //       link: "#",
  //       alt: "Qualquer coisa",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 400,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 200,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 1000,
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     name: "QUALQUER COISA",
  //     foto: {
  //       link: "#",
  //       alt: "Qualquer coisa",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 400,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 200,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 1000,
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     name: "QUALQUER COISA",
  //     foto: {
  //       link: "#",
  //       alt: "Qualquer coisa",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 400,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 200,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 1000,
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     name: "QUALQUER COISA",
  //     foto: {
  //       link: "#",
  //       alt: "Qualquer coisa",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 400,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 200,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 1000,
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     name: "QUALQUER COISA",
  //     foto: {
  //       link: "#",
  //       alt: "Qualquer coisa",
  //     },
  //     valor: [
  //       {
  //         tipo: "camarote",
  //         valor: 400,
  //       },
  //       {
  //         tipo: "pista",
  //         valor: 200,
  //       },
  //       {
  //         tipo: "open bar",
  //         valor: 1000,
  //       },
  //     ],
  //   },
  // ];

  useEffect(() => {
    api
      .get("events/")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        throw new Error("Error: " + error);
      });
  }, []);

  console.log("Items", items);

  return (
    <div className="shows-container">
      <div className="shows">
        <Carousel className="carousel" max_width={2500}>
          {items.map((item) => (
            <div className="showItem-container">
              <div className="show-item">
                <div key={item.id} className="item">
                  <img src={item.imgUrl} alt={"Foto evento"} />

                  <h1 key={item.name}>{item.name}</h1>
                  <hr
                    style={{
                      height: 3,
                      backgroundColor: "black",
                    }}
                  />
                  <div className="ingressos">
                    <h2 key={item.id}>Valor: {item.price}</h2>
                  </div>
                  <div className="datas">
                    <h2>De: {item.startDate}</h2>
                    <h2>A: {item.endDate}</h2>
                  </div>
                  <h4 key={item.id}>
                    Artista: <b>{item.artist}</b>
                  </h4>
                </div>
              </div>
              <HomeBuyButton eventName={item.name} eventPicture={item.imgUrl} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
