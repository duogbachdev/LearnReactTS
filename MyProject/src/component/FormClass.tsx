import axios from 'axios'
import React, { ChangeEvent, Component, FormEvent } from 'react'
interface Iproduct {
  name: string,
  textarea: string,
  checked: boolean,
  select : string,
}
export class FormClass extends Component <{},Iproduct> {
  constructor(props:{} ) {
    super(props)
    this.state = {
      name: '',
      textarea: '',
      checked: false,
      select : "javascript"
    }
  }
  handelSubmit = async(event : FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await axios.post("http://localhost:4000/schema", this.state)
  }
  //  handelChangeName = (event : ChangeEvent<HTMLInputElement>) => {
  //    console.log(event.target.value)
  //    this.setState({name : event.target.value})
  //  }
  //  handelChangeTextArea = (event : ChangeEvent<HTMLTextAreaElement>) => {
  //    console.log(event.target.value)
  //    this.setState({textarea : event.target.value})
  //  }
  // checkedChange = (event : ChangeEvent<HTMLInputElement>) => {
  //   this.setState({
  //     checked : event.target.checked
  //   })
  // }
  // handelSelcectChange = (event : ChangeEvent<HTMLSelectElement>) => {
  //       this.setState({
  //     select : event.target.value
  //   })
  // }
  handelChange = (event : ChangeEvent<HTMLInputElement |HTMLTextAreaElement | HTMLSelectElement>) => {
    const { target } = event
    const value = target.type === "checkbox" ? (target as HTMLInputElement ).checked : target.value
    const {name} = target
    this.setState({
      [name] : value
    } as Pick<Iproduct, keyof Iproduct>)
  }
  componentDidMount(): void {
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <label htmlFor="">name</label>
          <input id='name' name='name' value={this.state.name} onChange={this.handelChange} type="text" placeholder='enter your name ' />
          <textarea name='textarea' value={this.state.textarea} onChange={this.handelChange} />
          <input checked={this.state.checked} onChange={this.handelChange} name='checked' type="checkbox"  id="" />
          <select value={this.state.select} name='select'  onChange={this.handelChange}>
            <option  value="lime">lime </option>
            <option value="mango">mango </option>
            <option  value="javascript">javascript </option>
            <option  value="react">react </option>
          </select>

          <button type="submit"> submit form data </button>
        </form>
      </div>
    )
  }
}

export default FormClass
