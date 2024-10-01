import { motion } from "framer-motion";
import "./overview.scss";
import notification from "../../assets/notif.svg";
import profilePicture from "../../assets/Profil.svg";
import { ReactNode } from "react";


type Props = {
  title: string | ReactNode;
}

const OverviewHeader = ({ title }: Props) => {
  return (
    <div className="overview__main__header">
      <motion.div className="overview__main__header__left">{title}</motion.div>
      <div className="overview__main__header__right">
        <img src={notification} alt="notifications" loading="lazy" />
        <img src={profilePicture} alt="profile picture" loading="lazy" />
      </div>
    </div>
  );
}

export default OverviewHeader