import { Container } from "react-bootstrap";
import Carousel from "@/components/front/Carousel";
import { Slide } from "@/components/front/components.interface";

import "@/assets/style/front/banner.scss";

export default function Banner() {
  const slidesData: Slide[] = [
    {
      title: "享樂酒店",
      subtitle: "Enjoyment Luxury Hotel",
      location: "高雄",
      choice: "豪華住宿之選",
      description: "我們致力於為您提供無與倫比的奢華體驗與優質服務",
      images: {
        mobile: "src/assets/image/M-banner.png",
        desktop: "src/assets/image/D-banner.png",
      },
    },
    {
      title: "享樂酒店",
      subtitle: "Enjoyment Luxury Hotel",
      location: "台北",
      choice: "安靜避風港",
      description: "在繁忙都市中為您提供都市綠洲舒適感",
      images: {
        mobile: "src/assets/image/M-banner.png",
        desktop: "src/assets/image/D-banner.png",
      },
    },
  ];

  return (
    <Container
      fluid
      className="banner d-flex justify-content-center align-items-center"
    >
      <Carousel slides={slidesData} interval={5000} />
    </Container>
  );
}
