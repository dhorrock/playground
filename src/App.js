import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import flag from "./flag.svg";
import cart from "./icon_cart.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <View>
        <Header>
          <Logo>
            <Image src={logo} />
          </Logo>
          <SearchView>
            <SearchBar>Search EQ3</SearchBar>
          </SearchView>
          <LinkView>
            <Link>Find a store</Link>
            <Link>Blog</Link>
            <Link>French</Link>
            <Link>Sign in</Link>
          </LinkView>
          <EndView>
            <SplitEndView>
              <EndIcon src={flag} />
            </SplitEndView>
            <SplitEndView>
              <EndIcon src={cart} />
            </SplitEndView>
          </EndView>
        </Header>
      </View>
    );
  }
}
const View = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background-color: white;
  max-width: 1200px;
`;

const Logo = styled.div`
  display: flex;
  background-color: white;
  width: 76px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin-left: 32px;
  width: 76px;
`;

const SearchView = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-left: 58px;
`;

const SearchBar = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 40px;
  align-items: center;
  border: 1px solid #707070;
  margin-right: 32px;
  border-radius: 4px;
`;

const LinkView = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
`;

const Link = styled.div`
  display: inline;
  font-size: 12px;
  margin: 0;
  margin-right: 32px;
`;

const EndView = styled.div`
  display: flex;
  background-color: white;
  min-width: 150px;
`;

const SplitEndView = styled.div`
  display: flex;
  background-color: white;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

const EndIcon = styled.img`
  width: 340x;
`;

export default App;
