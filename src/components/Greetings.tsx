type greetingProps = {
    name: string,
    today: string|number
}
export const Greetings = (props: greetingProps) => {
    return (  
        <div>
               <h1>Welcome {props.name}!</h1> 
               <h1>{props.today}</h1>

        </div>
    );
}

export default Greetings;