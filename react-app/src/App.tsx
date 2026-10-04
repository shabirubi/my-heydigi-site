import "./styles.css";
import RestaurantNav from "./components/RestaurantNav";
import CulinaryCover from "./components/CulinaryCover";
import SignatureDishes from "./components/SignatureDishes";
import KitchenStory from "./components/KitchenStory";
import VisitPanel from "./components/VisitPanel";
import RestaurantFooter from "./components/RestaurantFooter";

export default function App() {
  return (
    <div lang="he" dir="rtl" className="min-h-screen bg-background text-foreground">
      <RestaurantNav />
      <main data-section-id="app-s1">
        <CulinaryCover />
        <SignatureDishes />
        <KitchenStory />
        <VisitPanel />
      </main>
      <RestaurantFooter />
    </div>
  );
}