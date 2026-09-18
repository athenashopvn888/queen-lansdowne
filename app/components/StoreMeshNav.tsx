import Link from "next/link";
import { MESH_HUB_LINKS, TIER_MESH_LINKS } from "../lib/gbp-location";
import styles from "./StoreMeshNav.module.css";

export function StoreMeshNav({ currentPath }: { currentPath?: string }) {
  const hubs = MESH_HUB_LINKS.filter((link) => link.href !== currentPath);
  const tiers = TIER_MESH_LINKS.filter((link) => link.href !== currentPath);

  return (
    <nav className={styles.mesh} aria-label="Queen West store pages">
      <p className={styles.label}>Queen West pages on this store</p>
      <div className={styles.row}>
        {hubs.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className={styles.row}>
        {tiers.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
