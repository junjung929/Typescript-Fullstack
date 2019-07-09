import React, { Component } from 'react';
import { getData } from '../actions';

interface IOwnState extends Record<string, any> {
  i: string;
}
interface IOwnProps {
    name?:string;
}
type AllProps = IOwnProps;
class Main extends Component<AllProps, IOwnState> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      i: 'as',
    };
  }
  public componentDidMount(){
      getData('/data');
  }
  public render(): JSX.Element {
      const {i} = this.state;
    return <div>{i}</div>;
  }
}
export default Main;
