import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t, lang } = useTranslation('common')
  const example = t('variable-example', { count: 42 })
  const title = t('title')
  return (
    <div className={styles.container}>
      <div>{example}</div>
      <div>{title}</div>

      <div>
        <a href="/fr"><button > FR </button></a>
        <a href="/en"><button > EN </button></a>
        <a href="/es"><button > ES </button></a>
      </div>
    </div>
  )
}
