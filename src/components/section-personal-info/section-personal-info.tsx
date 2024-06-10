import { personalInfo } from "@/utils/constants/personal-info";
import { socialNetworks } from "@/utils/constants/social-networks";
import Image from "next/image";

export default function SectionPersonalInfo() {
  return (
    <aside className="px-5 py-10 bg-white dark:bg-black text-center rounded-3xl">
      <Image
        src="/images/portfolio-photo.webp"
        alt="portfolio photo"
        width={240}
        height={240}
        priority
        className="inline-block rounded-xl mb-5"
      />
      <h2 className="font-medium text-[1.375rem] mb-3">Lucas Barrenechea</h2>

      <div className="bg-[--bg-dark-primary] text-[--body-text] w-fit mx-auto px-5 py-1 rounded-lg font-medium text-sm h-9 flex items-center mb-4">
        <p>Frontend Developer</p>
      </div>

      <div className="mb-7 flex items-center justify-center gap-3.5">
        {socialNetworks.map((item) => (
          <a
            href={item.link}
            key={item.label}
            target="_blank"
            className={`w-10 h-10 text-xl bg-[--bg-dark-primary] rounded-lg flex items-center justify-center ${item.colorClass}`}
          >
            <i className={item.icon}></i>
          </a>
        ))}
      </div>

      <div className="mb-7 bg-[--bg-dark-primary] rounded-2xl p-5">
        <ul>
          {personalInfo.map((item) => (
            <li
              key={item.field}
              className="flex items-center gap-3.5 py-2.5 border-b border-[--color-divider] last:border-0"
            >
              <div
                className={`w-[44px] h-[44px] bg-white dark:bg-black rounded-lg flex items-center justify-center shrink-0 shadow-md text-xl ${item.colorClass}`}
              >
                <i className={item.icon}></i>
              </div>
              <div className="text-left">
                <small className="text-[--body-text]">{item.field}</small>
                <p
                  className="xl:w-[180px] min-[1400px]:w-full truncate"
                  title={item.value}
                >
                  {item.value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="/docs/CV_LucasBarrenechea.pdf"
        download
        className="bg-[--primary-color] text-lg py-3.5 px-8 inline-block rounded-xl font-medium text-white"
      >
        <i className="fa-solid fa-download mr-1"></i>
        {""}
        Download CV
      </a>
    </aside>
  );
}
