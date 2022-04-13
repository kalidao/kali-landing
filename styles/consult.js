import { Button } from "./cta";

export const ConsultButton = () => {
    const clickHandler = () => {
        window.open("https://calendly.com/kalidao/15min", "_blank")
    }
    
    return <Button onClick={clickHandler}> 
        Book a Consultation
    </Button>;
}