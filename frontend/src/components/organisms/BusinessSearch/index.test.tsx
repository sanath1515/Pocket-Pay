import React from "react";
import { act,fireEvent, render,screen } from "@testing-library/react";
import BusinessSearch from ".";

describe("BusinessSearch", () => {
  

  it("renders the search bar and options", () => {
    const mockfunction=jest.fn()
    render(<BusinessSearch handleSelectBusiness={mockfunction}/>);
    const search=screen.getByTestId("search")
    fireEvent.click(search)
    const options=screen.getAllByTestId("menu-item")
    options.forEach(option=>{
      fireEvent.click(option)
    })
  });
  it("renders search bar through input field selection",()=>{
    const mockfunction=jest.fn()
    const {container}=render(<BusinessSearch handleSelectBusiness={mockfunction}/>);
    const search=container.querySelector('#searchfield') as HTMLInputElement
    act(()=>{
      fireEvent.change(search,{target:{value:/ze/i}})
    })

    const options=screen.getAllByTestId("menu-item")
    options.forEach(option=>{
      fireEvent.click(option)
    })
  })
  it("options will not open when option not found",()=>{
    const mockfunction=jest.fn()
    const {container}=render(<BusinessSearch handleSelectBusiness={mockfunction}/>);
    const search=container.querySelector('#searchfield') as HTMLInputElement
    act(()=>{
      fireEvent.change(search,{target:{value:""}})
    })
    
  })
  it("renders the search bar ", () => {
    const mockfunction=jest.fn()
    render(<BusinessSearch handleSelectBusiness={mockfunction}/>);
    const search=screen.getByTestId("search")
    fireEvent.click(search)
    fireEvent.click(screen.getByTestId("searchvalue"))
    const search2=screen.getByTestId("search")
    fireEvent.click(search2)
  });

});