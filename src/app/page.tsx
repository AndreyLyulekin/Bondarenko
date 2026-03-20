'use client';

import styles from './page.module.css';
import { getContent } from '@/lib/content';
import { Header } from '@/components/Header';
import { useState } from 'react';
import Modal from '@/components/Modal';

function Placeholder({ text, imageSource }: { text: string, imageSource: string }) {
  return (
    <img
      src={imageSource}
      className={styles.ph}
      alt={`${text}`}
    />
  );
}

export default function Page() {
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const c = getContent();

  return (
    <>
      <Header />

      <main className={styles.main}>
        {/* HERO */}
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div>
                <h1 className={`${styles.h1} ${styles.textWhite}`}>
                  {c.hero.titleLines[0]}
                  <br />
                  {c.hero.titleLines[1]}
                </h1>

                <p className={`${styles.lead} ${styles.textWhite}`}>{c.meta.description}</p>

                <ul className={styles.bullets}>
                  {c.hero.bullets.map((b) => (
                    <li
                      className={`${styles.textWhite}`}
                      key={b}>
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  className={`${styles.btn} ${styles.btnAccent}`}
                  onClick={() => setOrderModalOpen(true)}>
                  {c.hero.primaryCta.label}
                </button>
              </div>

              <div className={styles.side}>
                {/* <div className={styles.imgRow}>
                  {c.hero.images.map((img, idx) => (
                    <Placeholder key={idx} text={c.ui.imagePlaceholder} />
                  ))}
                </div> */}
                {/* 
                <div id={c.leadForms.emergency.id} className={`${styles.card} ${styles.cardPad}`}>
                  <h3 className={styles.cardTitle}>{c.leadForms.emergency.title}</h3>
                  <form className={styles.form}>
                    <div className={styles.field}>
                      <div className={styles.label}>{c.leadForms.fields[1].label}</div>
                      <input className={styles.input} placeholder={c.leadForms.fields[1].placeholder} />
                    </div>
                    <button className={`${styles.btn} ${styles.btnAccent}`} type="submit">
                      {c.leadForms.emergency.button}
                    </button>
                    <p className={styles.consent}>{c.leadForms.emergency.consent}</p>
                  </form>
                </div> */}

                {/* <div id="plan" className={`${styles.card} ${styles.cardPad}`}>
                  <h3 className={styles.cardTitle}>{c.leadForms.plan.title}</h3>
                  <form className={styles.form}>
                    <div className={styles.field}>
                      <div className={styles.label}>{c.leadForms.fields[1].label}</div>
                      <input className={styles.input} placeholder={c.leadForms.fields[1].placeholder} />
                    </div>
                    <button className={`${styles.btn} ${styles.btnAccent}`} type="submit">
                      {c.leadForms.plan.button}
                    </button>
                    <p className={styles.consent}>{c.leadForms.plan.consent}</p>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className={styles.section}>
          <div className={styles.container}>
            <p className={styles.kicker}>{c.services.title}</p>
            <ul className={styles.list}>
              {c.services.items.map((text, i) => (
                <li
                  key={text}
                  className={styles.listItem}>
                  <div
                    className={styles.badge}
                    aria-hidden>
                    {i + 1}
                  </div>
                  <div className={styles.muted}>{text}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TECH */}
        <section className={`${styles.section} ${styles.tech}`}>
          <div className={styles.container}>
            <h2 className={`${styles.h2} ${styles.textWhite}`}>{c.tech.title}</h2>
            <div className={styles.grid2}>
              {c.tech.items.map((t, i) => (
                <div
                  key={t.title}
                  className={`${styles.card} ${styles.cardPad}`}>
                  <p className={styles.kicker}>{t.title}</p>
                  <p className={styles.muted}>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        {/* <section id={c.how.id} className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.card} ${styles.cardPad}`}>
              <h2 className={styles.h2}>{c.how.title}</h2>
              <p className={styles.muted}>{c.how.subtitle}</p>

              <div className={styles.steps}>
                {c.how.steps.map((s, idx) => (
                  <div key={s} className={styles.step}>
                    <div className={styles.stepNum} aria-hidden>
                      {idx + 1}
                    </div>
                    <div className={styles.priceName}>{s}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 18 }}>
                <Link className={`${styles.btn} ${styles.btnAccent}`} href={c.how.cta.href}>
                  {c.how.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* PRICING */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.h2}>{c.pricing.title}</h2>

            <div className={styles.grid2}>
              {c.pricing.items.map((p) => (
                <div
                  key={p.name}
                  className={styles.listItem}>
                  <div className={styles.priceRow}>
                    <div className={styles.priceName}>{p.name}</div>
                    <div className={styles.priceVal}>{p.price}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 18 }}>
              <button
                className={`${styles.btn} ${styles.btnAccent}`}
                onClick={() => setOrderModalOpen(true)}>
                {c.pricing.cta.label}
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id={c.about.id}
          className={`${styles.section} ${styles.about}`}>
          <div className={styles.container}>
            <h2 className={`${styles.h2} ${styles.textWhite}`}>
              {c.about.titleLines[0]}
              <br />
              {c.about.titleLines[1]}
            </h2>

            <p
              className={`${styles.muted} ${styles.textWhite}`}
              style={{ marginBottom: 18 }}>
              {c.about.text}
            </p>

            <div className={styles.grid3}>
              {c.about.features.map((f, idx) => (
                <div
                  key={idx}
                  className={`${styles.card} ${styles.cardPad} ${styles.transparent}`}>
                  {/* <Placeholder text={c.ui.imagePlaceholder} /> */}
                  <img className={styles.ph} src={f.img} alt='Фото техники'/>
                  <div className={`${styles.priceName} ${styles.textWhite}`}>
                    {f.titleLines.map((l, i) => (
                      <div key={i}>{l}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section
          id={c.contactsSection.id}
          className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.h2}>{c.contactsSection.title}</h2>

            <div className={styles.grid2}>
              <div className={`${styles.card} ${styles.cardPad}`}>
                <p className={styles.kicker}>{c.contactsSection.phonesTitle}</p>
                <p
                  className={styles.muted}
                  style={{ marginBottom: 10 }}>
                  <a href={`tel:${c.extraContacts.phoneFull.replace(/\D/g, '')}`}>{c.extraContacts.phoneFull}</a>
                  <br />
                  <a href={`tel:${c.contacts.phoneFull.replace(/\D/g, '')}`}>{c.contacts.phoneFull}</a>
                </p>

                <p className={styles.kicker}>{c.contactsSection.emailTitle}</p>
                <p className={styles.muted}>
                  <a href={`mailto:${c.contacts.email}`}>{c.contacts.email}</a>
                </p>
                
                <div style={{ height: 14 }} />
                <p className={styles.kicker}>{c.contactsSection.address}</p>
                <p className={styles.muted}>
                  {c.contacts.address}
                </p>

                <div style={{ height: 14 }} />
                <div className={styles.priceName}>{c.contacts.ctaCall}</div>
                <p
                  className={styles.muted}
                  style={{ marginTop: 8 }}>
                  {c.contacts.cities}
                </p>
                <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
                  {c.contacts.social.map((s) => (
                    <a
                      key={s.label}
                      className={`${styles.btn}`}
                      href={s.href}
                      target='_blank'
                      rel='noreferrer'>
                      <>
                        <img
                          className={`${styles.iconLink}`}
                          src={`${s.img}`}
                          alt='Social media icon'
                        />
                        {s.label}
                      </>
                    </a>
                  ))}
                </div>
              </div>

              <div className={`${styles.card} ${styles.cardPad}`}>
                <iframe
                  src='https://yandex.ru/map-widget/v1/?um=constructor%3A27a166240462b5b80bec6c7861ad728d454e760d2566bb0bd3d17605a005a7c6&amp;source=constructor'
                  frameBorder='0'></iframe>
              </div>
            </div>
          </div>
        </section>


        <Modal
          open={orderModalOpen}
          onClose={() => setOrderModalOpen(false)}>
          <div
            id={c.leadForms.emergency.id}
            className={`${styles.card} ${styles.cardPad}`}>
            <h3 className={styles.cardTitle}>{c.leadForms.emergency.title}</h3>
            <form className={styles.form}>
              <div className={styles.field}>
                <div className={styles.label}>{c.leadForms.fields[1].label}</div>
                <input
                  className={styles.input}
                  placeholder={c.leadForms.fields[1].placeholder}
                />
              </div>
              <button
                className={`${styles.btn} ${styles.btnAccent}`}
                type='submit'>
                {c.leadForms.emergency.button}
              </button>
              <p className={styles.consent}>{c.leadForms.emergency.consent}</p>
            </form>
          </div>
        </Modal>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          © {new Date().getFullYear()} {c.brand.name}
        </div>
      </footer>
    </>
  );
}
