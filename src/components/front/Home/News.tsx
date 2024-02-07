import { Container, Row, Col, Card } from "react-bootstrap";
import "@/assets/style/front/components/Home/news.scss";

const NewsCard = () => {
  const newsData = [
    {
      imgUrl: "src/assets/image/news1.png",
      title: "秋季旅遊，豪華享受方案",
      content:
        "秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。",
    },
    {
      imgUrl: "src/assets/image/news2.png",
      title: "輕鬆住房專案",
      content:
        "我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。",
    },
    {
      imgUrl: "src/assets/image/news3.png",
      title: "耶誕快樂，住房送禮",
      content:
        "聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！",
    },
  ];

  return (
    <>
      {newsData.map((news) => (
        <Card key={news.title} className="news-card">
          <Row className="g-0">
            <Col md={5}>
              <Card.Img
                variant="top"
                src={news.imgUrl}
                className="news-card-image h-100"
              />
            </Col>
            <Col md={7}>
              <Card.Body className="news-card_content">
                <Card.Title className="news-card_content__title">
                  {news.title}
                </Card.Title>
                <Card.Text className="news-card_content__subtitle">
                  {news.content}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
};

const News = () => {
  return (
    <div className="home-news">
      <Container>
        <Row>
          <Col sm={2}>
            <h2 className="news-title">
              <p>最新</p>
              <p>消息</p>
            </h2>
            <p className="news-line"></p>
          </Col>
          <Col>
            <NewsCard />
          </Col>
        </Row>
      </Container>
      <div className="image-dot dot1">
        <img src="src/assets/image/dot.png" alt="點點圖" />
      </div>
      <div className="image-dot dot2">
        <img src="src/assets/image/dot.png" alt="點點圖" />
      </div>
    </div>
  );
};

export default News;
