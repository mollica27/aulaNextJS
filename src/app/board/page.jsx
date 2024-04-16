import BoardComponent from '../board/boardComponent'
import styles from '../board/page.module.css'


export default function Board(){
    return (

        <main className={styles.main}>
             <BoardComponent />
             <BoardComponent />
             <BoardComponent />
        </main>
       

    )
}