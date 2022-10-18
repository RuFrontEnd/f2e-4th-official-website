import styles from "./topicCard.module.css";
import Button from "components/button/Button";

function TopicCard(props) {
  return (
    <div className={`${styles["topic-card"]} ${props.className}`}>
      <div
        className={`${styles["top-content"]} d-flex justify-content-between`}
      >
        <p className={`${styles["title"]}`}>{props.title}</p>
        <img
          className={`${styles["company-img"]}`}
          src={props.company?.src}
          width={props.company?.width}
          height={70}
        ></img>
      </div>
      <div className={`${styles.content} d-flex`}>
        <div
          className={`${styles["img-wrapper"]} h-100 d-flex align-items-center`}
        >
          <img src={props.img} width={320} height={290}></img>
        </div>
        <div className={`d-flex flex-column justify-content-between`}>
          <div>
            <p className={`${styles.project}`}>{props.project}</p>
            <p className={`${styles.illustrate}`}>{props.illustrate}</p>
          </div>
          <div>
            <Button className={`${styles.raiders}`} secondary>
              關卡攻略
            </Button>
            <Button className={`${styles.post}`}>投稿</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicCard;
