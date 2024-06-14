import styles from './EmptyPage.module.scss'
import { IEmptyPagePops } from './EmptyPage.pops'

const EmptyPage: React.FC<IEmptyPagePops> = ({img, label}) => {
    return(
        (
            <div className={styles.NoContent}>
                <img src={img} alt={label} />
                <h2>{label}</h2>
            </div>
        )
    )
}

export default EmptyPage;