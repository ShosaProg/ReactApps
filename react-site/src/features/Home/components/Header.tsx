import React from "react";
import styles from "./Home.module.scss";
import {
  ActivePageState,
  pages,
  useActivePageStore,
} from "../../../stores/ActivePageStore";
import clsx from "clsx";

const linkElements = [
  {
    name: pages.home,
  },
  {
    name: pages.about,
  },
  {
    name: pages.skills,
  },
  {
    name: pages.works,
  },
  {
    name: pages.contact,
  },
];

type Props = {
    scrollRefs: React.MutableRefObject<React.RefObject<HTMLElement | HTMLDivElement>[]>;
};

export const Header = (props: Props) => {
  const activePageStore = useActivePageStore((state: ActivePageState) => state);

  const onNavClick =
  (name: keyof typeof pages, index: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    activePageStore.setActivePage(name);
    props.scrollRefs.current[index].current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu_list}>
          {linkElements.map((x, i) => {
            let active: string = "";
            if (activePageStore.activePage === x.name) {
              active = styles.active;
            }

            return (
              <React.Fragment key={x.name}>
                <li className={clsx(styles.menu_item, active)}>
                  <a
                    href="/#"
                    className={styles.menu_link}
                    onClick={onNavClick(x.name, i)}
                  >
                    <span>{x.name}</span>
                  </a>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
