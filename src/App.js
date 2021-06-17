import './App.css';
import Search from './Components/Search';
import dataset from './Dataset/dataset';
import filterData from './filterData';
import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components'
import Flex from './Styled/Flex';

const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
padding: 2rem;
background: rgb(238,174,202);
background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
`

function App() {

  const { search } = window.location
  const query = new URLSearchParams(search).get('s')
  const [searchQuery, setSearchQuery] = useState(query || '')
  const filteredData = filterData(dataset, searchQuery)

  return (
    <AppWrapper>
      <Router>

      <Flex>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      </Flex>
      
      <Flex>
        <ul style={{marginRight:90}}>
          {filteredData.map((data) => (
            <li style={{width:200}}>{data}</li>
          ))}
         </ul>
      </Flex>

      </Router>
    </AppWrapper>
  );

}

export default App;
