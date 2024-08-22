import { FaShoppingCart } from "react-icons/fa";
import "./App.css";
import ProductSection from "./components/ProductSection";
import TabBar from "./components/tabBar";
import UserCard from "./components/UserCard";
import ExamCart from "./components/ExamCart";

function App() {
  return (
    <>
      <TabBar />
      <section className="dashboard">
        <main className="flex flex-col gap-4 p-4 md:w-fit mx-auto">
          <div className="topSection flex flex-col md:flex-row gap-5">
            <UserCard />
            <ProductSection />
          </div>
          <ExamCart />
        </main>
      </section>
    </>
  );
}

export default App;
