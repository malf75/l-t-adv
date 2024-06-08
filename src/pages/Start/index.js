import Areas from "../../components/Areas";
import Carrossel from "../../components/Carrossel";
import Contact from "../../components/Contact";

export default function Start(){
    return (
        <main>
            <Carrossel />
            <Areas poshg={'poshg'}/>
            <Contact />
        </main>
    )
}