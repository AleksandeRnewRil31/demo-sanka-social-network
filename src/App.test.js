import SankaJsApp from './App';
import ReactDOM from "react-dom";
import React from "react";

// test('renders learn react link', () => {
//   render(<SankaJsApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SankaJsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});