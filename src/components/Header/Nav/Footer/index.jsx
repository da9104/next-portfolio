import styles from './style.module.scss';
import { Link } from 'next/link';

export default function index() {
  return (
    <div className={styles.footer}>
        <a>Blog</a>
        <a>Instagram</a>
        <a href={'https://www.behance.net/d9104'}>Behance</a>
        <a>LinkedIn</a>
    </div>
  )
}