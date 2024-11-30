import { FunctionComponent, useMemo } from "react";
import questBanners from "../../public/utils/questbanners.json";
import styles from "@styles/quests.module.css";
import Button from "@components/UI/button";

type QuestBannerProps = {
  questId: string;
};

const QuestBanner: FunctionComponent<QuestBannerProps> = ({ questId }) => {
  const bannerDetails = useMemo(() => {
    return questBanners.find((banner) => banner.questId === questId);
  }, [questId]);
  return bannerDetails ? (
    <div className={styles.questBanner}>
      <div
        className={styles.questBannerImage}
        style={{ backgroundImage: `url(${bannerDetails.image})` }}
      />
      <div className={styles.questBannerContent}>
        <h2 className={styles.questBannerTitle}>
          {bannerDetails.tag ? (
            <span className={styles.bannerTag}>{bannerDetails.tag} - </span>
          ) : null}
          {bannerDetails.title}
        </h2>
        <p>{bannerDetails.description}</p>
        <div className="w-fit">
          <Button
            onClick={() => {
              window.open(bannerDetails.href, "_blank");
            }}
          >
            {bannerDetails.cta}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default QuestBanner;
