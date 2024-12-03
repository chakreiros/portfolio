//#region images
import bellyLogo from "@/assets/images/costumers/belly/logo-belly.jpg";
import belly from "@/assets/images/costumers/belly/Belly.jpg";
import belly1 from "@/assets/images/costumers/belly/Belly(1).jpg";
import belly2 from "@/assets/images/costumers/belly/Belly(2).jpg";
import belly3 from "@/assets/images/costumers/belly/Belly(3).jpg";
import voOrlandoLogo from "@/assets/images/costumers/vo-orlando/logo-vo-orlando.jpg";
import voOrlando1 from "@/assets/images/costumers/vo-orlando/vo-orlando(1).jpg";
import voOrlando2 from "@/assets/images/costumers/vo-orlando/vo-orlando(2).jpg";
import voOrlando3 from "@/assets/images/costumers/vo-orlando/vo-orlando(3).jpg";
//#endregion
//#endregion

export default [
  {
    title: "Chácara Belly",
    info: {
      size: "900m²",
      host_capacity: "100 pessoas",
      event_capacity: "100 pessoas",
      description: "",
      furniture: true,
      barbecue_area: true,
      cooking_area: true,
    },
    category: "Chácara",
    logo: bellyLogo,
    images: [belly, belly1, belly2, belly3],
  },
  {
    title: "Chácara do Vô Orlando",
    info: {
      size: "",
      host_capacity: "",
      event_capacity: "",
      description: "",
      locality: "",
      furniture: "",
      barbecue_area: "",
      cooking_area: "",
    },
    category: "Chácara",
    logo: voOrlandoLogo,
    description: "",
    images: [voOrlando1, voOrlando2, voOrlando3],
  },
];
