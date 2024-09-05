import { useRouter } from "next/router"

export default function storePage(){
    const router = useRouter();
    const{id} = router.query;

    return(
        <h1> store Edit {id}</h1>
    )
}