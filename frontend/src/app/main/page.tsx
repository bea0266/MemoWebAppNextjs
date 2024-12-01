import CategoryAreaView from "./components/CategoryAreaView";
import MemoAreaView from "./components/MemoAreaView";
import ProfileAreaView from "./components/ProfileAreaView";
import SettingAreaView from "./components/SettingAreaView";

export default function MainView() {
    return (
      <div>
        <ProfileAreaView />
        <CategoryAreaView />
        <MemoAreaView />
        <SettingAreaView />
      </div>
    );
  }
  