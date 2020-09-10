import Me from "../../Me"
import React from "react";
import {render, screen} from "@testing-library/react"

describe('test of functional component Me', () =>{
    test('check if component have proper text content', ()=>{
        render(<Me />)
        expect(screen.getByText('Hello my name is Julia this is my first blog. xI like frogs.')).not.toBeNull()
    })
    test('check if component have proper autor name', () =>{
        render(<Me />)
        const meComponent = screen.getByTestId('me-component')
        expect(meComponent).toBeTruthy()
        expect(meComponent.textContent).toContain('Julia')
    })
})
