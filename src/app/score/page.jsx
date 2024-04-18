
import Contador from './scoreComponent'

export default function Score() {
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
        }}>
            <h1>Contador:???</h1>
            <Contador />
        </div>
    )
}