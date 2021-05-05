import styles from './CalloutBlade.module.css'

export default function CalloutBlade({ title }) {
  return (
    <section className={styles.calloutBlade}>
      <div className={styles.contentWrapper}>
        <h3>{title}</h3>
      </div>
    </section>
  )
}
