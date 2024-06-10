import SectionPersonalInfo from "@/components/section-personal-info/section-personal-info";

export default function Home() {
  return (
    <main className="container grid xl:grid-cols-[27.5%_1fr] 2xl:grid-cols-[27.5%_1fr_minmax(120px,_144px)] gap-[30px]">
      <SectionPersonalInfo />
      <div className="bg-white dark:bg-black rounded-3xl"></div>
      <div className="bg-white dark:bg-black rounded-3xl"></div>
    </main>
  );
}
