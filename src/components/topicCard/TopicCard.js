import styles from "./topicCard.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import blockStudio from "assets/block-studio.svg";
import parallex from "assets/parallex.svg";
import pdf from "assets/pdf.svg";
import Button from "components/button/Button";

function TopicCard(props) {
  return (
    <div className={`${styles["topic-card"]} ${props.className}`}>
      <div className={"d-flex justify-content-between"}>
        <p className={`${styles["title"]}`}>視差滾動 Parallax Scrolling</p>
        <img src={blockStudio} width={327} height={69}></img>
      </div>
      <div className={`${styles.content} d-flex`}>
        <div
          className={`${styles["img-wrapper"]} h-100 d-flex align-items-center`}
        >
          <img src={pdf} width={320} height={290}></img>
        </div>
        <div className={`d-flex flex-column justify-content-between`}>
          <div>
            <p className={`${styles.project}`}>The F2E 活動網站設計</p>
            <p className={`${styles.illustrate}`}>
              請參考本屆官網的首頁視差滾動技巧，並請您重新 redesign
              本頁面來設計。
            </p>
          </div>
          <div>
            <Button className={`${styles.raiders}`} secondary>關卡攻略</Button>
            <Button className={`${styles.post}`}>投稿</Button>
          </div>
        </div>s
      </div>
    </div>
  );
}

export default TopicCard;
