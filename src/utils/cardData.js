//#region images
import bellyLogo from "@/assets/images/costumers/belly/logo-belly.jpg";
import belly from "@/assets/images/costumers/belly/Belly.jpg";
import belly1 from "@/assets/images/costumers/belly/Belly(1).jpg";
import belly2 from "@/assets/images/costumers/belly/Belly(2).jpg";
import belly3 from "@/assets/images/costumers/belly/Belly(3).jpg";
// import voOrlandoLogo from "@/assets/images/costumers/vo-orlando/logo-vo-orlando.jpg";
// import voOrlando1 from "@/assets/images/costumers/vo-orlando/vo-orlando(1).jpg";
// import voOrlando2 from "@/assets/images/costumers/vo-orlando/vo-orlando(2).jpg";
// import voOrlando3 from "@/assets/images/costumers/vo-orlando/vo-orlando(3).jpg";
//#endregion
//#endregion

export default [
  {
    title: "Chácara Belly",
    info: {
      size: "Meio Quarteirão",
      host_capacity: "120 pessoas",
      event_capacity: "120 pessoas",
      description: `Localizada em um amplo espaço que ocupa meio quarteirão, a Chácara Belly é perfeita para celebrações familiares e eventos tranquilos. Seu salão para até 120 pessoas, com área gourmet equipada com churrasqueira, fogão industrial e geladeira duplex, oferece o espaço ideal para confraternizações com praticidade e charme.

A piscina cercada e segura, o parque infantil e o campo de futebol tornam-se o local completo para todas as idades. Além disso, contamos com um quarto aconchegante, banheiros com duchas quentes e estacionamento para motos. Para quem deseja personalizar ainda mais seu evento, temos parcerias com decoradores, locação de brinquedos e jogos de mesa.

Com iluminação noturna de qualidade e ambiente pensado para momentos familiares, a Chácara Belly é um refúgio de tranquilidade e diversão. Confira as fotos desse espaço encantador e reserve agora para criar memórias inesquecíveis!`,
      locality: [
        " R. 7 JA, 847 - Jardim America, Rio Claro - SP, 13506-031",
        "https://g.co/kgs/nbXDFXk",
      ],
      pool: {
        havePool: true,
        size: "1,60 m",
      },
      wifi: false,
      pet: true,
      playground: true,
      furniture: true,
      barbecue_area: true,
      cooking_area: true,
      whatsApp: "19998135938",
      instagram: "chacarabelly",
    },
    category: "Chácara",
    logo: bellyLogo,
    images: [belly, belly1, belly2, belly3],
    scheduler_tag:
      '<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&showPrint=0&showTitle=0&showCalendars=0&hl=pt_BR&src=YmU4ZWNkNGU0YTI0YmFkN2E3ZTUxMTIxNTcwNmIxMjcxZTY3NDQ3ZTRkZWJiMjA2NjgwNTkyZjNhYzAzYTM2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>',
  },
];
