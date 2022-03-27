import React from 'react';
import { ReactComponent as Github} from '../../img/github.svg';

import Header from '../components/templates/Header';
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer';

import Section from '../components/organisms/Section';

import Nav from '../components/molecules/Nav';
import Div from '../components/molecules/Div'

import Label from '../components/atoms/Label';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import Span from '../components/atoms/Span';
import H1 from '../components/atoms/H1';
import P from '../components/atoms/P';


import useFetch from '../hooks/useFetch';
import { GET_USER, GET_REPOS, GET_STARRED } from '../utils/api';
import Img from '../components/atoms/Img';

const Home = () => {

  const [userName, setUserName] = React.useState(null);
  const { data, request } = useFetch();

  React.useEffect(() => {
    
    document.body.classList.add('home');

  }, []);

  function handleClick() {
    const _userName = document.querySelector('[data-input="target"]').value;
    setUserName(_userName);
  }

  React.useEffect(() => {
    
    async function getData() {
      
      if (userName != null) {
        const { url, options} = GET_USER(userName);
        const { json } = await request(url, options);
        document.title = `Finder - ${json.login}`;
        console.log(json);
      }

    }

    getData();

  }, [userName]);

  return (
    <>
      <Header className="header">
        <Nav className="container header__nav">
          <Div className="header__logo">
            <Github />
            <Span>Finder</Span>
          </Div>
          <Div className="header__search">
            <Label htmlFor="buscar" name="buscar">
              <Input className="header__input" type="text" name="buscar" placeholder="buscar" data-input="target" />
            </Label>
            <Button className="header__button" onClick={handleClick}>OK</Button>
          </Div>
        </Nav>
      </Header>

      <Main className="main">
        <Section className="container main__section">
          {
            data && 
            <Div >
              <H1>nome: <strong>{data.login}</strong></H1>
              <Img src={data.avatar_url} />
            </Div>
          }
        </Section>
      </Main>

      <Footer className="footer">
      </Footer>
    </>
  )

}

export default Home;