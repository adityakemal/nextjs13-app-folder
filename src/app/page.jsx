import HomeSection from "@/components/HomeSection";
import SideBar from "./profile/SideBar";

export const metadata = {
  title: "Home",
  description: "my home page",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello world</h1>
      <HomeSection />
    </main>
  );
}
