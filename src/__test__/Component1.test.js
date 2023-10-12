import { render, cleanup, screen} from '@testing-library/react';
import Component1 from '../components/Component1';
test ( "component 1 testing", () =>{
    const details= {id: 2, user:"Mohan", fulltime:true}
    render(<Component1 details={details}/>);
    const comp1 =  screen.getByTestId("comp-2");// accessing the comp with test id
    console.log(comp1, "hii")
    expect(comp1).toContainElement(comp1.querySelector('h2'));// checking if the h2 tag is rendered for fulltime :true
    expect(comp1).toHaveTextContent("Mohan")// checking the component has the given text
} )