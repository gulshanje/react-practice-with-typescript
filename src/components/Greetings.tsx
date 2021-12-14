type greetingProps = {
    name: string,
    today: string|number
    family: {
        first: string,
        last: string
    }[]
}
export const Greetings = (props: greetingProps) => {
    return (  
        <div>
               <h1>Welcome {props.name}!</h1> 
               <h1>{props.today}</h1>
               { props.family.map(perhe => {
                   return (
                       <h1>{perhe.first} - {perhe.last} </h1>
                   )
               } )}

        </div>
    );
}

export default Greetings;