import { Container } from "@/components/Section/Container";
import { Section } from "@/components/Section/Section";
import { Say } from "@/components/Say/Say";
import { contactLinks, guideLines, site } from "@/data/site";
import { CopyButton } from "./CopyButton";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Section id="contact" tone="black">
      <Container node>
        <Say>{guideLines.contact}</Say>
        <div className={styles.wrap}>
          <div>
            <h2>Have a product, role or collaboration in mind?</h2>
            <p className={styles.sub}>I&apos;d be happy to connect. Email is the quickest way to reach me.</p>
          </div>
          <ul className={styles.links}>
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span>{link.label}</span>
                  <span className={styles.value}>{link.value}</span>
                </a>
                {link.copyable && <CopyButton text={link.value} />}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.foot}>
          <span>{site.name}</span>
          <span>&copy; {site.year}</span>
        </div>
      </Container>
    </Section>
  );
}
