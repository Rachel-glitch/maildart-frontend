import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('TestRenderingReactLink1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mailgun/i);
  expect(linkElement).toBeInTheDocument();
});

test('TestRenderingReactLink2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nodemailer/i);
  expect(linkElement).toBeInTheDocument();
});

test('TestRenderingReactLink3', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mailgun/i);
  expect(linkElement).toBeInTheDocument();
});

test('TestRenderingReactLink4', () => {
  render(<App />);
  const linkElement = screen.getByText(/SendGrid/i);
  expect(linkElement).toBeInTheDocument();
});
//--------------------------------------------------------------------

test('TestLabelRendering', () => {
  render(<App />);
  const labelEl = screen.getByTestId(/subject-input/i);
  expect(labelEl).toBeInTheDocument();
});

test('TestSubectInputTextValue', () => {
  render(<App />);
  const inputEl = screen.getByTestId("subject-input");
  fireEvent.change(inputEl, {target:{value:'subject example'}})
  expect(inputEl.value).toBe('subject example')
});

test("TestRaio1Text", () => {
  render(<App/>);
  const radio = screen.getByTestId('listmonk')
  fireEvent.change(radio, { target: { value: "Listmonk" } });
  expect(radio.value).toBe('Listmonk')
});

test("TestRadio4HavingConcreteAttribute", () => {
  render(<App/>);
  const radio = screen.getByTestId('sendgrid')
  fireEvent.change(radio, { target: { value: "SendGrid" } });
  fireEvent.click(radio)
  expect(radio).toHaveAttribute('name');
});

  test("TestRadio1HavingConcreteAttribute", () => {
    render(<App/>);
    const radio = screen.getByTestId('listmonk')
    fireEvent.change(radio, { target: { value: "Listmonk" } });
    fireEvent.click(radio)
    expect(radio).toHaveAttribute('id');
  });

  test("TestRadio3HavingConcreteAttribute", () => {
    render(<App/>);
    const radio = screen.getByTestId('mailgun')
    fireEvent.change(radio, { target: { value: "Mailgun" } });
    fireEvent.click(radio)
    expect(radio).toHaveAttribute("type", "radio");
  });

  test("TestRadio2HavingConcreteAttribute", () => {
    render(<App/>);
    const radio = screen.getByTestId('nodemailer')
    fireEvent.change(radio, { target: { value: "Nodemailer" } });
    fireEvent.click(radio)
    expect(radio).toHaveAttribute('type', "radio");});

  test("TestRadio1CheckedAttribute", () => {
    render(<App/>);
    const radio = screen.getByTestId('listmonk')
    fireEvent.change(radio, { target: { value: 'Listmonk' } });
    fireEvent.click
    expect(radio).toBeChecked;
  });

  test("radio2 checked", () => {
    render(<App/>);
    const radio = screen.getByTestId('nodemailer')
    fireEvent.change(radio, { target: { value: 'Nodemailer' } });
    fireEvent.click
    expect(radio).toBeChecked;
  });

  test('TestRadio2LabelText', () => {
    render(<App />);
    expect(screen.getByTestId("nm").textContent).toEqual("Nodemailer");
  });

  test("TestRadio2Attribute", () => {
    render(<App/>);
    const radio = screen.getByTestId('nodemailer')
    fireEvent.change(radio, { target: { value: "Nodemailer" } });
    expect(radio).toHaveAttribute('id');
  });


it("TestButtonRender", () => {
  const{queryByTitle} = render(<App/>);
  const btn = queryByTitle("unsubscribeButton");
  expect(btn).toBeTruthy();
});

it("TestSubjectInput", ()=>{
  const{queryByTitle} = render(<App/>);
  const sbj = queryByTitle("subject-input");
  expect(sbj).toBeInTheDocument();
  expect(sbj).toHaveAttribute("type", "text");
})

it("TestFileInput", ()=>{
  const{queryByTitle} = render(<App/>);
  const sbj = queryByTitle("file-input");
  expect(sbj).toBeInTheDocument();
  expect(sbj).toHaveAttribute("type", "file");
})

test("TestEmailTextInput", () => {
  render(<App/>);
  const input = screen.getByTestId('email-input')
  fireEvent.change(input, { target: { value: "email text example 1" } });
  expect(input.value).toBe('email text example 1')
});

test("TestAuthKeyInput", () => {
  render(<App/>);
  const input = screen.getByTestId('authKey-input')
  fireEvent.change(input, { target: { value: "auth key" } });
  expect(input.value).toBe('auth key')
});

test('TestDisplayingEmailDefaultText', () => {
  render(<App />);
  expect(screen.getByTestId("emailDefault")).toHaveTextContent("there will be some email content");
});

test('TestChangeEmailText', () => {
  render(<App />);
  const input = screen.getByTestId('email-input')
  fireEvent.change(input, { target: { value: "email text example 1" } });
  const btnIncrement = screen.getByTestId("send-button");
  fireEvent.click(btnIncrement);
  expect(screen.getByTestId("emailDefault")).toHaveTextContent("email text example 1");
});


test('TestRenderingRadioFileText', () => {
  render(<App />);
  expect(screen.getByTestId("sg").textContent).toEqual("SendGrid");
});
